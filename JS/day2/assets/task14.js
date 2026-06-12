const largest = (...nums) => Math.max(...nums);

let input = prompt("Enter numbers separated by , :");
let numbers = input.split(",").map(Number);

console.log("Largest Number is: " + largest(...numbers));