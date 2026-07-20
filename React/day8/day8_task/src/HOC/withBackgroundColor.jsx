import { useState } from "react"


const withBackgroundColor = (Wrappedcomponent) => {


    return function WithBackgroundColor(props){

        const [color, setColor] = useState("")
         const [border, setBorder] = useState("")

    const colorChange =(e)=>{
        setColor(e.target.value)
    }

    const borderChange =(e)=>{
        setBorder(e.target.value)
    }

   

    return (
        <>
         <div>
        <input type="text" className="border-2" onChange={colorChange}></input>
        <input type="text" className="border-2" onChange={borderChange}></input>
        </div>
        
        <Wrappedcomponent {...props} color={color} border={border} />
        </>
    )
    
    

    }


}

export default withBackgroundColor
