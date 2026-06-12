const discountedPrice = (price, discount) =>
  price -= (price * discount) / 100;

console.log("Final Price after discount:", discountedPrice(100, 5));
