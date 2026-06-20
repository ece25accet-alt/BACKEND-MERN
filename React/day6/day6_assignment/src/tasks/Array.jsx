import { useState } from "react";

const Array = () => {
  const ARR = ["React", "Angular", "Python"];
  const [array, setArray] = useState(ARR);

  
  const updateArr = (indexToUpdate, newValue) => {
    setArray(
      array.map((item, index) => (index === indexToUpdate ? newValue : item))
    );
  };

  return (
    <div className="min-h-screen bg-white text-black p-8 flex flex-col items-center">
      <div>
        <h1 className="text-center mt-5 text-2xl font-bold">Array</h1>
      </div>

      <div className="mt-5 w-full flex justify-center flex-wrap">
        
        
        <div className="bg-black text-white p-5 rounded-lg w-64 m-5 flex flex-col justify-between">
          <p className="text-xl font-semibold">{array[0]}</p>

          <button
            className="bg-amber-200 text-black p-2 rounded-lg hover:text-red-600 mt-5 font-medium transition-colors"
            onClick={() => updateArr(0, "React Native")}
          >
            Update React
          </button>
        </div>

        
        <div className="bg-black text-white p-5 rounded-lg w-64 m-5 flex flex-col justify-between">
          <p className="text-xl font-semibold">{array[1]}</p>

          <button
            className="bg-amber-200 text-black p-2 rounded-lg hover:text-red-600 mt-5 font-medium transition-colors"
            onClick={() => updateArr(1, "Angular Material")}
          >
            Update Angular
          </button>
        </div>

        
        <div className="bg-black text-white p-5 rounded-lg w-64 m-5 flex flex-col justify-between">
          <p className="text-xl font-semibold">{array[2]}</p>

          <button
            className="bg-amber-200 text-black p-2 rounded-lg hover:text-red-600 mt-5 font-medium transition-colors"
            onClick={() => updateArr(2, "Django")}
          >
            Update Python
          </button>
        </div>

      </div>

      <button
        className="bg-black text-white p-2 rounded-lg hover:bg-red-600 mt-5 font-medium transition-colors"
        onClick={() => setArray(ARR)}
      >
        RESET
      </button>
    </div>
  );
};

export default Array;