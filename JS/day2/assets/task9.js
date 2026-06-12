const tempConvert =()=>{

    let celsius = prompt("Enter the Celsius: ");

    let farenhiet = (celsius * (9/5)+32);

    return(`The given Celsius in Farenhiet is ${farenhiet}`);
}

console.log(tempConvert());
