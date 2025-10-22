from flask import Blueprint, request, jsonify
from models.product_movement_model import (
    add_product_movement,
    get_product_movements,
    get_product_movement_by_id,
    update_product_movement,
    delete_product_movement
)
from db_config import get_db_connection  

product_movement_bp = Blueprint('product_movement_bp', __name__, url_prefix='/product-movement')


@product_movement_bp.route('/', methods=['GET'])
def get_product_movements_route():
    movements = get_product_movements()
    return jsonify(movements), 200


@product_movement_bp.route('/<int:movement_id>', methods=['GET'])
def get_product_movement_route(movement_id):
    movement = get_product_movement_by_id(movement_id)
    if movement:
        return jsonify(movement), 200
    return jsonify({'message': 'Movement not found'}), 404


@product_movement_bp.route('/', methods=['POST'])
def add_product_movement_route():
    data = request.get_json()
    product_id = data.get('product_id')
    from_location_id = data.get('from_location_id')
    to_location_id = data.get('to_location_id')
    quantity = data.get('quantity')
    movement_date = data.get('movement_date')

    add_product_movement(product_id, from_location_id, to_location_id, quantity, movement_date)
    return jsonify({'message': 'Product movement added successfully'}), 201


@product_movement_bp.route('/<int:movement_id>', methods=['PUT'])
def update_product_movement_route(movement_id):
    movement = get_product_movement_by_id(movement_id)
    if not movement:
        return jsonify({'message': 'Movement not found'}), 404

    data = request.get_json()
    product_id = data.get('product_id')
    from_location_id = data.get('from_location_id')
    to_location_id = data.get('to_location_id')
    quantity = data.get('quantity')
    movement_date = data.get('movement_date')

    update_product_movement(movement_id, product_id, from_location_id, to_location_id, quantity, movement_date)
    return jsonify({'message': 'Product movement updated successfully'}), 200


@product_movement_bp.route('/<int:movement_id>', methods=['DELETE'])
def remove_product_movement_route(movement_id):
    movement = get_product_movement_by_id(movement_id)
    if not movement:
        return jsonify({'message': 'Movement not found'}), 404

    delete_product_movement(movement_id)
    return jsonify({'message': 'Product movement deleted successfully'}), 200