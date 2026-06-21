import { Link } from "react-router-dom"
import image from "../assets/React.png"


const navLinks =[{path:"/",label:"Home"},
                {path:"/About",label:"About"},
                {path:"/TaskList",label:"Task_List"},
                {path:"/Contact",label:"Contact"}];


const Navbar = () => {
  return (
    <>
    <div className="bg-black flex flex-row justify-between items-center h-30">

    <div className="flex items-center pl-5 gap-3">
        <img src={image} className="h-15 w-15" />
        <h1 className="text-white text-3xl font-bold">React Projects</h1>
    </div>
    

    <div className="flex flex-row gap-5 pr-10">
    {navLinks.map((link) => (
    <Link 
      key={link.path} 
      to={link.path}
      className="bg-red-400 text-white px-5 py-4 rounded hover:bg-red-500"
    >
      {link.label}
    </Link>
  ))}
</div>
    </div>
    
    </>
  );
};

export default Navbar
