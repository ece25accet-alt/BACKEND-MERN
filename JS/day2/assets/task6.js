const calculatorApp = ()=>{

    let number1 = parseInt(prompt("Enter Number1"));
    let number2 = parseInt(prompt("Enter Number2"));  
    
    return(`Addition: ${number1 + number2}, Subtraction: ${number1-number2}, Multiplication: ${number1*number2}, Division: ${number1/number2}`);



}

console.log(calculatorApp());