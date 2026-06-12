const printName = (name, count) => {

    for(let i = 1; i <= count; i++) {
        document.write(name +"<br>");
    }

};

let name = prompt("Enter your name:");
let count = parseInt(prompt("How many times to print your name:"));

printName(name, count);