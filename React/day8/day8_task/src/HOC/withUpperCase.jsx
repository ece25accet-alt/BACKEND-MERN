import { useState } from "react"




const withUpperCase = (Wrappedcomponent) => {

    return function WithUpperCase(props){


        const [message, setMessage] = useState("")

        const toUpper =(e)=>{
            setMessage(e.target.value.toUpperCase())
        }


        return(
            <>
            <div className="flex flex-col justify-center items-center h-50">

            <div className="my-10" >
                <input type="text" onChange={toUpper} className="border-2 "></input>
            </div>


            < Wrappedcomponent {...props} msg ={message} />

            </div>

            </>
        )

    }

}

export default withUpperCase
