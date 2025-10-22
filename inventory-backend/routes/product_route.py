from flask import Blueprint, request, jsonify
from models.product_model import (
    add_product,
    get_all_products,
    get_product_by_id,
    update_product,
    delete_product as model_delete_product
)

product_bp = Blueprint('product_bp', __name__, url_prefix='/products')


@product_bp.route('/', methods=['GET'])
def get_products():
    products = get_all_products()
    return jsonify(products), 200


@product_bp.route('/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = get_product_by_id(product_id)
    if product:
        return jsonify(product), 200
    return jsonify({'message': 'Product not found'}), 404


@product_bp.route('/', methods=['POST'])
def create_product():
    data = request.get_json()
    name = data.get('name')
    if not name:
        return jsonify({'error': 'Product name is required'}), 400
    add_product(name)
    return jsonify({'message': 'Product added successfully'}), 201


@product_bp.route('/<int:product_id>', methods=['PUT'])
def modify_product(product_id):
    product = get_product_by_id(product_id)
    if not product:
        return jsonify({'message': 'Product not found'}), 404

    data = request.get_json()
    name = data.get('name')
    if not name:
        return jsonify({'error': 'Product name is required'}), 400

    update_product(product_id, name)
    return jsonify({'message': 'Product updated successfully'}), 200


@product_bp.route('/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = get_product_by_id(product_id)
    if not product:
        return jsonify({'message': 'Product not found'}), 404

    model_delete_product(product_id)
    return jsonify({'message': 'Product deleted successfully'}), 200
