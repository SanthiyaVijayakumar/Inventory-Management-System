# Inventory Management Web Application

A full-stack web application to manage inventory of products across multiple warehouses. Built with **Python and Flask** for the backend and **React** for the frontend.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Database Design](#database-design)
- [Installation](#installation)
- [Use Cases](#use-cases)
- [Screenshots](#screenshots)

## About
This project is an Inventory Management System built with Python and Flask (backend) and React (frontend). It helps track products across multiple warehouse locations and manage product movements efficiently.

## Features

**Dashboard**  
- Displays total number of products, locations, and product movements.

**Products**  
- **Add Products:** Add new products to the system with `product_id` and `product_name`.  
- **Edit Products:** Update product details if needed.  
- **View Products:** See a list of all products in the inventory.

**Locations (Warehouses)**  
- **Add Locations:** Add new warehouses or storage locations with `location_id` and `location_name`.  
- **Edit Locations:** Update warehouse details.  
- **View Locations:** View all existing locations in the system.

**Product Movements**  
- **Record Movements:** Track product movements between locations including product, from_location, to_location, quantity, and date.  
- **Edit Movements:** Modify movement details if needed.  
- **View Movements:** See the history of product movements.

**Report**  
- See current stock of each product in each location in a grid view with columns: **Product | Warehouse | Quantity**.

## Tech Stack
- **Frontend:** React, Axios, HTML, CSS  
- **Backend:** Python, Flask  
- **Database:** MySQL / SQL  
- **Other Tools:** Postman, XAMPP, Git, GitHub

## Database Design
**Database Name:** `inventory`

**Product Table**  
- `product_id` (Primary Key)  
- `product_name`  

**Location Table**  
- `location_id` (Primary Key)  
- `location_name`  

**ProductMovement Table**  
- `movement_id` (Primary Key)  
- `movement_date`  
- `from_location_id` (nullable)  
- `to_location_id` (nullable)  
- `product_id` (Foreign Key)  
- `quantity`  

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/SanthiyaVijayakumar/Inventory-Management-System.git
cd Inventory-Management-System


### 2. Backend (Flash)
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
```

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
  
  






   
   
   
   




  
    
