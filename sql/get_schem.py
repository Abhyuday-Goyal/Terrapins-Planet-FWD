import psycopg2
from psycopg2 import Error

def get_table_schema(database_url, table_name="a_company"):
    try:
        # Connect to the database
        connection = psycopg2.connect(database_url)
        cursor = connection.cursor()
        
        # Query to get column information
        column_query = """
            SELECT 
                column_name,
                data_type,
                character_maximum_length,
                column_default,
                is_nullable
            FROM information_schema.columns
            WHERE table_name = %s
            ORDER BY ordinal_position;
        """
        
        # Query to get primary key information
        pk_query = """
            SELECT a.attname
            FROM pg_index i
            JOIN pg_attribute a ON a.attrelid = i.indrelid
            AND a.attnum = ANY(i.indkey)
            WHERE i.indrelid = %s::regclass
            AND i.indisprimary;
        """
        
        # Query to get foreign key information
        fk_query = """
            SELECT
                kcu.column_name,
                ccu.table_name AS foreign_table_name,
                ccu.column_name AS foreign_column_name
            FROM information_schema.table_constraints AS tc
            JOIN information_schema.key_column_usage AS kcu
                ON tc.constraint_name = kcu.constraint_name
            JOIN information_schema.constraint_column_usage AS ccu
                ON ccu.constraint_name = tc.constraint_name
            WHERE tc.table_name = %s
                AND tc.constraint_type = 'FOREIGN KEY';
        """

        # Get column information
        print(f"\nTable: {table_name}")
        print("-" * 80)
        cursor.execute(column_query, (table_name,))
        columns = cursor.fetchall()
        
        print("Columns:")
        print("{:<20} {:<15} {:<10} {:<20} {:<10}".format(
            "Column Name", "Data Type", "Length", "Default", "Nullable"
        ))
        print("-" * 80)
        
        for column in columns:
            length = str(column[2]) if column[2] is not None else "N/A"
            default = str(column[3]) if column[3] is not None else "N/A"
            print("{:<20} {:<15} {:<10} {:<20} {:<10}".format(
                column[0], column[1], length, default[:20], column[4]
            ))

        # Get primary key information
        print("\nPrimary Keys:")
        cursor.execute(pk_query, (table_name,))
        pks = cursor.fetchall()
        for pk in pks:
            print(f"- {pk[0]}")

        # Get foreign key information
        print("\nForeign Keys:")
        cursor.execute(fk_query, (table_name,))
        fks = cursor.fetchall()
        for fk in fks:
            print(f"- {fk[0]} -> {fk[1]}.{fk[2]}")

        # Get indexes
        index_query = """
            SELECT
                indexname,
                indexdef
            FROM pg_indexes
            WHERE tablename = %s;
        """
        print("\nIndexes:")
        cursor.execute(index_query, (table_name,))
        indexes = cursor.fetchall()
        for idx in indexes:
            print(f"- {idx[0]}:")
            print(f"  {idx[1]}")

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
    get_table_schema(db_url)