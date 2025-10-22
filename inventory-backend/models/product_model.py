from db_config import get_db_connection

def add_product(name):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO product (name) VALUES (%s)", (name,))
    conn.commit()
    conn.close()

def get_all_products():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM product")
    result = cursor.fetchall()
    conn.close()
    return result

def get_product_by_id(product_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM product WHERE id = %s", (product_id,))
    result = cursor.fetchone()
    conn.close()
    return result

def update_product(product_id, name):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE product SET name = %s WHERE id = %s", (name, product_id))
    conn.commit()
    conn.close()

def delete_product(product_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM product WHERE id = %s", (product_id,))
    conn.commit()
    conn.close()
