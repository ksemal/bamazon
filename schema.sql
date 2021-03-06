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

  CREATE TABLE departments
  (
    department_id INT NOT NULL
    AUTO_INCREMENT,
    department_name VARCHAR
    (100) NULL,
    over_head_costs DECIMAL
    (15,2),
    PRIMARY KEY
    (department_id)
);

    ALTER TABLE products
ADD product_sales DECIMAL(15,2) NULL;

    ALTER TABLE products MODIFY COLUMN product_sales DECIMAL
    (15,2) DEFAULT 0;

    INSERT INTO departments
      (department_name, over_head_costs)
    VALUES
      ("Electronics", 2005.00),
      ("Clothing", 54.45),
      ("Home", 24.75),
      ("Arts&Crafts", 5),
      ("Sports&Outdoors", 18.34);
