import {useState} from "react";


function Task3(){

const [name,setName]=useState("Class Component");


return(

<div className="p-10">

<h1 className="text-3xl">
{name}
</h1>


<button
onClick={()=>setName("React Hooks")}
className="bg-green-500 text-white p-3 mt-2">

Update Process

</button>

</div>

)

}

export default Task3;