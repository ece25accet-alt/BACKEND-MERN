const getUser = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("User Loaded"), 1000)
  );

const getOrders = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Orders Loaded"), 1000)
  );

const getPayments = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Payments Loaded"), 1000)
  );

getUser()
  .then((user) => {
    console.log(user);
    return getOrders();
  })
  .then((orders) => {
    console.log(orders);
    return getPayments();
  })
  .then((payments) => {
    console.log(payments);
    console.log("Completed");
  });