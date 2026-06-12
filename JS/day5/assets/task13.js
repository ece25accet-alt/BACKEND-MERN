const product = {
  id: 1,
  name: "Laptop",
  stock: 10
};

const updateStock = (productObj, newStock) => ({
  ...productObj,
  stock: productObj.stock + newStock
});

const updatedStock = updateStock(product, 5);

console.log(product);
console.log(updatedStock);
console.log(product);
