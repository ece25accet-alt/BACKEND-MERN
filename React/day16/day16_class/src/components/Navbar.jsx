import { Link } from "react-router-dom"
import TodoList from "../pages/TodoList"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"

const Navbar = () => {
  const linkClass =
    "rounded-xl ext-base font-medium transition-all duration-300  hover:text-white hover:scale-110 "

  return (
    <div className="mx-15 bg-emerald-500 h-15 w-100 flex items-center justify-evenly rounded-4xl text-xl text-black"  >
      <nav className="flex gap-5">
        <Link className={linkClass} to="/">Home</Link>
        <Link className={linkClass} to="/About">About</Link>
        <Link className={linkClass} to="/Contact">Contact</Link>
        <Link className={linkClass} to="/ToDoList">To-Do List</Link>
      </nav>
    </div>
  )
}

export default Navbar
