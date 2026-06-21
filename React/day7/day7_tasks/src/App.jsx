import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import TaskList from "./pages/TaskList"

const App = () => {
  return (
   <>
      <Navbar />

      <div>
      <Routes>   

        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/TaskList" element={<TaskList />}></Route>

      </Routes>
      </div>
    </>
  )
}
export default App
