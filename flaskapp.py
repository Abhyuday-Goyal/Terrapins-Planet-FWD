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

# Marketplace Listings for SELL and BUY
marketplace_sell_listings = [
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

# BUY Listings
marketplace_buy_listings = [
    {
        "id": 1,
        "company_name": "CarbonBank Solutions",
        "co2e_offsets": "2000 tons",
        "location": "California, USA",
        "credits": 2500,
        "price": "$35 per credit",
        "products": "Renewable Energy Credits",
        "description": "Excess renewable energy credits for sale."
    },
    {
        "id": 2,
        "company_name": "EcoOffsets Global",
        "co2e_offsets": "1500 tons",
        "location": "Berlin, Germany",
        "credits": 1800,
        "price": "$40 per credit",
        "products": "Carbon Offsets",
        "description": "High-quality carbon offsets from reforestation projects."
    },
    {
        "id": 3,
        "company_name": "BlueSky Energy",
        "co2e_offsets": "3000 tons",
        "location": "New York, USA",
        "credits": 3200,
        "price": "$32 per credit",
        "products": "Wind Energy Credits",
        "description": "Wind energy credits from offshore farms."
    },
    {
        "id": 4,
        "company_name": "CleanFuture Alliance",
        "co2e_offsets": "2500 tons",
        "location": "London, UK",
        "credits": 2900,
        "price": "$28 per credit",
        "products": "Solar Credits",
        "description": "Solar energy credits from urban installations."
    },
    {
        "id": 5,
        "company_name": "GreenCo Investments",
        "co2e_offsets": "1000 tons",
        "location": "Paris, France",
        "credits": 1200,
        "price": "$45 per credit",
        "products": "Carbon Capture Units",
        "description": "Credits generated by innovative carbon capture technology."
    },
    {
        "id": 6,
        "company_name": "Sustainable Innovations",
        "co2e_offsets": "800 tons",
        "location": "Tokyo, Japan",
        "credits": 900,
        "price": "$38 per credit",
        "products": "Energy Efficiency Programs",
        "description": "Excess credits from industrial energy efficiency upgrades."
    },
    {
        "id": 7,
        "company_name": "EcoFriendly Solutions",
        "co2e_offsets": "1800 tons",
        "location": "Mumbai, India",
        "credits": 2100,
        "price": "$30 per credit",
        "products": "Tree Plantation Projects",
        "description": "Credits from large-scale reforestation efforts."
    },
    {
        "id": 8,
        "company_name": "NatureFirst Initiative",
        "co2e_offsets": "500 tons",
        "location": "Cape Town, South Africa",
        "credits": 700,
        "price": "$50 per credit",
        "products": "Renewable Projects",
        "description": "Excess credits from solar and wind farm installations."
    },
    {
        "id": 9,
        "company_name": "CleanEarth Resources",
        "co2e_offsets": "1400 tons",
        "location": "Sydney, Australia",
        "credits": 1600,
        "price": "$29 per credit",
        "products": "Ocean Carbon Capture",
        "description": "Innovative ocean-based carbon capture projects."
    },
    {
        "id": 10,
        "company_name": "PurePlanet Systems",
        "co2e_offsets": "900 tons",
        "location": "Berlin, Germany",
        "credits": 1100,
        "price": "$35 per credit",
        "products": "Hydrogen Credits",
        "description": "Hydrogen credits for clean energy systems."
    },
    {
        "id": 11,
        "company_name": "EcoBalance Ltd.",
        "co2e_offsets": "600 tons",
        "location": "Oslo, Norway",
        "credits": 750,
        "price": "$40 per credit",
        "products": "BioEnergy Offsets",
        "description": "Excess credits from bioenergy production plants."
    },
    {
        "id": 12,
        "company_name": "ZeroCarbon Ventures",
        "co2e_offsets": "1700 tons",
        "location": "Seoul, South Korea",
        "credits": 2000,
        "price": "$25 per credit",
        "products": "Carbon Neutral Initiatives",
        "description": "Credits from comprehensive neutralization projects."
    },
    {
        "id": 13,
        "company_name": "FutureRenew Co.",
        "co2e_offsets": "1000 tons",
        "location": "Mexico City, Mexico",
        "credits": 1200,
        "price": "$31 per credit",
        "products": "EcoFriendly Kits",
        "description": "Eco-friendly project kits for rural electrification."
    },
    {
        "id": 14,
        "company_name": "GlobalEco Synergy",
        "co2e_offsets": "1300 tons",
        "location": "São Paulo, Brazil",
        "credits": 1500,
        "price": "$28 per credit",
        "products": "Energy Conservation",
        "description": "Excess credits from urban conservation projects."
    },
    {
        "id": 15,
        "company_name": "PlanetWise Corporation",
        "co2e_offsets": "800 tons",
        "location": "Shanghai, China",
        "credits": 1000,
        "price": "$37 per credit",
        "products": "Carbon Reduction Units",
        "description": "Innovative urban carbon reduction initiatives."
    },
]

activities = [
    {"id": 1, "activity": "Reforestation Projects", "credits": 100, "description": "Planting trees to restore forests and offset carbon emissions."},
    {"id": 2, "activity": "Switching to Renewable Energy", "credits": 80, "description": "Transitioning to solar, wind, or other renewable energy sources."},
    {"id": 3, "activity": "Implementing Recycling Programs", "credits": 50, "description": "Setting up effective recycling systems to reduce waste."},
    {"id": 4, "activity": "Using Electric Vehicles", "credits": 60, "description": "Reducing emissions by adopting electric vehicles."},
    {"id": 5, "activity": "Adopting Zero-Waste Practices", "credits": 40, "description": "Minimizing waste through efficient resource usage."},
    {"id": 6, "activity": "Installing Solar Panels", "credits": 70, "description": "Generating clean energy with rooftop solar panels."},
    {"id": 7, "activity": "Investing in Wind Farms", "credits": 90, "description": "Supporting wind energy projects for renewable power."},
    {"id": 8, "activity": "Upgrading to Energy-Efficient Appliances", "credits": 30, "description": "Replacing old appliances with energy-efficient models."},
    {"id": 9, "activity": "Composting Organic Waste", "credits": 25, "description": "Turning organic waste into compost for soil improvement."},
    {"id": 10, "activity": "Supporting Carbon Capture Initiatives", "credits": 110, "description": "Funding projects that capture and store carbon emissions."},
    {"id": 11, "activity": "Participating in Tree-Planting Campaigns", "credits": 45, "description": "Engaging in community-driven tree-planting activities."},
    {"id": 12, "activity": "Promoting Bicycle Usage", "credits": 35, "description": "Encouraging cycling as an eco-friendly transportation mode."},
    {"id": 13, "activity": "Switching to LED Lighting", "credits": 20, "description": "Saving energy by replacing traditional bulbs with LED lights."},
    {"id": 14, "activity": "Building Green Infrastructure", "credits": 100, "description": "Developing eco-friendly buildings and green public spaces."},
    {"id": 15, "activity": "Educating Communities on Sustainability", "credits": 50, "description": "Raising awareness on sustainable practices and their benefits."}
]



# Endpoint for SELL listings
@app.route('/marketplace/sell-listings', methods=['GET'])
def get_sell_listings():
    return jsonify(marketplace_sell_listings), 200

# Endpoint for BUY listings
@app.route('/marketplace/buy-listings', methods=['GET'])
def get_buy_listings():
    return jsonify(marketplace_buy_listings), 200

# Endpoint for Activities
@app.route('/activities', methods=['GET'])
def get_activities():
    return jsonify(activities), 200

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
