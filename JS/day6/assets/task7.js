const payment = () =>
  new Promise((resolve, reject) => {
    const status = false;

    if (status) {
      resolve("Payment Success");
    } else {
      reject("Payment Failed");
    }
  });

payment()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });