// Task1- Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    };
    updateStock(quantity) {
        this.stock -=quantity;
    };
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
    };
    getOrderDetails() {
        return `OrderID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Totoal Price: $${this.product.price * this.quantity}`
    };
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
    };
    addProduct(product) {
        this.products.push(product)
    };
    listProducts() {
        this.products.forEach(product => {
            console.log(product.getDetails())
        });
    };
    // Task4- Implementing Order Management
    listOrders() {
        this.orders.forEach(order => {
            console.log(order.getOrderDetails());
        });
    };
    placeOrder(orderID, product, quantity) {
        const newOrder = new Order(orderID, product, quantity);
        this.orders.push(newOrder)
    };
    
}