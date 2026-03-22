from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL',
    'postgresql://user:password@localhost:5432/faayo_db'
)
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your-secret-key')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
jwt = JWTManager(app)
CORS(app)

# Routes
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'service': 'Faayo Backend',
        'version': '1.0.0'
    }), 200

@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Missing required fields'}), 400
    return jsonify({'message': 'User registered successfully', 'user_id': '12345'}), 201

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Missing credentials'}), 400
    return jsonify({'access_token': 'jwt_token_here', 'user': {'id': '12345', 'email': data.get('email')}}), 200

@app.route('/api/meals', methods=['GET'])
def get_meals():
    return jsonify({'meals': [{'id': 1, 'name': 'Breakfast', 'calories': 450, 'date': '2026-03-22'}]}), 200

@app.route('/api/meals', methods=['POST'])
def log_meal():
    data = request.get_json()
    if not data or not data.get('name') or not data.get('calories'):
        return jsonify({'message': 'Missing meal details'}), 400
    return jsonify({'message': 'Meal logged successfully', 'meal_id': 1}), 201

@app.route('/api/nutrition/summary', methods=['GET'])
def nutrition_summary():
    return jsonify({
        'date': '2026-03-22',
        'total_calories': 2000,
        'protein_g': 100,
        'carbs_g': 250,
        'fat_g': 65,
        'fiber_g': 30
    }), 200

@app.route('/api/analytics', methods=['GET'])
def analytics():
    return jsonify({
        'weekly_avg_calories': 1950,
        'weekly_trend': 'stable',
        'goal_progress': 85,
        'insights': ['Great hydration this week!', 'Consider increasing fiber intake']
    }), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({'message': 'Resource not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'message': 'Internal server error'}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0', port=5000)