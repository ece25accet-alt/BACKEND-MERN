import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './tasks/Home'
import Array from './tasks/Array'
import ArrayofObjects from './tasks/ArrayofObjects'
import Object from './tasks/Object'


const App = () => {
  return (
    <>
       <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Array" element={<Array />} />
        <Route path="/ArrayofObjects" element={<ArrayofObjects />} />
        <Route path="/Object" element={<Object />} />
      </Routes>
    </>
  )
}

export default App
