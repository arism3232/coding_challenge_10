// Task1- Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }; // Creating a class with various properties including strings and numbers. 
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    }; // Adding a method that returns a formatted string of product details.
    updateStock(quantity) {
        this.stock -=quantity;
    }; // Adding a method that modifies the stock level when an order is placed.
};
// Test Cases 
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task2- Creating an Order Class
class Order {
    constructor(orderID, product, quantity) {
        this.orderID = orderID;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity);
    }; // Creating a class with properties, ensuring the stock is reduced when an order is created.  
    getOrderDetails() {
        return `OrderID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`
    }; // Adding a method that returns order details. 
};
// Test Cases
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

// Task3- Creating an Inventory Class
class Inventory {
    constructor() {
        this.products = []
        this.orders = []
    }; // Creating a class with properties. 
    addProduct(product) {
        this.products.push(product)
    }; // Adding a method to add new peoduct to the inventory. 
    listProducts() {
        this.products.forEach(product => {
            console.log(product.getDetails())
        });
    }; // Adding a method to log all products' details. 

    // Task4- Implementing Order Management
    placeOrder(orderID, product, quantity) {
        const newOrder = new Order(orderID, product, quantity);
        this.orders.push(newOrder)
    }; // Adding method to create a new order and adding it to orders if stock is available.
    listOrders() {
        this.orders.forEach(order => {
            console.log(order.getOrderDetails());
        });
    }; // Logging all placed orders. 

    // Task5- Implementing Product Restocking
    restockProduct(productID, quantity) {
        const product = this.products.find(product => productID === productID);
        product.stock += quantity;
    }; // Adding a method to increase the stock of the product. 
};
// Test Cases
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"