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
from sc import SCHEMA
from qu import execute_query
from langchain_openai.embeddings import OpenAIEmbeddings
from langchain_community.document_loaders import TextLoader
from langchain_pinecone import PineconeVectorStore
from langchain_text_splitters import CharacterTextSplitter
from pinecone import Pinecone
from langchain_core.documents import Document

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

client = OpenAI()

class sqlQuery(BaseModel):
    sql: str

PINECONE_API_KEY=os.getenv("PINECONE_API_KEY")

client = OpenAI()

pc=Pinecone(api_key=PINECONE_API_KEY)
index=pc.Index("r2s")
embeddings = OpenAIEmbeddings( model="text-embedding-3-small")
vectorstore=PineconeVectorStore(index, embeddings)


def load_data():
    loader = TextLoader(r"comms.txt")
    documents = loader.load()
    # Split by semicolon
    text_splitter = CharacterTextSplitter(
        separator=";",
        chunk_size=500,
        chunk_overlap=250,
        length_function=len,
        is_separator_regex=False,
    )
    docs= text_splitter.split_text( documents[0].page_content)
    vectorstore=PineconeVectorStore.from_documents([Document(page_content=t) for t in docs],embeddings,index_name="r2s")
    print("Data loaded successfully")


def get_answer(query):

    examples=str(vectorstore.similarity_search(query, 4))

    main_chat=[{
                'role': 'system',
                'content': f""""You are an database retrieval assistant. Your job is to create a valid sql query that can be used to retrieve 
                information relevant to the user's query.

                The schema of the database is as follows:
                {SCHEMA}
                   
                You will also be provided with a few examples for each question which contain correct sql queries for similar questions that you can use as a reference.
                ***
                 Make sure to return a valid sql query that can be used to retrieve the information.
                """
            }]

    polished_chat=[{
                'role': 'system',
                'content': f""""You are an support assistant whose job is to answer the user's question.
                We have retrieved some inormation from the database that is relevant to the user's query.
                You can use that information to answer the question.

                ***
                 Talk as if you were directly answering the user's question and don't mention the fact that you got the information from the database.
                """
            }]

    formatted_user_query = f"""
        This is the user's query: {query}

        These are some examples that you can use to answer the question if needed: {examples}
    """
    main_chat.append(
            {
                'role': 'user',
                'content':formatted_user_query
            })
    response = client.beta.chat.completions.parse(
        model="gpt-4o",
        messages=main_chat,
        response_format=sqlQuery
    )
    sql = response.choices[0].message.parsed.sql
    print(sql)
    output = execute_query(sql)
    formatted_polish_query = f"""
        This is the user's query: {query}

        This is the info that has been retrieved from the database: {output}
    """
    polished_chat.append(
            {
                'role': 'user',
                'content':formatted_polish_query
            })
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=polished_chat,
    )
    response = response.choices[0].message.content
    print(response)
    return response

if __name__ == "__main__":
    query = "Which of our products are biodegradable?"
    get_answer(query)
    

