from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)

# initialize global variables
services = ['Logo Design', 'Web Design', 'Editing', 'Ads', 'Branding']
model = None
label_encoder = None
# Enquiries storage
enquiries_store = []


def train_model():
    global model, label_encoder
    np.random.seed(42)
    n_samples = 200
    data = []
    for _ in range(n_samples):
        service = np.random.choice(services)

        if service == 'Logo Design':
            base = 41500
            variation = np.random.normal(0, 12450)
            complexity_factor = np.random.uniform(0.8, 1.5)
        elif service == 'Web Design':
            base = 207500
            variation = np.random.normal(0, 66400)
            complexity_factor = np.random.uniform(0.7, 2.0)
        elif service == 'Editing':
            base = 24900
            variation = np.random.normal(0, 8300)
            complexity_factor = np.random.uniform(0.9, 1.4)
        elif service == 'Ads':
            base = 66400
            variation = np.random.normal(0, 20750)
            complexity_factor = np.random.uniform(0.8, 1.6)
        else:  # Branding
            base = 290500
            variation = np.random.normal(0, 83000)
            complexity_factor = np.random.uniform(0.8, 1.8)
        cost = max(8300, base * complexity_factor + variation)
        data.append({'service': service, 'cost': round(cost, 2)})

    df = pd.DataFrame(data)
    # training model
    label_encoder = LabelEncoder()
    X = label_encoder.fit_transform(df['service']).reshape(-1, 1)
    y = df['cost'].values
    model = RandomForestRegressor(n_estimators=100, random_state=42, max_depth=10)
    model.fit(X, y)

    print("Model trained successfully!")


def predict_cost(service_type):
    if service_type not in services:
        return None

    # encode service
    service_encoded = label_encoder.transform([service_type]).reshape(-1, 1)

    # predictions from all trees
    predictions = np.array([tree.predict(service_encoded)[0] for tree in model.estimators_])

    mean_cost = predictions.mean()
    std_cost = predictions.std()

    # range
    min_cost = max(8300, mean_cost - std_cost)
    max_cost = mean_cost + std_cost

    # round to nearest 100
    min_inr = round(min_cost / 100) * 100
    max_inr = round(max_cost / 100) * 100
    avg_inr = round(mean_cost / 100) * 100

    return {
        "service": service_type,
        "estimated_cost": {
            "min": int(min_inr),
            "max": int(max_inr),
            "average": int(avg_inr)
        },
        "currency": "INR",
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "note": "Actual cost may vary based on project complexity and requirements"
    }


# API routes
@app.route('/')
def home():
    """API documentation endpoint"""
    return jsonify({
        "message": "Hi Ayushman",
        "description": "OSF Creative Services Cost Prediction APIs",
        "endpoints": {
            "/api/services": "GET - List all available services",
            "/api/predict": "POST - Predict cost for a service",
            "/api/predict-all": "GET - Get predictions for all services"
        }
    })


@app.route('/api/services', methods=['GET'])
def get_services():
    """Get list of all available services"""
    return jsonify({
        "success": True,
        "services": services,
        "count": len(services)
    })


@app.route('/api/predict', methods=['POST'])
def predict():
    """Predict cost for a specific service"""
    try:
        data = request.get_json()
        if not data or 'service' not in data:
            return jsonify({
                "success": False,
                "error": "Please provide 'service' in request body"
            }), 400
        service_type = data['service']
        if service_type not in services:
            return jsonify({
                "success": False,
                "error": f"Invalid service. Available services: {', '.join(services)}"
            }), 400
        prediction = predict_cost(service_type)

        filename = f"predictions/osf_prediction_{service_type.replace(' ', '_').lower()}.json"
        try:
            import os
            os.makedirs('predictions', exist_ok=True)
            with open(filename, 'w') as f:
                json.dump(prediction, f, indent=2)
        except Exception as e:
            print(f"Warning: Could not save file - {e}")
        return jsonify({
            "success": True,
            "data": prediction
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


@app.route('/api/predict-all', methods=['GET'])
def predict_all():
    """Get predictions for all services"""
    try:
        predictions = {}
        for service in services:
            predictions[service] = predict_cost(service)
        response = {
            "success": True,
            "model_info": {
                "model_type": "Random Forest Regressor",
                "currency": "INR",
                "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            },
            "predictions": predictions
        }

        try:
            import os
            os.makedirs('predictions', exist_ok=True)
            with open('predictions/osf_all_services.json', 'w') as f:
                json.dump(response, f, indent=2)
        except Exception as e:
            print(f"Warning: Could not save file - {e}")
        return jsonify(response)
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "model_loaded": model is not None,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    })


@app.route('/api/enquiry', methods=['POST'])
def submit_enquiry():
    """Submit a new service enquiry"""
    try:
        data = request.get_json()
        if not data:
            return jsonify({
                "success": False,
                "error": "Request body required"
            }), 400
        
        # Validate required fields
        required = ['name', 'email', 'servicetype']
        missing = [f for f in required if not data.get(f)]
        if missing:
            return jsonify({
                "success": False,
                "error": f"Missing fields: {', '.join(missing)}"
            }), 400
        
        enquiry = {
            "name": data.get('name'),
            "email": data.get('email'),
            "servicetype": data.get('servicetype'),
            "description": data.get('description', ''),
            "budget": data.get('budget', ''),
            "business": data.get('business', ''),
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
        
        enquiries_store.append(enquiry)
        
        # Save to file for persistence
        try:
            import os
            os.makedirs('enquiries', exist_ok=True)
            with open('enquiries/all_enquiries.json', 'w') as f:
                json.dump(enquiries_store, f, indent=2)
        except Exception as e:
            print(f"Warning: Could not save enquiry file - {e}")
        
        return jsonify({
            "success": True,
            "message": "Enquiry submitted successfully",
            "data": enquiry
        }), 201
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


@app.route('/api/enquiry/all', methods=['GET'])
def get_all_enquiries():
    """Get all submitted enquiries"""
    try:
        return jsonify({
            "success": True,
            "count": len(enquiries_store),
            "data": enquiries_store
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


if __name__ == '__main__':
    train_model()

    print("=" * 60)
    print("OSF CREATIVE SERVICES - COST PREDICTION API SERVER")
    print("=" * 60)
    print("\nServer starting...")
    print("\nAPI Endpoints:")
    print("  GET  /                 - API Documentation")
    print("  GET  /api/services     - List all services")
    print("  POST /api/predict      - Predict cost for a service")
    print("  GET  /api/predict-all  - Get all predictions")
    print("  GET  /health           - Health check")
    print("\nServer running on: http://localhost:5000")
    print("=" * 60)
    print()

    app.run(debug=True, host='0.0.0.0', port=5000)
