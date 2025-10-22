CREATE DATABASE inventory;

USE inventory;

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE location (
id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE product_movement (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movement_date DATE NOT NULL,
    from_location_id INT NOT NULL,
    to_location_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (from_location_id) REFERENCES location(id),
    FOREIGN KEY (to_location_id) REFERENCES location(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);