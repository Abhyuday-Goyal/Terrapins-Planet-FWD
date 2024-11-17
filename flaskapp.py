from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import psycopg2.pool as pool
from dotenv import load_dotenv
from datetime import datetime
from alt_scrape_search import query_alternative

from werkzeug.utils import secure_filename
from typing import Tuple, Dict, Any
from ingestion.magic import process_object
from sql.r2sql import get_answer
load_dotenv()
connection_string = os.getenv('DATABASE_URL')
connection_pool = pool.SimpleConnectionPool(
    1,  # Minimum connections
    10, # Maximum connections
    connection_string
)

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
        "co2e_offsets": "1,500 tons",
        "location": "Sacramento, California, USA",
        "credits": 450,
        "price": "$120 per credit",
        "products": "Solar Panels",
        "products_quantity": 150,
        "barter_option": "Electric vehicle batteries or irrigation systems."
    },
    {
        "id": 2,
        "company_name": "Smith Family Farms",
        "co2e_offsets": "900 tons",
        "location": "Iowa, USA",
        "credits": 220,
        "price": "$135 per credit",
        "products": "Regenerative Agriculture",
        "products_quantity": 120,
        "barter_option": "Farming equipment or drought-resistant seeds."
    },
    {
        "id": 3,
        "company_name": "EcoForest Initiative",
        "co2e_offsets": "3,200 tons",
        "location": "British Columbia, Canada",
        "credits": 600,
        "price": "$150 per credit",
        "products": "Reforestation Services",
        "products_quantity": 50,
        "barter_option": "Solar-powered water pumps or fertilizers."
    },
    {
        "id": 4,
        "company_name": "BlueOcean Cleanup",
        "co2e_offsets": "2,400 tons",
        "location": "Sydney, Australia",
        "credits": 500,
        "price": "$140 per credit",
        "products": "Marine Debris Removal",
        "products_quantity": 200,
        "barter_option": "Sustainable fishing gear."
    },
    {
        "id": 5,
        "company_name": "SolarFields Corp",
        "co2e_offsets": "1,800 tons",
        "location": "Cape Town, South Africa",
        "credits": 400,
        "price": "$130 per credit",
        "products": "Solar Farms",
        "products_quantity": 100,
        "barter_option": "Wind turbine components."
    },
    {
        "id": 6,
        "company_name": "Urban Green Initiatives",
        "co2e_offsets": "1,000 tons",
        "location": "Tokyo, Japan",
        "credits": 250,
        "price": "$125 per credit",
        "products": "Green Wall Installations",
        "products_quantity": 60,
        "barter_option": "High-efficiency LED lighting."
    },
    {
        "id": 7,
        "company_name": "BioWaste Energy",
        "co2e_offsets": "3,000 tons",
        "location": "Berlin, Germany",
        "credits": 700,
        "price": "$155 per credit",
        "products": "Biogas Production",
        "products_quantity": 120,
        "barter_option": "Electric tractors or composting units."
    },
    {
        "id": 8,
        "company_name": "AgroGrowers Ltd.",
        "co2e_offsets": "1,200 tons",
        "location": "Nairobi, Kenya",
        "credits": 300,
        "price": "$140 per credit",
        "products": "Carbon-Enriched Soil",
        "products_quantity": 90,
        "barter_option": "Organic fertilizers."
    },
    {
        "id": 9,
        "company_name": "FreshAir Filters",
        "co2e_offsets": "2,000 tons",
        "location": "Beijing, China",
        "credits": 450,
        "price": "$145 per credit",
        "products": "Air Purification Filters",
        "products_quantity": 80,
        "barter_option": "Air quality sensors."
    },
    {
        "id": 10,
        "company_name": "RiverClean Project",
        "co2e_offsets": "1,700 tons",
        "location": "New Delhi, India",
        "credits": 320,
        "price": "$135 per credit",
        "products": "Riverbank Restoration",
        "products_quantity": 110,
        "barter_option": "Rainwater harvesting systems."
    },
    # Additional entries
    {"id": 11, "company_name": "Green Ventures", "co2e_offsets": "2,100 tons", "location": "London, UK", "credits": 500, "price": "$150 per credit", "products": "Eco-friendly Packaging", "products_quantity": 120, "barter_option": "Recycled raw materials."},
    {"id": 12, "company_name": "EcoTowers Inc.", "co2e_offsets": "1,600 tons", "location": "Dubai, UAE", "credits": 350, "price": "$140 per credit", "products": "Green Roof Systems", "products_quantity": 90, "barter_option": "Energy-efficient HVAC systems."},
    {"id": 13, "company_name": "CarbonCycle Labs", "co2e_offsets": "1,300 tons", "location": "Singapore", "credits": 300, "price": "$130 per credit", "products": "Waste-to-Energy Conversion", "products_quantity": 70, "barter_option": "Biodegradable plastics."},
    {"id": 14, "company_name": "Reef Rebuilders", "co2e_offsets": "800 tons", "location": "Honolulu, Hawaii, USA", "credits": 180, "price": "$125 per credit", "products": "Coral Reef Restoration", "products_quantity": 40, "barter_option": "Marine sensors."},
    {"id": 15, "company_name": "ForestNation", "co2e_offsets": "2,500 tons", "location": "Amazon Rainforest, Brazil", "credits": 550, "price": "$155 per credit", "products": "Rainforest Protection", "products_quantity": 130, "barter_option": "Satellite monitoring services."}
]

marketplace_buy_listings = [
    {
        "id": 1,
        "company_name": "UrbanGreens Ltd.",
        "co2e_offsets": "1,800 tons",
        "location": "New York, USA",
        "credits": 360,
        "price": "$130 per credit",
        "products": "High-quality irrigation systems",
        "products_quantity": 90,
        "barter_option": "Organic pesticides."
    },
    {
        "id": 2,
        "company_name": "SolarCo Industries",
        "co2e_offsets": "2,500 tons",
        "location": "Barcelona, Spain",
        "credits": 500,
        "price": "$145 per credit",
        "products": "Solar-powered batteries",
        "products_quantity": 120,
        "barter_option": "Wind turbine components."
    },
    {
        "id": 3,
        "company_name": "Farm2Table Cooperative",
        "co2e_offsets": "900 tons",
        "location": "Austin, Texas, USA",
        "credits": 180,
        "price": "$135 per credit",
        "products": "Drought-resistant seeds",
        "products_quantity": 80,
        "barter_option": "Eco-friendly packaging."
    },
    {
        "id": 4,
        "company_name": "ClearSky Technologies",
        "co2e_offsets": "3,000 tons",
        "location": "Munich, Germany",
        "credits": 600,
        "price": "$150 per credit",
        "products": "Air quality sensors",
        "products_quantity": 200,
        "barter_option": "High-efficiency filters."
    },
    {
        "id": 5,
        "company_name": "Green Horizon Initiative",
        "co2e_offsets": "1,200 tons",
        "location": "Melbourne, Australia",
        "credits": 240,
        "price": "$140 per credit",
        "products": "Energy-efficient HVAC systems",
        "products_quantity": 100,
        "barter_option": "Rainwater harvesting units."
    },
    {
        "id": 6,
        "company_name": "EcoHome Builders",
        "co2e_offsets": "2,100 tons",
        "location": "Vancouver, Canada",
        "credits": 420,
        "price": "$125 per credit",
        "products": "Sustainable building materials",
        "products_quantity": 150,
        "barter_option": "Green insulation products."
    },
    {
        "id": 7,
        "company_name": "AgroInnovate",
        "co2e_offsets": "1,500 tons",
        "location": "Buenos Aires, Argentina",
        "credits": 300,
        "price": "$135 per credit",
        "products": "Organic fertilizers",
        "products_quantity": 85,
        "barter_option": "Solar-powered tractors."
    },
    {
        "id": 8,
        "company_name": "BluePlanet Corp",
        "co2e_offsets": "2,800 tons",
        "location": "Cape Town, South Africa",
        "credits": 560,
        "price": "$155 per credit",
        "products": "Desalination technology",
        "products_quantity": 95,
        "barter_option": "Marine pollution sensors."
    },
    {
        "id": 9,
        "company_name": "RenewPower Systems",
        "co2e_offsets": "1,400 tons",
        "location": "Shanghai, China",
        "credits": 280,
        "price": "$140 per credit",
        "products": "Solar panels",
        "products_quantity": 75,
        "barter_option": "Wind turbines."
    },
    {
        "id": 10,
        "company_name": "ForestLife NGO",
        "co2e_offsets": "1,000 tons",
        "location": "Kigali, Rwanda",
        "credits": 200,
        "price": "$120 per credit",
        "products": "Composting units",
        "products_quantity": 60,
        "barter_option": "Reforestation equipment."
    },
    {
        "id": 11,
        "company_name": "Carbon Neutral Ventures",
        "co2e_offsets": "2,400 tons",
        "location": "Stockholm, Sweden",
        "credits": 480,
        "price": "$145 per credit",
        "products": "Recycled construction materials",
        "products_quantity": 110,
        "barter_option": "Energy-efficient insulation."
    },
    {
        "id": 12,
        "company_name": "GreenCity Projects",
        "co2e_offsets": "800 tons",
        "location": "Dubai, UAE",
        "credits": 160,
        "price": "$125 per credit",
        "products": "LED lighting",
        "products_quantity": 70,
        "barter_option": "Water-saving technologies."
    },
    {
        "id": 13,
        "company_name": "CleanAir Foundation",
        "co2e_offsets": "3,200 tons",
        "location": "Delhi, India",
        "credits": 640,
        "price": "$155 per credit",
        "products": "Electric scooters",
        "products_quantity": 85,
        "barter_option": "Air purification systems."
    },
    {
        "id": 14,
        "company_name": "EcoConnect Inc.",
        "co2e_offsets": "1,300 tons",
        "location": "Lisbon, Portugal",
        "credits": 260,
        "price": "$135 per credit",
        "products": "High-efficiency water pumps",
        "products_quantity": 50,
        "barter_option": "Greywater recycling systems."
    },
    {
        "id": 15,
        "company_name": "Sustainable Solutions Ltd.",
        "co2e_offsets": "2,700 tons",
        "location": "Nairobi, Kenya",
        "credits": 540,
        "price": "$150 per credit",
        "products": "Solar-powered cold storage units",
        "products_quantity": 95,
        "barter_option": "Water purifiers."
    }
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


def get_db_connection():
    return connection_pool.getconn()

# Helper function to return connection to pool
def return_db_connection(conn):
    connection_pool.putconn(conn)

# Get all inventory items
@app.route('/inventory', methods=['GET'])
def get_inventory():
    conn = None
    cur = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        cur.execute("""
            SELECT id, item, mass, recyclable, biodegradable, amount, comments, emissions
            FROM a_company
            ORDER BY emissions DESC
        """)
        
        # Fetch all rows
        items = cur.fetchall()
        
        # Convert to list of dictionaries with proper data types
        columns = ['id', 'item', 'mass', 'recyclable', 'biodegradable', 'amount', 'comments', 'emissions']
        inventory = []
        
        for item in items:
            item_dict = dict(zip(columns, item))
            # Convert data types
            item_dict['mass'] = float(item_dict['mass']) if item_dict['mass'] is not None else 0
            item_dict['amount'] = float(item_dict['amount']) if item_dict['amount'] is not None else 0
            item_dict['emissions'] = float(item_dict['emissions']) if item_dict['emissions'] is not None else 0
            item_dict['recyclable'] = bool(item_dict['recyclable'])
            item_dict['biodegradable'] = bool(item_dict['biodegradable'])
            inventory.append(item_dict)
        
        return jsonify({
            "status": "success",
            "data": inventory,
            "count": len(inventory)
        }), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            "status": "error",
            "error": str(e),
            "data": []
        }), 500
    finally:
        if cur:
            cur.close()
        if conn:
            return_db_connection(conn)

# Add new inventory item
@app.route('/inventory/add', methods=['POST'])
def add_inventory_item():
    conn = None
    cur = None
    try:
        data = request.json
        conn = get_db_connection()
        cur = conn.cursor()
        
        cur.execute("""
            INSERT INTO a_company (id, item, mass, recyclable, biodegradable, amount, comments, emissions)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING *
        """, (
            data['id'], data['item'], data['mass'], data['recyclable'],
            data['biodegradable'], data['amount'], data['comments'], data['emissions']
        ))
        
        conn.commit()
        new_item = cur.fetchone()
        columns = ['id', 'item', 'mass', 'recyclable', 'biodegradable', 'amount', 'comments', 'emissions']
        
        return jsonify({"data": dict(zip(columns, new_item))}), 201
    except Exception as e:
        if conn:
            conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        if cur:
            cur.close()
        if conn:
            return_db_connection(conn)

# Update inventory item
@app.route('/inventory/<string:id>', methods=['PUT'])
def update_inventory_item(id):
    conn = None
    cur = None
    try:
        data = request.json
        conn = get_db_connection()
        cur = conn.cursor()
        
        cur.execute("""
            UPDATE a_company
            SET item = %s, mass = %s, recyclable = %s, biodegradable = %s,
                amount = %s, comments = %s, emissions = %s
            WHERE id = %s
            RETURNING *
        """, (
            data['item'], data['mass'], data['recyclable'], data['biodegradable'],
            data['amount'], data['comments'], data['emissions'], id
        ))
        
        conn.commit()
        updated_item = cur.fetchone()
        
        if updated_item is None:
            return jsonify({"error": "Item not found"}), 404
            
        columns = ['id', 'item', 'mass', 'recyclable', 'biodegradable', 'amount', 'comments', 'emissions']
        return jsonify({"data": dict(zip(columns, updated_item))}), 200
    except Exception as e:
        if conn:
            conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        if cur:
            cur.close()
        if conn:
            return_db_connection(conn)

# Delete inventory item
@app.route('/inventory/<string:id>', methods=['DELETE'])
def delete_inventory_item(id):
    conn = None
    cur = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        cur.execute("DELETE FROM a_company WHERE id = %s RETURNING id", (id,))
        deleted_item = cur.fetchone()
        
        if deleted_item is None:
            return jsonify({"error": "Item not found"}), 404
            
        conn.commit()
        return jsonify({"message": "Item deleted successfully", "id": deleted_item[0]}), 200
    except Exception as e:
        if conn:
            conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        if cur:
            cur.close()
        if conn:
            return_db_connection(conn)

# Get inventory statistics
@app.route('/inventory/stats', methods=['GET'])
def get_inventory_stats():
    conn = None
    cur = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        cur.execute("""
            SELECT 
                COUNT(*) as total_items,
                SUM(mass) as total_mass,
                AVG(emissions) as avg_emissions,
                COUNT(*) FILTER (WHERE recyclable = true) as recyclable_count,
                COUNT(*) FILTER (WHERE biodegradable = true) as biodegradable_count,
                SUM(mass * emissions) as total_emissions
            FROM a_company
        """)
        
        stats = cur.fetchone()
        
        return jsonify({
            "data": {
                "totalItems": stats[0],
                "totalMass": float(stats[1]) if stats[1] else 0,
                "averageEmissions": float(stats[2]) if stats[2] else 0,
                "recyclableCount": stats[3],
                "biodegradableCount": stats[4],
                "totalEmissions": float(stats[5]) if stats[5] else 0,
                "sustainabilityScore": ((stats[3] + stats[4]) / (stats[0] * 2) * 100) if stats[0] > 0 else 0
            }
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if cur:
            cur.close()
        if conn:
            return_db_connection(conn)

# Export inventory report
@app.route('/inventory/export', methods=['GET'])
def export_inventory():
    conn = None
    cur = None
    try:
        # Get database connection
        conn = get_db_connection()
        if not conn:
            raise Exception("Failed to establish database connection")
        
        cur = conn.cursor()
        
        # Basic inventory query
        cur.execute("""
            SELECT id, item, mass, recyclable, biodegradable, amount, comments, emissions
            FROM a_company
            ORDER BY emissions DESC
        """)
        
        rows = cur.fetchall()
        if not rows:
            return jsonify({
                "status": "success",
                "data": [],
                "filename": f"inventory_export_empty_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
            })

        # Convert to list of dictionaries
        columns = ['id', 'item', 'mass', 'recyclable', 'biodegradable', 'amount', 'comments', 'emissions']
        inventory_data = []
        
        for row in rows:
            item_dict = {}
            for i, column in enumerate(columns):
                value = row[i]
                # Handle different data types
                if column in ['mass', 'amount', 'emissions']:
                    item_dict[column] = float(value) if value is not None else 0.0
                elif column in ['recyclable', 'biodegradable']:
                    item_dict[column] = bool(value) if value is not None else False
                else:
                    item_dict[column] = str(value) if value is not None else ''
            inventory_data.append(item_dict)

        # Create export data structure
        current_time = datetime.now().strftime('%Y%m%d_%H%M%S')
        export_data = {
            "metadata": {
                "exported_at": current_time,
                "total_items": len(inventory_data)
            },
            "inventory": inventory_data
        }

        return jsonify({
            "status": "success",
            "data": export_data,
            "filename": f"inventory_export_{current_time}.json"
        })

    except Exception as e:
        print(f"Export error details: {str(e)}")  # Server-side logging
        return jsonify({
            "status": "error",
            "error": str(e),
            "message": "Failed to export inventory data"
        }), 500
    
    finally:
        if cur:
            try:
                cur.close()
            except Exception as e:
                print(f"Error closing cursor: {str(e)}")
        if conn:
            try:
                return_db_connection(conn)
            except Exception as e:
                print(f"Error returning connection: {str(e)}")
# Search inventory
@app.route('/inventory/search', methods=['GET'])
def search_inventory():
    conn = None
    cur = None
    try:
        search_term = request.args.get('term', '').lower()
        
        conn = get_db_connection()
        cur = conn.cursor()
        
        cur.execute("""
            SELECT * FROM a_company
            WHERE LOWER(item) LIKE %s
                OR LOWER(comments) LIKE %s
            ORDER BY emissions DESC
        """, (f'%{search_term}%', f'%{search_term}%'))
        
        columns = ['id', 'item', 'mass', 'recyclable', 'biodegradable', 
                  'amount', 'comments', 'emissions']
        results = [dict(zip(columns, row)) for row in cur.fetchall()]
        
        return jsonify({"data": results}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if cur:
            cur.close()
        if conn:
            return_db_connection(conn)
# Your existing endpoints
@app.route('/marketplace/sell-listings', methods=['GET'])
def get_sell_listings():
    return jsonify(marketplace_sell_listings), 200

@app.route('/marketplace/buy-listings', methods=['GET'])
def get_buy_listings():
    return jsonify(marketplace_buy_listings), 200

@app.route('/activities', methods=['GET'])
def get_activities():
    return jsonify(activities), 200

@app.route('/extract-data', methods=['POST', 'GET'])
def extract_data():
    conn = None
    cur = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        # Query for recyclable, biodegradable, and both counts
        cur.execute("""
            SELECT 
                COUNT(*) FILTER (WHERE recyclable = true) as recyclable_count,
                COUNT(*) FILTER (WHERE biodegradable = true) as biodegradable_count,
                COUNT(*) FILTER (WHERE recyclable = true AND biodegradable = true) as both_count,
                SUM(mass * emissions) as total_emissions
            FROM a_company
        """)
        count_data = cur.fetchone()
        
        # Query for top 5 items with highest emissions
        cur.execute("""
            SELECT item, mass * emissions as total_emissions
            FROM a_company
            ORDER BY total_emissions DESC
            LIMIT 6
        """)
        top_items = cur.fetchall()
        top_items_list = [{"item": item[0], "emissions": item[1]} for item in top_items]

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
            FROM a_company
            GROUP BY range
            ORDER BY range
        """)
        histogram_data = cur.fetchall()
        
        return jsonify({
            "recyclable_count": count_data[0],
            "biodegradable_count": count_data[1],
            "both_count": count_data[2],
            "total_emissions": count_data[3],
            "top_items": top_items_list,
            "histogram": [{"range": row[0], "count": row[1]} for row in histogram_data],
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if cur:
            cur.close()
        if conn:
            return_db_connection(conn)

@app.route('/query-alternative', methods=['POST'])
def get_alternative():
    data = request.json
    if not data or 'product' not in data or 'emissions' not in data:
        return jsonify({"error": "Missing product or emissions data"}), 400
        
    try:
        product = data['product']
        emissions = data['emissions']
        
        # Call your query_alternative function here
        result = query_alternative(product, emissions)
        
        return jsonify({
            "success": True,
            "alternatives": result
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename: str) -> bool:
    """Check if the file extension is allowed"""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/chatbot', methods=['POST'])
def chatbot() -> Tuple[Dict[str, Any], int]:
    """Handle chatbot messages"""
    try:
        data = request.json
        if not data or 'question' not in data:
            return jsonify({
                'error': 'No question provided'
            }), 400

        user_message = data['question']
        response = get_answer(user_message)

        return jsonify({
            'message': response
        }), 200

    except Exception as e:
        return jsonify({
            'error': str(e)
        }), 500

@app.route('/upload-image', methods=['POST'])
def upload_image() -> Tuple[Dict[str, Any], int]:
    """Handle image uploads"""
    try:
        if 'image' not in request.files:
            return jsonify({
                'error': 'No image file provided'
            }), 400

        file = request.files['image']
        if file.filename == '':
            return jsonify({
                'error': 'No selected file'
            }), 400

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)

            # Process the image
            response = process_object(filepath)

            return jsonify({
                'message': response,
                'filename': filename
            }), 200
        else:
            return jsonify({
                'error': 'File type not allowed'
            }), 400

    except Exception as e:
        return jsonify({
            'error': str(e)
        }), 500    

if __name__ == '__main__':
    app.run(debug=True, port=8000)