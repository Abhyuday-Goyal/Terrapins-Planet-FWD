from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()
import os
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from typing import Dict, Tuple, List
import requests
import psycopg2.pool as pool
import json
import sys
external_path = os.path.abspath('sql')
external_path2 = os.path.abspath('ingestion')
sys.path.append(external_path)
sys.path.append(external_path2)

from add import insert_row

import requests
from bs4 import BeautifulSoup
import urllib.parse
import re
from lca import generate_lca

import ollama
from pathlib import Path


def get_desc(image_path):
    # Define image path
    image_path = Path(image_path)

    # Read the image file as bytes
    with open(image_path, "rb") as image_file:
        image_data = image_file.read()

    out = ollama.generate(
        model="llava",
        prompt="""You need to identify what the object in the image is and what the dimensions of the object are.
        It is very important that you give me the dimensions so make your best approximations and return length x width x heigh in cms.
        Think about it carefullly and answer properly, if you feel like you can't then approximate. No matter what you need to give dimensions """,
        images=[image_data]
    )

    print(out['response'])

    return out['response']

class GoogleScraper:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        self.base_url = "https://www.google.com/search"

    def clean_text(self, text):
        """Remove extra whitespace and clean up text"""
        if text:
            # Remove special characters and extra whitespace
            text = re.sub(r'\s+', ' ', text)
            return text.strip()
        return ""

    def extract_url_from_redirect(self, redirect_url):
        """Extract actual URL from Google's redirect URL"""
        try:
            # Find the actual URL in Google's redirect URL
            start = redirect_url.find('&url=')
            if start != -1:
                actual_url = redirect_url[start + 5:]
                end = actual_url.find('&')
                if end != -1:
                    actual_url = actual_url[:end]
                return urllib.parse.unquote(actual_url)
            return redirect_url
        except:
            return redirect_url

    def search(self, query, num_results=3):
        """Perform Google search and extract results"""
        print(f"Searching Google for: {query}")
        
        try:
            # Encode the query for URL
            encoded_query = urllib.parse.quote(query)
            
            # Make the request
            url = f"{self.base_url}?q={encoded_query}&num={num_results + 2}"  # Add buffer for potential ads
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()

            # Parse the content
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Find all search result divs
            search_results = soup.find_all('div', class_='g')
            
            results = []
            for result in search_results[:num_results]:
                try:
                    # Extract title
                    title_element = result.find('h3')
                    title = self.clean_text(title_element.text) if title_element else "No title found"

                    # Extract URL
                    url_element = result.find('a')
                    url = self.extract_url_from_redirect(url_element['href']) if url_element else "No URL found"
                    
                    # Extract description
                    desc_element = result.find('div', class_='VwiC3b')
                    description = self.clean_text(desc_element.text) if desc_element else "No description found"

                    # Create result dictionary
                    result_dict = {
                        'title': title,
                        'url': url,
                        'description': description
                    }
                    
                    results.append(result_dict)

                except Exception as e:
                    print(f"Error parsing individual result: {str(e)}")
                    continue

            return results[:num_results]  # Ensure we only return the requested number of results
            
        except requests.RequestException as e:
            print(f"Error fetching search results: {str(e)}")
            return []
        except Exception as e:
            print(f"An unexpected error occurred: {str(e)}")
            return []

def scrape_density_info(query):
    # Create scraper instance
    scraper = GoogleScraper()
    
    try:
        # Perform search and return results
        results = scraper.search(query, num_results=15)
        
        # Print results to console
        print("\nSearch Results:")
        for i, result in enumerate(results, 1):
            print(f"\n{i}. {result['title']}")
            print(f"URL: {result['url']}")
            print(f"Description: {result['description']}")
            
        return results
            
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return []

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")


client = OpenAI()


class Attris(BaseModel):
    name: str
    dimensions: List[int]

class densityEntry(BaseModel):
    density: float

class RowEntry(BaseModel):
    Desscription: str
    item: str
    mass: float
    recyclable: bool
    biodegradable: bool
    amount: int
    comments: str
    emissions: float
    
def process_object(image_path):
    main_chat=[{
                'role': 'system',
                'content': f""""You are an database entry assistant. You will be given a description of a product and you need to return the
                 name and the dimensions as a list of three numbers.
                   
                ***
                 Make sure to return the dimensions in centimeres and in the format length x width x height.
                 Make sure to return the information in the specified format.
                """
            }]

    density_chat=[{
                'role': 'system',
                'content': f""""You are an database entry assistant and your job is to find the density of the object based on the given description.
                The density is really important so if you think the information is insufficient, infer/approximate the density on your own using the 
                name of the object.
                
                ***
                 Make sure to return the density in grams per cubic centimeter.
                 Make sure to return the information in the specified format.
                 You cannot return 0 or say that the density is unknown, YOU NEED TO GIVE A NUMBER
                """
            }]
    desc = get_desc(image_path)
    formatted_user_query = f"""
            This is the description of the object: {desc}
    """
    main_chat.append(
            {
                'role': 'user',
                'content':formatted_user_query
            })
    response = client.beta.chat.completions.parse(
        model="gpt-4o",
        messages=main_chat,
        response_format=Attris
    )
    obj = response.choices[0].message.parsed
    name = obj.name
    dimensions = obj.dimensions
    density_sc = str(scrape_density_info(f"Volumetric Mass Density of {name}"))
    formatted_user_query_density = f"""
            This is the name of the object {name}
            This is the description of the object: {density_sc}
    """
    density_chat.append(
            {
                'role': 'user',
                'content':formatted_user_query_density
            })
    response = client.beta.chat.completions.parse(
        model="gpt-4o",
        messages=density_chat,
        response_format=densityEntry
    )
    
    density= response.choices[0].message.parsed.density
    print(dimensions)
    print(density)
    volume = float(dimensions[0])*float(dimensions[1])*float(dimensions[2])
    weight = volume*density
    emission=generate_lca(name, weight)
    final_chat=[{
                'role': 'system',
                'content': f""""You are an database entry assistant and your job is to create entries based on the information provided to you
                This is how the columns of the table look like:
                Column names: ['item', 'mass', 'recyclable', 'biodegradable', 'amount', 'comments', 'emissions']
                Based on the information provided to you determine the appropriate values for each column.

                Also provide a detailed description of the object that covers all the features of the object.
                   
                ***
                 Make sure to return the information in the specified format.
                 If you feel like you don't have enough information to fill in a column either try to infer the information or leave it blank.
                 Definetely infer Biodegradable and Recyclable.
                 Extra information such as dimensions, density and volume can be added to the comments column.
                 Do not repeat info in the columns table
                """
            }]
    
    formatted_user_query_final = f"""
            This is the name of the object {name}
            This is the weight of the object: {weight}
            This is the emission of the object: {emission}
            This is the density of the object: {density}
            This is the volume of the object: {volume}
            These are the dimensions of the object: {dimensions}
            Amount is 1 
            This is some extra information about thee obhect: {desc}
    """
    final_chat.append(
            {
                'role': 'user',
                'content':formatted_user_query_final
            })
    response = client.beta.chat.completions.parse(
        model="gpt-4o",
        messages=final_chat,
        response_format=RowEntry
    )
    entry= response.choices[0].message.parsed
    insert_row(entry.item, entry.mass, entry.recyclable, entry.biodegradable, entry.amount, entry.comments, entry.emissions)
    return entry.Desscription

if __name__ == "__main__":
    print(process_object("swiss.jpg"))