
console.log(company); 

var company = "ZOHO";

let emp = "malaiarasan";

const role = "Java";

const interview = () => {

    var functionVariable = 800000;

    console.log(company);
    console.log(emp);
    console.log(role);

    if (true) {

        let blockVariable = 66000;

        console.log(blockVariable);
        console.log(functionVariable);
    }


    const parent = () => {

        let parentData = 100;
        console.log(parentData);
        const child = () => {

            console.log((parentData)/2);
            console.log(role);
        };

        child();
    };

    parent();

    console.log("10" + 5);
    console.log(Number("100")+25);


};

interview();