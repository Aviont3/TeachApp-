from flask import Flask, request, jsonify
from flask_cors import CORS
from bson import ObjectId
from pymongo import MongoClient

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client.flashcards_db
cards = db.cards  # Collection

# Helper function to convert MongoDB document to JSON-friendly dict
def serialize_card(card):
    card['_id'] = str(card['_id'])
    return card

# Get all flashcards
@app.route('/api/cards', methods=['GET'])
def get_cards():
    all_cards = [serialize_card(card) for card in cards.find()]
    return jsonify(all_cards)

# Get a single flashcard by ID
@app.route('/api/cards/<id>', methods=['GET'])
def get_card(id):
    card = cards.find_one({'_id': ObjectId(id)})
    if card:
        return jsonify(serialize_card(card))
    return jsonify({'error': 'Not found'}), 404

# Create a new flashcard
@app.route('/api/cards', methods=['POST'])
def add_card():
    data = request.json
    # Validate input
    if not data or 'question' not in data or 'answer' not in data:
        return jsonify({'error': 'Missing question or answer'}), 400

    new_card = {
        'question': data['question'],
        'answer': data['answer']
    }
    result = cards.insert_one(new_card)
    new_card['_id'] = str(result.inserted_id)
    return jsonify(new_card), 201

# Delete a flashcard by ID
@app.route('/api/cards/<id>', methods=['DELETE'])
def delete_card(id):
    result = cards.delete_one({'_id': ObjectId(id)})
    if result.deleted_count == 1:
        return jsonify({'success': True})
    return jsonify({'error': 'Not found'}), 404

# Health check route
@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({'message': 'API is working!'})

if __name__ == '__main__':
    app.run(debug=True)

