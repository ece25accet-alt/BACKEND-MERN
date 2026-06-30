import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {

  const navigate = useNavigate()

  const [registerData,setRegisterData] = useState({userName:"",userEmail:"",userPassword:""})
  const [dataBase,setDataBase] = useState([])
  const handleChange = (e)=>{

     setRegisterData({...registerData,[e.target.name]:e.target.value})

  }
 
  const handleSubmit = (e)=>{

    e.preventDefault()

    if(registerData.userName === "" || registerData.userEmail === "" || registerData.userPassword===""){
        alert("Fill the Empty input")
        return
    } 
  
     
    const myData = JSON.parse(localStorage.getItem("userData")) || []

   const checkEmail =  myData.find((e)=>e.userEmail === registerData.userEmail)

   if(checkEmail){
    alert("Your Email Id is alredy register Try New")
    return
   }

    myData.push(registerData)

    // setDataBase(myData)

    localStorage.setItem("userData",JSON.stringify(myData))
   
    alert('Succfully Added')

    setRegisterData({userName:"",userEmail:"",userPassword:""})
     
    navigate("/login")

  }

  return (
  <>
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#f97316_0,transparent_28%),linear-gradient(135deg,#111827_0%,#172554_48%,#0f172a_100%)] px-4 py-10 text-slate-100">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur-xl md:grid-cols-[1fr_1.05fr]">
          <div className="hidden flex-col justify-between bg-slate-950/50 p-10 md:flex">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200">
                Join us
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white">
                Create your local storage account.
              </h1>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Keep your profile ready for this React authentication flow with a clean, focused sign-up experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm font-medium text-orange-100">Fast setup</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Add your name, email, and password to continue to the login page.
              </p>
            </div>
          </div>

          <div className="bg-white px-6 py-10 text-slate-950 sm:px-10">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Register
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Start your account
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Enter your details below to create a new profile.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">User name</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100" type="text" name="userName" onChange={handleChange} value={registerData.userName} placeholder='User Name' />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email address</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100" type="text" name="userEmail" onChange={handleChange} value={registerData.userEmail} placeholder='User Email' />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Password</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100" type="password" name="userPassword" onChange={handleChange} value={registerData.userPassword} placeholder='User Password' />
              </label>

              <input className="w-full cursor-pointer rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200" type="submit" value={"Register"} />
            </form>
          </div>
        </div>
      </section>
    </main>

  </>
  )
}

export default Register
