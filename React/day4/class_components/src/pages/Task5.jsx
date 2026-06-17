import {useState} from "react";


function Task5(){

const [user,setUser]=useState({
name:"Mani",
age:22
});


return(
<>
<div className="p-10 text-xl flex flex-col items-center justify-center">

<p>{user.name}</p>
<p>{user.age}</p>


<button
className="bg-purple-500 text-white p-3 mt-5 rounded-lg hover:bg-purple-700"
onClick={()=>setUser({
name:"Charles",
age:25
})}
>
Update

</button>


</div>
</>
)

}

export default Task5;