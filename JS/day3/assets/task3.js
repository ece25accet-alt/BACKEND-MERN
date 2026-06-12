const visitCounter = () => {
    let visitors = 0;

    return () => {
        visitors++;
        console.log(`Total no. of Visitors are: ${visitors}`);
    };
};

const visit = visitCounter();
visit();
visit();
visit();