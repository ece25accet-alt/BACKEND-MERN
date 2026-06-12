const executeAction = (abc) => {
    abc();
};

const login = () => {
    console.log("User Logged In");
};

const logout = () => {
    console.log("User Logged Out");
};

const register = () => {
    console.log("User Registered");
};


executeAction(register);
executeAction(login);
executeAction(logout);