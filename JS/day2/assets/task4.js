const biggestNumber = ()=>{

    let num1 = prompt("Enter Number 1:");
    let num2 = prompt("Enter Number 2:");
    let num3 = prompt("Enter Number 3:");

    if(num1>=num2 && num1>=num3){
        return num1;
    }

    else if(num2>=num1 && num2>=num3){
        return num2;
    }

    else{
        return num3;
    }
}

console.log("The Biggest of given three is: "+ biggestNumber());