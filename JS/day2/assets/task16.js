const totalBill = (...prices) =>
    prices.reduce((sum, price) => sum + price, 0);

let input = prompt("Enter product prices separated by commas:");
let prices = input.split(",").map(Number);

console.log("Total Bill = ₹" + totalBill(...prices));
