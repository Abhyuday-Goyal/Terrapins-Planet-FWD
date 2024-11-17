from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import psycopg2.pool as pool
from dotenv import load_dotenv
load_dotenv()
connection_string = os.getenv('DATABASE_URL')
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Folder to save uploaded images temporarily
UPLOAD_FOLDER = 'frontend/uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Marketplace Listings
marketplace_listings = [
    {
        "id": 1,
        "company_name": "GreenTech Solutions",
        "co2e_offsets": "1200 tons",
        "location": "California, USA",
        "credits": 500,
        "price": "$30 per credit",
        "products": "Solar Panels",
        "products_quantity": 200,
        "description": "High-quality solar panels to offset carbon emissions."
    },
    {
        "id": 2,
        "company_name": "EcoFootprint Inc.",
        "co2e_offsets": "800 tons",
        "location": "Berlin, Germany",
        "credits": 300,
        "price": "$40 per credit",
        "products": "Electric Vehicle Batteries",
        "products_quantity": 50,
        "description": "Batteries designed for electric vehicles to reduce CO2 emissions."
    },
    {
        "id": 3,
        "company_name": "Carbon Neutrality Co.",
        "co2e_offsets": "1500 tons",
        "location": "Ontario, Canada",
        "credits": 700,
        "price": "$25 per credit",
        "products": "Wind Turbines",
        "products_quantity": 100,
        "description": "Efficient wind turbines to generate clean energy."
    },
    {
        "id": 4,
        "company_name": "BlueEarth Biofuels",
        "co2e_offsets": "600 tons",
        "location": "Sydney, Australia",
        "credits": 250,
        "price": "$35 per credit",
        "products": "Biofuel Kits",
        "products_quantity": 80,
        "description": "Kits for producing renewable biofuels from organic waste."
    },
    {
        "id": 5,
        "company_name": "NatureGuard",
        "co2e_offsets": "900 tons",
        "location": "Auckland, New Zealand",
        "credits": 400,
        "price": "$28 per credit",
        "products": "Tree Saplings",
        "products_quantity": 5000,
        "description": "Tree saplings to support reforestation efforts."
    },
    {
        "id": 6,
        "company_name": "Future Energy",
        "co2e_offsets": "2000 tons",
        "location": "Texas, USA",
        "credits": 1000,
        "price": "$20 per credit",
        "products": "Hydrogen Fuel Cells",
        "products_quantity": 120,
        "description": "Hydrogen fuel cells for clean energy storage."
    },
    {
        "id": 7,
        "company_name": "EcoAgro",
        "co2e_offsets": "500 tons",
        "location": "Paris, France",
        "credits": 150,
        "price": "$50 per credit",
        "products": "Composting Equipment",
        "products_quantity": 40,
        "description": "Composting equipment to reduce agricultural waste."
    },
    {
        "id": 8,
        "company_name": "Zero Emissions Alliance",
        "co2e_offsets": "1800 tons",
        "location": "Tokyo, Japan",
        "credits": 900,
        "price": "$22 per credit",
        "products": "Emission Capture Units",
        "products_quantity": 60,
        "description": "Emission capture units for industrial plants."
    },
    {
        "id": 9,
        "company_name": "GreenBuild Inc.",
        "co2e_offsets": "1200 tons",
        "location": "Cape Town, South Africa",
        "credits": 600,
        "price": "$26 per credit",
        "products": "Green Building Materials",
        "products_quantity": 300,
        "description": "Sustainable building materials for eco-friendly construction."
    },
    {
        "id": 10,
        "company_name": "RenewEco",
        "co2e_offsets": "1400 tons",
        "location": "Mumbai, India",
        "credits": 750,
        "price": "$24 per credit",
        "products": "Solar Water Heaters",
        "products_quantity": 100,
        "description": "Solar water heaters for energy-efficient households."
    },
    {
        "id": 11,
        "company_name": "CleanFuture Tech",
        "co2e_offsets": "1600 tons",
        "location": "Shanghai, China",
        "credits": 850,
        "price": "$23 per credit",
        "products": "Air Purifiers",
        "products_quantity": 200,
        "description": "Advanced air purifiers to combat air pollution."
    },
    {
        "id": 12,
        "company_name": "ReGen Solutions",
        "co2e_offsets": "700 tons",
        "location": "São Paulo, Brazil",
        "credits": 350,
        "price": "$30 per credit",
        "products": "Biodegradable Packaging",
        "products_quantity": 5000,
        "description": "Biodegradable packaging solutions for reducing plastic waste."
    },
    {
        "id": 13,
        "company_name": "GreenWave Technologies",
        "co2e_offsets": "1000 tons",
        "location": "Oslo, Norway",
        "credits": 400,
        "price": "$33 per credit",
        "products": "Wave Energy Converters",
        "products_quantity": 50,
        "description": "Wave energy converters for sustainable power generation."
    },
    {
        "id": 14,
        "company_name": "EcoUrban",
        "co2e_offsets": "1100 tons",
        "location": "London, UK",
        "credits": 550,
        "price": "$27 per credit",
        "products": "Urban Gardening Kits",
        "products_quantity": 300,
        "description": "Gardening kits for urban re-greening projects."
    },
    {
        "id": 15,
        "company_name": "CleanDrive Systems",
        "co2e_offsets": "900 tons",
        "location": "Seoul, South Korea",
        "credits": 500,
        "price": "$29 per credit",
        "products": "EV Charging Stations",
        "products_quantity": 100,
        "description": "Charging stations for electric vehicles to reduce fossil fuel dependency."
    },
    {
        "id": 16,
        "company_name": "EarthCare Resources",
        "co2e_offsets": "700 tons",
        "location": "Mexico City, Mexico",
        "credits": 350,
        "price": "$31 per credit",
        "products": "Water Purification Units",
        "products_quantity": 80,
        "description": "Water purification units for clean drinking water in underserved areas."
    }
]

# Endpoint to fetch all listings
@app.route('/marketplace/listings', methods=['GET'])
def get_listings():
    return jsonify(marketplace_listings), 200

# Endpoint to add a new listing
@app.route('/marketplace/listings', methods=['POST'])
def add_listing():
    data = request.json
    if not data:
        return jsonify({"error": "Invalid data"}), 400

    # Validate data fields
    required_fields = [
        "company_name", "co2e_offsets", "location",
        "credits", "price", "products",
        "products_quantity", "description"
    ]
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

    # Generate a new unique ID for the listing
    new_id = max([listing["id"] for listing in marketplace_listings]) + 1 if marketplace_listings else 1

    # Add the new listing to the dictionary
    new_listing = {
        "id": new_id,
        **{key: data[key] for key in required_fields}
    }
    marketplace_listings.append(new_listing)
    print("New listing added:", new_listing)  # Debug print

    return jsonify(new_listing), 201

# Endpoint to upload an image
@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)  # Save the uploaded image
        print(f"Image saved at: {file_path}")  # Debug print
        return jsonify({'message': f'Image {file.filename} uploaded successfully!', 'path': file_path}), 200

    return jsonify({'error': 'Something went wrong'}), 500

@app.route('/extract-data', methods=['POST', 'GET'])
def extract_data():
    connection_pool = pool.SimpleConnectionPool(
        1,  # Minimum number of connections in the pool
        10,  # Maximum number of connections in the pool
        connection_string
    )
    
    if connection_pool:
        print("Connection pool created successfully")
    else:
        print("connection pool missing")
        return jsonify({"error": "Database connection failed"}), 500
        
    try:
        conn = connection_pool.getconn()
        cur = conn.cursor()
        
        # Query for recyclable, biodegradable, and both counts
        cur.execute("""
            SELECT 
                COUNT(*) FILTER (WHERE recyclable = true) as recyclable_count,
                COUNT(*) FILTER (WHERE biodegradable = true) as biodegradable_count,
                COUNT(*) FILTER (WHERE recyclable = true AND biodegradable = true) as both_count,
                SUM(emissions) as total_emissions
            FROM c_company
        """)
        count_data = cur.fetchone()
        print(count_data)

        # Query for emissions histogram
        cur.execute("""
            SELECT 
                CASE 
                    WHEN emissions <= 2.5 THEN '0-2.5'
                    WHEN emissions <= 5 THEN '2.5-5'
                    WHEN emissions <= 7.5 THEN '5-7.5'
                    ELSE '7.5-10'
                END as range,
                COUNT(*) as count
            FROM c_company
            GROUP BY range
            ORDER BY range
        """)
        histogram_data = cur.fetchall()
        return jsonify({
            "recyclable_count": count_data[0],
            "biodegradable_count": count_data[1],
            "both_count": count_data[2],
            "total_emissions": count_data[3],
            "histogram": [{"range": row[0], "count": row[1]} for row in histogram_data]
        })
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500
        
    finally:
        if cur:
            cur.close()
        if conn:
            connection_pool.putconn(conn)
    
if __name__ == '__main__':
    app.run(debug=True, port=8000)