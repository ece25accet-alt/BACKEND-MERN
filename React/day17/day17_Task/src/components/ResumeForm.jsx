import { useRef } from "react"

const ResumeForm = () => {
  const nameRef = useRef("")
  const mailRef = useRef("")
  const mobileRef = useRef("")
  const skillsRef = useRef("")

  const pnameRef = useRef("")
  const pmailRef = useRef("")
  const pmobileRef = useRef("")
  const pskillsRef = useRef("")

  const handleChange = () => {
    const name = nameRef.current.value
    const mail = mailRef.current.value
    const mobile = mobileRef.current.value
    const skills = skillsRef.current.value

    pnameRef.current.innerText = name || "Your Name"
    pmailRef.current.innerText = mail || "email@example.com"
    pmobileRef.current.innerText = mobile || "+91 98765 43210"
    pskillsRef.current.innerText = skills || "React, JavaScript, CSS"
  }

  const inputStyle =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"

  const labelStyle = "text-sm font-medium text-slate-700"

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Resume Builder
            </p>
            <h1 className="mt-2 text-2xl font-bold text-slate-950">
              Enter your details
            </h1>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className={labelStyle} htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                ref={nameRef}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Aarav Sharma"
              />
            </div>

            <div className="space-y-2">
              <label className={labelStyle} htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                ref={mailRef}
                onChange={handleChange}
                className={inputStyle}
                placeholder="aarav@example.com"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className={labelStyle} htmlFor="mobile">
                Mobile number
              </label>
              <input
                id="mobile"
                ref={mobileRef}
                onChange={handleChange}
                className={inputStyle}
                placeholder="+91 98765 43210"
                type="tel"
              />
            </div>

            <div className="space-y-2">
              <label className={labelStyle} htmlFor="skills">
                Skills
              </label>
              <input
                id="skills"
                ref={skillsRef}
                onChange={handleChange}
                className={inputStyle}
                placeholder="React, JavaScript, Tailwind CSS"
              />
            </div>
          </form>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <div className="border-b border-slate-200 pb-6">
            <p
              ref={pnameRef}
              className="min-h-9 text-3xl font-bold tracking-normal text-slate-950"
            >
              Your Name
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <p ref={pmailRef}>email@example.com</p>
              <p ref={pmobileRef}>+91 98765 43210</p>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-teal-700">
              Skills
            </h2>
            <p
              ref={pskillsRef}
              className="mt-3 min-h-16 rounded-md bg-slate-50 p-4 text-base leading-7 text-slate-700"
            >
              React, JavaScript, CSS
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ResumeForm
