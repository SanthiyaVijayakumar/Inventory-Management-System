from flask import Blueprint, jsonify
import mysql.connector

report_bp = Blueprint('report_bp', __name__)


db = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="root", 
    database="inventory"
)

@report_bp.route('/report', methods=['GET'])
def get_balance_report():
    """
    Report: Balance quantity of each product in each location.
    - When a product moves *into* a location → add quantity
    - When it moves *out of* a location → subtract quantity
    """

    cursor = db.cursor(dictionary=True)

    query = """
        SELECT 
            p.name AS product,
            l.name AS location,
            COALESCE(SUM(
                CASE 
                    WHEN pm.to_location_id = l.id THEN pm.quantity
                    WHEN pm.from_location_id = l.id THEN -pm.quantity
                    ELSE 0
                END
            ), 0) AS quantity
        FROM product_movement pm
        JOIN product p ON pm.product_id = p.id
        JOIN location l ON (pm.to_location_id = l.id OR pm.from_location_id = l.id)
        GROUP BY p.name, l.name
        HAVING quantity != 0
        ORDER BY p.name, l.name;
    """

    cursor.execute(query)
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)
