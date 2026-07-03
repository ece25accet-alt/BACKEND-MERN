import { Link } from "react-router-dom"
import StudRegSys from "../pages/StudRegSys"
import EmployeeManagement from "../pages/EmployeeManagement"
import ProductManagement from "../pages/ProductManagement"

const Navbar = () => {
  return (
    <>
    <div>
        <nav className="bg-amber-200 h-15 flex justify-between items-center">
        <Link className="bg-red-600 rounded-xl p-3" to="/StudRegSys">Student Register</Link>
        <Link className="bg-red-600 rounded-xl p-3" to="/EmployeeManagement">Employee Management</Link>
        <Link className="bg-red-600 rounded-xl p-3" to="/ProductManagement">Product Management</Link>
        </nav>
    </div>

    </>
  )
}

export default Navbar
