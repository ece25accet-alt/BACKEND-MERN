const smallest = (...nums) => Math.min(...nums);

let input = prompt("Enter numbers separated by , :");
let numbers = input.split(",").map(Number);

console.log("Smallest Number = " + smallest(...numbers));
