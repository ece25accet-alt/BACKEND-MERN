
const getProducts = () => new Promise((resolve)=>(setTimeout(()=>resolve([
      "Laptop",

      "Mobile",

      "Keyboard"]),2000)
    
    )
);

getProducts().then((products) => console.log(products));