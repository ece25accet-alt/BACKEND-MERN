import {Component} from "react";


class Task2 extends Component{

componentDidMount(){
console.log("Component Mounted");
}

componentDidUpdate(){
console.log("Component Updated");
}

componentWillUnmount(){
console.log("Component Removed");
}

    render(){

        return(
        <h1 className="p-10 text-3xl font-bold">
        Check Console for Lifecycle
        </h1>
        )

        }


    }


export default Task2;