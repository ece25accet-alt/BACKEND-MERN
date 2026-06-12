
const orderFood =()=> new Promise((resolve)=>
    setTimeout(()=>resolve("Pizza Delivered"),4000)

);

orderFood().then((food)=>console.log(food));
