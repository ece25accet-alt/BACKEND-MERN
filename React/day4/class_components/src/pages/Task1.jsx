import React from "react";

class Task1 extends React.Component{


    constructor(){
    super();
    this.state = {value: ""};
}

update = () => {

    this.setState({value: "Hello World"});
}

render(){
return(
<div className="p-10">

<h1 className="text-3xl font-bold">
Class Component
</h1>
<button onClick={this.update} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
  Click me
</button>
<p className="mt-10 text-xl">{this.state.value}</p>


</div>
)

}

}


export default Task1;