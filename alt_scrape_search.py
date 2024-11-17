import requests
from bs4 import BeautifulSoup
import urllib.parse
import re
import os
from openai import OpenAI
from dotenv import load_dotenv
from pydantic import BaseModel
load_dotenv()
os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

client = OpenAI()

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

def scrape_info(query):
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

class Alternative(BaseModel):
    name: str
    emissions: float
    description: str

def query_alternative(name, emissions):
     
    final_chat=[{
                'role': 'system',
                'content': f""""You are an environmentalist and your job is to provide alternatives to a particular product.
                I will give you with some information and you need to provide me an alternative product based on that

                The desription part should be a convincing argument as to why the alternative is better than the current product.
                It should say why the user should switch and suggest them to do it. Keep it under 200 words.
                   
                ***
                 Make sure to return the information in the specified format.
                 Explain properly why the alternative is better and make up information based on the pprovided statistics about the bad product.
                 Approximately guess the emissions of the alternative product. (neeeds to better than current product)
                """
            }]
     
    alternatives= scrape_info(f"best environmental friendly alternatives to {name}")

    formatted_user_query = f"""
            This is the name of the object {name}
            This is the amount of emissions produced by the object{emissions}
            This is some informationa about potential alternatives {alternatives}
    """
    final_chat.append(
            {
                'role': 'user',
                'content':formatted_user_query
            })
    response = client.beta.chat.completions.parse(
        model="gpt-4o",
        messages=final_chat,
        response_format=Alternative
    )
    
    alt= response.choices[0].message.parsed
    return alt.name, alt.emissions, alt.description
