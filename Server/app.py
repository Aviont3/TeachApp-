from flask import Flask, request, Response
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import json

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])
      //create your MongoDB clusters. Instructions in readMe
client = MongoClient("mongoclusters")
db = client.flashcards_db
cards = db.cards

def serialize_card(card):
    card['_id'] = str(card['_id'])
    return card

def send_json(data, status=200):
    return Response(
        response=json.dumps(data),
        status=status,
        mimetype='application/json'
    )

@app.route('/api/cards', methods=['GET'])
def get_cards():
    all_cards = [serialize_card(card) for card in cards.find()]
    return send_json(all_cards)

@app.route('/api/cards/<id>', methods=['GET'])
def get_card(id):
    try:
        card = cards.find_one({'_id': ObjectId(id)})
        if card:
            return send_json(serialize_card(card))
    except:
        pass
    return send_json({'error': 'Not found'}, 404)

@app.route('/api/cards', methods=['POST'])
def add_card():
    data = request.json
    if not data or 'question' not in data or 'answer' not in data:
        return send_json({'error': 'Missing question or answer'}, 400)

    result = cards.insert_one({
        'question': data['question'],
        'answer': data['answer']
    })
    new_card = {
        '_id': str(result.inserted_id),
        'question': data['question'],
        'answer': data['answer']
    }
    return send_json(new_card, 201)

@app.route('/api/cards/<id>', methods=['DELETE'])
def delete_card(id):
    try:
        result = cards.delete_one({'_id': ObjectId(id)})
        if result.deleted_count == 1:
            return send_json({'success': True})
    except:
        pass
    return send_json({'error': 'Not found'}, 404)

@app.route('/api/test', methods=['GET'])
def test():
    return send_json({'message': 'API is working!'})

if __name__ == '__main__':
    print("✅ Server running on http://localhost:5000")
    app.run(debug=True)
