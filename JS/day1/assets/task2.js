// Global Scope
let piValue = 3.1452; //global scope is accessible anywhere in the programme

function functionScope() {

    var alphaValue = 10;

    console.log(piValue);       // global scopeed variable is accessible inside a function aswell
    console.log(alphaValue);     // function scopeed variable accessible anywhere inside the function

    if (true) {

        let betaValue = 20; //let is function scoped by default

        console.log(piValue);     //global variable is accessible
        console.log(alphaValue);   //function variable is accessible
        console.log(betaValue);      //block scopeed is accessible only inside the block
    }

    // Accessing block scoped variable outside block will result in error
    console.log(blockVariable); 

}

functionScope();


// Accessing global scope outside function is still accessible
console.log(piValue);     

// Accessing function variable outside function is not accessible
//console.log(functionVariable);   
