import { Link } from "react-router-dom";

function Navbar() {

  const tasks = [
    "Class Component",
    "Lifecycle",
    "useState",
    "Counter",
    "Object State",
    "Array",
    "Array Object"
  ];

  const home = "Home";


  return (
    <>
    <div>
    <nav className="bg-gray-900 p-5 flex flex-row items-center justify-between gap-5 flex-wrap">

      <div >
        <Link
          to="/"
          className="text-white text-xl font-bold bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {home}
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center gap-5 flex-wrap">

        {
          tasks.map((task,index)=>(

            <Link
              key={index}
              to={`/task${index+1}`}
              className="
              bg-blue-500 
              text-white 
              px-5 
              py-2 
              rounded-lg
              hover:bg-blue-700
              transition
              "
            >

              {task}

            </Link>

          ))
        }

      </div>

    </nav>
    </div>
    </>
  );
}


export default Navbar;