const loginTracker = () => {
    let totalAttempts = 0;

    return () => {
        totalAttempts++;
        console.log(`Login Attempt: ${totalAttempts}`);
    };
};

const login = loginTracker();
login();
login();
