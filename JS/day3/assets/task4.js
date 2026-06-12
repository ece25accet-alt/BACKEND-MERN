const makeCart = () => {
    let itemCount = 0;

    return {
        addProduct: () => {
            itemCount++;
            console.log("Product Added");
        },

        removeProduct: () => {
            if (itemCount > 0) {
                itemCount--;
                console.log("Product Removed");
            } 
            
            else {
                console.log("Cart is already Empty");
            }
        },

        displayItems: () => {
            console.log(`Total Items: ${itemCount}`);
        }
    };
};


const cart = makeCart();
cart.addProduct();
cart.addProduct();
cart.displayItems();
cart.removeProduct();
cart.displayItems();