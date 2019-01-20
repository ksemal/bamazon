# BAMAZON

BAMAZON is an Amazon-like application that uses MySQL database. The app will take in orders from customers and deplete stock from the store's inventory. Also this app tracks product sales across the store's departments and then provide a summary of the highest-grossing departments in the store.

## How this app works

### 1. First start

![screenshot](assets/images/menu.gif)

On the first load of the application you will see the menu to choose from depending on your needs

### 2. Customer

![screenshot](assets/images/customer.gif)

Here customers can place an order. The app displays all of the items available for sale and then prompt users with two messages:

- The ID of the product they would like to buy.
- How many units of the product they would like to buy.
  Once the customer has placed the order, the application checks if it has enough of the product to meet the customer's request and reflects the total cost of the purchase (with update information in database) or notify user about insufficient quantity of the product.

### 3. Manager

![screenshot](assets/images/manager.gif)

In this part the user can see a set of menu options:

- `View Products for Sale` The app will list every available item: the item IDs, names, prices, quantities, and product sales information.
- `View Low Inventory` The app will list all items with an inventory count lower than 15.
- `Add to Inventory` The app will display a prompt that will let the manager "add more" of any item currently in the store
- `Add New Product` It will allow the manager to add a completely new product to the store.

### 4. Superviser

![screenshot](assets/images/superviser.gif)

This will list a set of menu options:

- `View Product Sales by Department` App should display a summarized table with department id, department name, over head costs, product sales, and total profit columns
- `Create New Department` It will allow the superviser to add a new department to the store

## Tech:

- mySQL database
- [node.js]
  Used packages:
- npm inquirer
- npm mysql
- cli-table

Installation:

- requires Node.js to run.
- install the dependencies by running `npm install`

I think the biggest technical challenge was create a supervisor functionality where I used complex query for database with JOIN method in order to get the sum of two tables
