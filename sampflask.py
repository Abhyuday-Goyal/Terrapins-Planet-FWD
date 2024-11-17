from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from typing import Tuple, Dict, Any
from ingestion.magic import process_object
from sql.r2sql import get_answer
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure upload folder
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

@app.errorhandler(404)
def not_found(error) -> Tuple[Dict[str, str], int]:
    """Handle 404 errors"""
    return jsonify({
        'error': 'Resource not found'
    }), 404

@app.errorhandler(500)
def server_error(error) -> Tuple[Dict[str, str], int]:
    """Handle 500 errors"""
    return jsonify({
        'error': 'Internal server error'
    }), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)