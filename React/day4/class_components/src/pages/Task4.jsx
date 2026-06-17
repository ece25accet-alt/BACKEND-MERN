import {useState} from "react";


function Task4(){

const [count,setCount]=useState(0);


return(
<>
<div className="p-10 flex flex-row gap-5 items-center">

<button
onClick={()=>setCount(count+1)}
className="bg-blue-500 text-white p-3"
>
Increase
</button>

<h1 className="text-4xl">
{count}
</h1>


</div>
</>
)

}




export default Task4;