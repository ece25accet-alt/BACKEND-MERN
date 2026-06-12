const processPayment = (callback) => {

    console.log("Processing Payment...please wait...");
    callback();

};

const gPay = () => {
    console.log("Paid by using GPay");
};

const phonePe = () => {
    console.log("Paid with using PhonePe");
};

const paytm = () => {
    console.log("Paid using Paytm");
};


processPayment(gPay);
processPayment(phonePe);
processPayment(paytm);