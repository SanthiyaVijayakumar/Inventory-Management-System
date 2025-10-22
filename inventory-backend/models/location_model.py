from db_config import get_db_connection

def add_location(name):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO location (name) VALUES (%s)", (name,))
    conn.commit()
    conn.close()

def get_all_locations():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM location")
    result = cursor.fetchall()
    conn.close()
    return result

def get_location_by_id(location_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM location WHERE id = %s", (location_id,))
    result = cursor.fetchone()
    conn.close()
    return result

def update_location(location_id, name):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE location SET name = %s WHERE id = %s", (name, location_id))
    conn.commit()
    conn.close()
    
def delete_location(location_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM location WHERE id = %s", (location_id,))
    conn.commit()
    conn.close()

