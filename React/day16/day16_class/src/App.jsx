import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import TodoList from "./pages/TodoList"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import logo from "./assets/react.svg"

const App = () => {




  return (
    <>
    <div className="h-screen overflow-hidden">

    <div className="flex bg-black h-20 items-center justify-between">
      <img src={logo} className="h-20  w-20 mx-15 p-2 rounded-2xl"></img>
      <Navbar />
    </div>

    <main className="h-[calc(100vh-5rem)] overflow-hidden bg-slate-900">
      <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/Contact" element={<Contact />}></Route>
    <Route path="/ToDoList" element={<TodoList />}></Route>
    </Routes>
    </main>
    

    </div>
    </>
  )
}

export default App
