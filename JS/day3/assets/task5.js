const createATM = () => {
    let balance = 10000;

    return {
        withdraw: (amount) => {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: ${amount}`);
            } 
            
            else {
                console.log("Insufficient Balance");
            }
        },

        checkBalance: () => {
            console.log(`Balance is: ${balance}`);
        }
    };
};

const atm = createATM();
atm.checkBalance();
atm.withdraw(3500);
atm.checkBalance();