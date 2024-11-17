import psycopg2
from psycopg2 import Error
from typing import Union, Optional
import dotenv
dotenv.load_dotenv()
import os

os.environ["NEON_DB_URL"] = os.getenv("NEON_DB_URL")
database_url = os.getenv("NEON_DB_URL")


def save_number(number, filename=r"C:\Users\sange\OneDrive\Desktop\mitec\Terrapins-Planet-FWD\sql\idnum.txt"):
    with open(filename, 'w') as file:
        file.write(str(number))

def load_number(filename=r"C:\Users\sange\OneDrive\Desktop\mitec\Terrapins-Planet-FWD\sql\idnum.txt"):
    try:
        with open(filename, 'r') as file:
            return int(file.read())
    except FileNotFoundError:
        print("File not found!")
        return None
    except ValueError:
        print("File contains invalid integer!")
        return None

def insert_row(
    item: str,
    mass: float,
    recyclable: bool,
    biodegradable: bool,
    amount: int,
    comments: Optional[str] = None,
    emissions: Optional[float] = None
) -> bool:
    """
    Insert a new row into the database.
    
    Args:
        database_url (str): Database connection URL
        item (str): Name of the item
        mass (float): Mass of the item
        recyclable (bool): Whether the item is recyclable
        biodegradable (bool): Whether the item is biodegradable
        amount (int): Amount of items
        comments (str, optional): Additional comments
        emissions (float, optional): Emissions value
    
    Returns:
        bool: True if insertion was successful, False otherwise
    """
    try:
        number=load_number()
        connection = psycopg2.connect(database_url)
        cursor = connection.cursor()
        
        # SQL query with parameterized values
        insert_query = """
            INSERT INTO a_company 
            (id, item, mass, recyclable, biodegradable, amount, comments, emissions)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id;
        """
        
        # Values tuple
        values = (number, item, mass, recyclable, biodegradable, amount, comments, emissions)
        
        # Execute the query
        cursor.execute(insert_query, values)
        
        # Get the ID of the newly inserted row
        new_id = cursor.fetchone()[0]
        
        # Commit the transaction
        connection.commit()
        save_number(number+1)
        print(f"Successfully inserted new row with ID: {new_id}")
        return True
        
    except (Exception, Error) as error:
        print("Error while inserting row:", error)
        return False
        
    finally:
        if connection:
            cursor.close()
            connection.close()
            print("Database connection closed.")


# Usage example
if __name__ == "__main__":
    # Replace with your actual Neon database URL
    # Example data
    success = insert_row(
        item="Plastic Bottle",
        mass=0.5,
        recyclable=True,
        biodegradable=False,
        amount=100,
        comments="Standard 500ml bottle",
        emissions=0.25
    )