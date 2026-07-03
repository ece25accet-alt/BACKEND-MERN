import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import StudRegSys from "./pages/StudRegSys"
import EmployeeManagement from "./pages/EmployeeManagement"
import ProductManagement from "./pages/ProductManagement"

const App = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    

    <Routes>
      <Route path="/StudRegSys" element={<StudRegSys />}> </Route>
      <Route path="/EmployeeManagement" element={<EmployeeManagement />}> </Route>
      <Route path="/ProductManagement" element={<ProductManagement />}></Route>
    </Routes>
    
    </>
  )
}

export default App
