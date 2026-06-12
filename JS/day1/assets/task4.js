
const company = "SLA";

const level1 = () => {

    const level2 = () => {

        const level3 = () => {
            console.log(company);
        };

        level3();
    };

    level2();
};

level1();

//1. level3 is searched first since the variable is used inside it.
//2. since it is not in l3 js moves to l2 to search and l1 after it, and after that only it search in global scope.
//3. after finding the variable in global scope it uses it for the console.log();