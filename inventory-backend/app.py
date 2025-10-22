from flask import Flask
from flask_cors import CORS
from routes.product_route import product_bp
from routes.location_route import location_bp
from routes.product_movement_route import product_movement_bp
from routes.report_route import report_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  

app.register_blueprint(product_bp)
app.register_blueprint(product_movement_bp)
app.register_blueprint(location_bp)
app.register_blueprint(report_bp)

@app.route('/')
def home():
    return "Welcome to the API 🚀"

if __name__ == '__main__':
    app.run(debug=True)
