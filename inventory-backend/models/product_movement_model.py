from db_config import get_db_connection

def add_product_movement(product_id, from_location_id, to_location_id, quantity, movement_date):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO product_movement (product_id, from_location_id, to_location_id, quantity, movement_date) "
        "VALUES (%s, %s, %s, %s, %s)",
        (product_id, from_location_id, to_location_id, quantity, movement_date)
    )
    conn.commit()
    conn.close()


def get_product_movements():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM product_movement")
    result = cursor.fetchall()
    conn.close()
    return result


def get_product_movement_by_id(movement_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM product_movement WHERE id = %s", (movement_id,))
    result = cursor.fetchone()
    conn.close()
    return result


def update_product_movement(movement_id, product_id, from_location_id, to_location_id, quantity, movement_date):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE product_movement SET product_id = %s, from_location_id = %s, to_location_id = %s, quantity = %s, movement_date = %s WHERE id = %s",
        (product_id, from_location_id, to_location_id, quantity, movement_date, movement_id)
    )
    conn.commit()
    conn.close()


def delete_product_movement(movement_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM product_movement WHERE id = %s", (movement_id,))
    conn.commit()
    conn.close()