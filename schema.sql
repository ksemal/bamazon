CREATE database bamazon;

USE bamazon;

CREATE TABLE products
(
  item_id INT NOT NULL
  AUTO_INCREMENT,
  product_name VARCHAR
  (100) NULL,
  department_name VARCHAR
  (100) NULL,
  price DECIMAL
  (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY
  (item_id)
);



  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Smart TV", "Electronics", 2296.99, 56),
    ("Cocktail Party Dress", "Clothing", 27.99, 10),
    ("Underwater Waterproof Camera", "Electronics", 39.99, 34),
    ("Kids Carpet", "Home", 15.09, 12),
    ("Drawing Pens Set", "Arts&Crafts", 7.99, 89),
    ("Bluetooth Speaker", "Electronics", 22.94, 67),
    ("Electric Blanket", "Home", 59.49, 12),
    ("Digital Kitchen Scale", "Home", 17.99, 6),
    ("Airbed", "Sports&Outdoors", 46.73, 24),
    ("Resistance Band", "Sports&Outdoors", 16.99, 125);