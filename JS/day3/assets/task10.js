const createOrder = () => {
    let orderCount = 0;

    return (callback) => {
        orderCount++;

        console.log(`Order Number: ${orderCount} is Processing...`);
        
        setTimeout(()=> {
        callback()
        },1500);


        setTimeout(() => {
        console.log("Order Completed");
        }, 3000);
    };
};

const processOrder = createOrder();

const mobileOrder = () => {
    console.log("Mobile Order");
};

const laptopOrder = () => {
    console.log("Laptop Order");
};

const tvOrder = () => {
    console.log("TV Order");
};


processOrder(mobileOrder);

