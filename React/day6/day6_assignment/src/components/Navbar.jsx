import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
   <>
    <div>

    <nav className="bg-black text-white p-5 text-xl font-bold flex justify-between items-center">

    <div>
    <Link to="/" className=" bg-amber-200 text-black p-2 rounded-lg hover:text-red-600">Home</Link>
    </div>

    <div className="flex gap-5 pr-15">
    <Link to="/Array" className=" bg-amber-200 text-black p-2 rounded-lg hover:text-red-600">Array</Link>
    <Link to="/ArrayofObjects" className=" bg-amber-200 text-black p-2 rounded-lg hover:text-red-600">Array of Objects</Link>
    <Link to="/Object" className=" bg-amber-200 text-black p-2 rounded-lg hover:text-red-600">Object</Link>
    </div>
    
   </nav>

   </div>
  </>
  )
}

export default Navbar



