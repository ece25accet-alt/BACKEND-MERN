import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate()

  const [registerData,setRegisterData] = useState({userEmail:"",userPassword:""})
  const [dataBase,setDataBase] = useState([])
  const handleChange = (e)=>{

     setRegisterData({...registerData,[e.target.name]:e.target.value})

  }
 
  const handleSubmit = (e)=>{

    e.preventDefault()

    if(registerData.userEmail === "" || registerData.userPassword===""){
        alert("Fill the Empty input")
        return
    } 
  
     
    const myData = JSON.parse(localStorage.getItem("userData"))

   const checkauth =  myData.find((e)=>e.userEmail === registerData.userEmail && e.userPassword === registerData.userPassword)

   if(!checkauth){
    alert('User Not a register Users')
    return
   }

    

    // setDataBase(myData)

    localStorage.setItem("auth",JSON.stringify(checkauth))
   
    // alert('Succfully Added')

    setRegisterData({userEmail:"",userPassword:""})
     
    navigate("/dashboard")

  }

  return (
  <>
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#22c55e_0,transparent_26%),linear-gradient(135deg,#020617_0%,#164e63_48%,#111827_100%)] px-4 py-10 text-slate-100">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur-xl md:grid-cols-[1.05fr_1fr]">
          <div className="bg-white px-6 py-10 text-slate-950 sm:px-10">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Login
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Sign in with your registered email and password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email address</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-4 focus:ring-cyan-100" type="text" name="userEmail" onChange={handleChange} value={registerData.userEmail} placeholder='User Email' />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Password</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-4 focus:ring-cyan-100" type="password" name="userPassword" onChange={handleChange} value={registerData.userPassword} placeholder='User Password' />
              </label>

              <input className="w-full cursor-pointer rounded-xl bg-cyan-700 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-cyan-700/25 transition hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-200" type="submit" value={"Login"} />
            </form>
          </div>

          <div className="hidden flex-col justify-between bg-slate-950/50 p-10 md:flex">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
                Secure access
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white">
                Continue to your dashboard.
              </h1>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Your saved local profile is checked before opening the dashboard.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm font-medium text-cyan-100">Ready when you are</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Enter the same credentials you used during registration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

  </>
  )
}

export default Login
