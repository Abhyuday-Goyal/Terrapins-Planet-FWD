from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# Folder to save uploaded images temporarily
UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

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
        return jsonify({'message': f'Image {file.filename} uploaded successfully!'}), 200

    return jsonify({'error': 'Something went wrong'}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
