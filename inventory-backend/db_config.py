import mysql.connector

def get_db_connection():
    connection = mysql.connector.connect(
        host="localhost",       # host
        user="root",            # username
        password="root",# password
        database="inventory"   #database name
    )
    return connection