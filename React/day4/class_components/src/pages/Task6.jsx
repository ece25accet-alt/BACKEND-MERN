function Task6(){

let items = [
"HTML",
"CSS",
"React"
];


return(
<>
<div className="p-10">

<h1 className="text-3xl font-bold">
Array Display
</h1>


{items.map((item, index) => (
    <div key={index} className="text-xl">
        {index + 1}. {item}
    </div>
)
)}


</div>
</>
)

}

export default Task6;