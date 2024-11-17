from nsp import get_desc
from scrap import scrape_density_info
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



os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")


client = OpenAI()


class rowEntry(BaseModel):
    name: str
    dimensions: List[int]

class densityEntry(BaseModel):
    density: float
    
def get_name_and_weight(image_path):
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
                
                ***
                 Make sure to return the density in grams per cubic centimeter.
                 Make sure to return the information in the specified format.
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
        response_format=rowEntry
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
        messages=main_chat,
        response_format=densityEntry
    )
    
    density= response.choices[0].message.parsed.density
    print(dimensions)
    print(density)
    volume = float(dimensions[0])*float(dimensions[1])*float(dimensions[2])
    weight = volume*density
    return name, weight

if __name__ == "__main__":
    print(get_name_and_weight("swiss.jpg"))