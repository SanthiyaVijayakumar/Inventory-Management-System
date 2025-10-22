# Inventory Management Web Application

A full-stack web application to manage inventory of products across multiple warehouses. Built with Python and Flask for the backend and **React** for the frontend.

## Table og Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Database Design](#database-design)
- [Installation](#installation)
- [Use Cases](#use-cases)


## About
This project is an Inventory Management System built with Python and Flask (backend) and React (frontend). It helps track products across multiple warehouse locations.

## Features
  **Dashboard**
   This is display the total number of products and locations and movements of products.

   
  **Products**
    Add Products: Add new products to the system with product_id and name.
    Edit Products: Update product details if there are changes.
    View Products: See a list of all products in the inventory.

    
  **Locations (Warehouses)**
    Add Locations: Add new warehouses or storage locations with location_id and name.
    Edit Locations: Update warehouse details.
    View Locations: View all existing locations in the system.

    
  **Product Movements**
    Record Movements: Track product movements between locations, including product,from_location, to_location, uantity and date.
    Edit Movements: Modify movement details if needed.
    View Movements: See the history of product movements.

    
  **Report**
    See current stock of each product in each location in a grid view with columns: Product, Warehouse, Quantity.

    

## Tech Stack
Frontend : React, Axios, HTML, CSS
Backend : Python , Flask
Database : SQL
Other Tools : Postman, XAMPP, Git, Github

## Database Design
1) Database Name : inventory
2) Product Table:
   Product_id (Primary key)
   Product_name
3) Location Table:
   Location_id (Primary_key)
   Location_name
4) Product_movement Table:
   Movement_id (Primary key)
   Movement_date
   From_location_id 
   To_location_id
   Product_id (Foreign key) 
   Quantity

## Installation
## 1. Clone the repository
git clone https://github.com/SanthiyaVijayakumar/Inventory-Management-System.git
cd Inventory-Management-System

## 2. Backend (Flash)
cd inventory-backend
# Create a virtual environment
python -m venv venv
# Activate environment
# Windows
venv\Scripts\activate
# Install dependencies
pip install -r requirements.txt
# Run the Flask server
python app.py

## 3. Frontend (React)
cd inventory-frontend
# Install dependencies
npm install
# Start frontend server
npm start

## Use Cases
1. **Create Products**
   - Add 3–4 products, e.g., Product A, Product B, Product C.

2. **Create Locations**
   - Add 3–4 warehouse locations, e.g., Location X, Location Y, Location Z.

3. **Move Products**
   - Move Product A into Location X
   - Move Product B into Location X
   - Move Product A from Location X to Location Y
   - Make ~20 product movements between products and locations

4. **Check Inventory Balance**
   - View a table/grid showing stock quantity for each product in each location
   - Columns: **Product | Warehouse | Quantity**
  
  






   
   
   
   




  
    
