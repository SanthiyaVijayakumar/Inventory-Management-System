from flask import Blueprint, request, jsonify
from models.location_model import (
    add_location, get_all_locations, get_location_by_id, update_location, delete_location
)
from db_config import get_db_connection  

location_bp = Blueprint('location_bp', __name__, url_prefix='/locations')


@location_bp.route('/', methods=['GET'])
def get_locations():
    locations = get_all_locations()
    return jsonify(locations), 200


@location_bp.route('/<int:location_id>', methods=['GET'])
def get_location(location_id):
    location = get_location_by_id(location_id)
    if location:
        return jsonify(location), 200
    return jsonify({'message': 'Location not found'}), 404


@location_bp.route('/', methods=['POST'])
def create_location():
    data = request.get_json()
    name = data.get('name')
    if not name:
        return jsonify({'error': 'Location name is required'}), 400
    add_location(name)
    return jsonify({'message': 'Location added successfully'}), 201


@location_bp.route('/<int:location_id>', methods=['PUT'])
def modify_location(location_id):
    location = get_location_by_id(location_id)
    if not location:
        return jsonify({'message': 'Location not found'}), 404

    data = request.get_json()
    name = data.get('name')
    if not name:
        return jsonify({'error': 'Location name is required'}), 400

    update_location(location_id, name)
    return jsonify({'message': 'Location updated successfully'}), 200


@location_bp.route('/<int:location_id>', methods=['DELETE'])
def remove_location(location_id):
    location = get_location_by_id(location_id)
    if not location:
        return jsonify({'message': 'Location not found'}), 404

    delete_location(location_id)
    return jsonify({'message': 'Location deleted successfully'}), 200
