import { useEffect, useState } from "react"

const App = () => {

  const[count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
    const increaseCount = ()=>{
    setCount((prev)=> prev+1)
  }

    increaseCount() 
    },1000)
  
  },[]);

 
  return (
    <>
    <div>
      <h1>This is Time Counter</h1>
      <button className="bg-black text-white rounded-xl mx-2 my-2 p-2"  >Click me</button>
      <p>This is Count = {count}</p>
    </div>
    </>
  )
}

export default App
