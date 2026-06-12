const createBankAccount = () => {
    let balance = 5000;

    return {
        deposit: (amount) => {
            balance += amount;
            console.log(`Deposited: ${amount}`);
        },

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
            console.log(`Balance: ${balance}`);
        }
    };
};

const account = createBankAccount();
account.checkBalance();
account.deposit(1000);
account.withdraw(2000);
account.checkBalance();