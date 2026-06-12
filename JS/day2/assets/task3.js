const voterEligibility = ()=>{

    let personAge = prompt("Enter the Age:");

    return(personAge>=18?"Eligible to vote":"Not Eligible to vote");

}

console.log(voterEligibility());