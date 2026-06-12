const calculateBill = (...prices) =>
  prices.reduce((price, total) => price + total, 0);

console.log("Total Bill:", calculateBill(150, 230, 102, 58));
