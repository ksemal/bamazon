var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var table = new Table({
  head: ["ID", "PRODUCT NAME", "DEPARTMENT NAME", "PRICE", "QTY"],
  colWidths: [5, 40, 20, 10, 5]
});

var validInput = value => {
  if (/\d/.test(value)) {
    return true;
  } else if (value === "q" || value === "Q") {
    process.exit();
  } else {
    return "Please use numbers only!";
  }
};

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  showProducts();
});

function showProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    res.forEach(element => {
      var row = [];
      row.push(
        element.item_id,
        element.product_name,
        element.department_name,
        element.price,
        element.stock_quantity
      );
      table.push(row);
    });
    console.log(table.toString());
    placeOrder();
  });
}

function placeOrder() {
  inquirer
    .prompt([
      {
        name: "id",
        message:
          "Enter an Id of the product you would like to buy [Press Q to exit]",
        validate: validInput
      },
      {
        name: "qty",
        message:
          "Enter how many units of the product you would like to buy [Press Q to exit]",
        validate: validInput
      }
    ])
    .then(answers => {
      readProducts(answers.id, answers.qty);
    });
}

function readProducts(id, qty) {
  connection.query(
    "SELECT * FROM products WHERE ?",
    {
      item_id: id
    },
    function(err, res) {
      if (err) throw err;
      console.log(res[0].stock_quantity);
      qty = parseInt(qty);
      console.log(qty);
      if (res[0].stock_quantity >= qty) {
        customerOrder(qty, res[0].price, res[0].stock_quantity, res[0].item_id);
      } else {
        console.log("Insufficient quantity!");
      }
    }
  );
}

function customerOrder(quantity, price, stockQty, id) {
  console.log("Your order is being processed \n");
  console.log("Your total cost is: " + quantity * price);

  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: stockQty - quantity
      },
      {
        item_id: id
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product(s) updated!\n");
    }
  );

  connection.end();
}
