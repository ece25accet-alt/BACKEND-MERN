function Task7(){


let students=[
{
id:1,
name:"Mani",
course:"React"
},
{
id:2,
name:"Kumar",
course:"Node"
}
];


return(

<div className="p-10">


{
students.map(student=>(

<div 
key={student.id}
className="border-4 border-red-500 p-4 m-3"
>
<h2>{student.id}</h2>
<h1>{student.name}</h1>
<p>{student.course}</p>

</div>

))

}


</div>

)

}

export default Task7;