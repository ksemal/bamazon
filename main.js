var Customer = require("./bamazonCustomer.js");
var Manager = require("./bamazonManager.js");
var Supervisor = require("./bamazonSupervisor.js");
var inquirer = require("inquirer");

inquirer
  .prompt({
    name: "menu",
    type: "list",
    message:
      "\n" +
      "=============================== \n" +
      "|     WELCOME TO BAMAZON      | \n" +
      "|    Choose from the menu     | \n" +
      "===============================",
    choices: ["I am a Customer", "I am a Manager", "I am a Supervisor", "Exit"]
  })
  .then(answers => {
    switch (answers.menu) {
      case "I am a Customer":
        Customer();
        break;
      case "I am a Manager":
        Manager();
        break;
      case "I am a Supervisor":
        Supervisor();
        break;
      case "Exit":
        return;
    }
  });
