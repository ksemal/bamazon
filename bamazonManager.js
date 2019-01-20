var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var table = new Table({
  head: ["ID", "PRODUCT NAME", "DEPARTMENT NAME", "PRICE", "QTY"],
  colWidths: [5, 40, 20, 10, 5]
});

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
  showOptions();
});

function showOptions() {
  inquirer
    .prompt({
      name: "options",
      type: "list",
      message: "Choose from these options",
      choices: [
        "View Products for Sale",
        "View Low Inventory",
        "Add to Inventory",
        "Add New Product",
        "Exit"
      ]
    })
    .then(answers => {
      console.log(answers.options);
      switch (answers.options) {
        case "View Products for Sale":
          showProducts();
          break;
        case "View Low Inventory":
          showLowInventory();
          break;
        case "Add to Inventory":
          addToInventory();
          break;
        case "Add New Product":
          addProduct();
          break;
        case "Exit":
          process.exit();
          break;
      }
    });
}

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
    showOptions();
  });
  connection.end();
}

function showLowInventory() {
  connection.query(
    "SELECT * FROM products WHERE ?? < ?",
    ["stock_quantity", "15"],
    function(err, res) {
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
      showOptions();
    }
  );
  connection.end();
}

function addToInventory() {}
