import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {

 const navigate = useNavigate()
 const [userData,setUserData] = useState({})

 const myData = JSON.parse(localStorage.getItem("auth"))
 
if(!userData.userName){
    navigate("/login")
   }

 useEffect(()=>{

   const datas = ()=>{
   
   setUserData(myData)

   

 }

 datas()

 },[])

 const logout = ()=>{
  
  localStorage.removeItem("auth")
  
 navigate("/login")

  }

   
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#38bdf8_0,transparent_28%),linear-gradient(135deg,#020617_0%,#1e293b_48%,#111827_100%)] px-4 py-10 text-white">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="border-b border-white/10 bg-slate-950/40 px-6 py-6 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              DashBoard
            </p>
            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Welcome, {userData.userName}
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Your account details are saved in local storage.
            </p>
          </div>

          <div className="bg-white px-6 py-8 text-slate-950 sm:px-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-700 text-xl font-bold uppercase text-white shadow-lg shadow-cyan-700/20">
                  {userData.userName?.charAt(0)}
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                    Profile
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-950">
                    {userData.userName}
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    User name
                  </p>
                  <p className="mt-2 wrap-break-word text-sm font-semibold text-slate-800">
                    {userData.userName}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Email
                  </p>
                  <p className="mt-2 wrap-break-word text-sm font-semibold text-slate-800">
                    {userData.userEmail}
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-950/20 transition hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DashBoard
