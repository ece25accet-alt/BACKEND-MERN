const parent = () => {

let parentVariable = 10;
    // console.log(childVariable); will give error cause an parent can't access child's varibales
        const child = () => {

            let childVariable = 2*(parentVariable);

            const grandChild = () => {

        let grandChildVariable = 2*(childVariable);

            console.log(parentVariable); //can access it's grandParent variable
            console.log(childVariable);      //can access it's parent variable
            console.log(grandChildVariable);       // and can access it's own variable
        };

        grandChild();
    };

    child();
};

parent();