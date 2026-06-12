const login = () =>new Promise((resolve) =>
    setTimeout(() => resolve("Login Success"), 2000)
  );

login().then((message) => console.log(message));