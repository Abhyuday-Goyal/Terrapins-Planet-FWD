import psycopg2
from psycopg2 import Error
from typing import List, Tuple
import dotenv
dotenv.load_dotenv()
import os

os.environ["NEON_DB_URL"] = os.getenv("NEON_DB_URL")
database_url = os.getenv("NEON_DB_URL")

def execute_query( query: str) -> List[Tuple]:
    """
    Execute a SQL query and return the results.
    
    Args:
        database_url (str): The database connection URL
        query (str): The SQL query to execute
    
    Returns:
        List[Tuple]: The query results
    """
    try:
        # Connect to the database
        connection = psycopg2.connect(database_url)
        cursor = connection.cursor()
        
        # Execute the query
        cursor.execute(query)
        
        # If the query is a SELECT statement, fetch results
        if query.strip().upper().startswith('SELECT'):
            # Get column names
            column_names = [desc[0] for desc in cursor.description]
            print("\nColumns:", column_names)
            
            # Fetch and print results
            results = cursor.fetchall()
            print("\nResults:")
            for row in results:
                print(row)
                
            return results
        
        # If it's an INSERT, UPDATE, or DELETE, commit the changes
        else:
            connection.commit()
            print(f"Query executed successfully. Rows affected: {cursor.rowcount}")
            return []
        
    except (Exception, Error) as error:
        print("Error while executing query:", error)
        return []
    
    finally:
        if connection:
            cursor.close()
            connection.close()
            print("\nDatabase connection closed.")



# Usage example
if __name__ == "__main__":
    # Replace with your actual Neon database URL
    
    
    # Example query - replace with your actual query
    sql_query = "SELECT * FROM a_company "
    
    # Execute the query
    results = execute_query(sql_query)