const showPrice = ()=>{

    let productPrice = prompt("Enter the price of the product:");
    let productQuantity = prompt("Enter the Quantity of the product:");

    return("The total price is: "+(productPrice*productQuantity));

}

console.log(showPrice());