import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import StudRegSys from "./pages/StudRegSys"

const App = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    

    <Routes>
      <Route path="/StudRegSys" element={<StudRegSys />}> </Route>
    </Routes>
    
    </>
  )
}

export default App
