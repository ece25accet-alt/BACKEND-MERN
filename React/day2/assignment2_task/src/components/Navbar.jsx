import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold border-2 bg-blue-100 border-blue-600 pb-1 mx-4 transition-all rounded-xl"
      : "text-gray-600 hover:text-blue-600 font-medium mx-4 transition-all";

  return (
    <nav className="flex items-center justify-between p-4 bg-white ">

      <div className="text-xl font-black text-gray-800 tracking-wider">
        DEV-APP
      </div>

      
      <div className="hidden md:flex items-center">
        <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
        <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
        <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
      </div>

      
      <div className="flex gap-3">
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm">
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;