import psycopg2
from psycopg2 import Error

def fetch_company_data(database_url):
    try:
        # Connect to the database
        connection = psycopg2.connect(database_url)
        
        # Create a cursor object
        cursor = connection.cursor()
        
        # Execute the query
        cursor.execute("SELECT * FROM a_company")
        
        # Fetch all rows
        records = cursor.fetchall()
        
        # Get column names
        column_names = [desc[0] for desc in cursor.description]
        
        # Print column headers
        print("\nColumn names:", column_names)
        
        # Print each row
        print("\nCompany Records:")
        for row in records:
            print(row)
            
    except (Exception, Error) as error:
        print("Error while connecting to PostgreSQL:", error)
    
    finally:
        if connection:
            cursor.close()
            connection.close()
            print("\nDatabase connection closed.")

import dotenv
dotenv.load_dotenv()
import os

# Usage example
if __name__ == "__main__":
    # Replace with your actual Neon database URL
    os.environ["NEON_DB_URL"] = os.getenv("NEON_DB_URL")
    db_url = os.getenv("NEON_DB_URL")
    fetch_company_data(db_url)