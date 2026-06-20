import { useState } from "react";

const ObjectProject = () => {
  const [array, setArray] = useState([
    { id: 101, student: "Alice", age: 19, name: "React", educationalstatus: "College" },
    { id: 102, student: "Bob", age: 20, name: "Angular", educationalstatus: "College" },
    { id: 103, student: "Charlie", age: 19, name: "Python", educationalstatus: "College" }
  ]);

  const updateObj = (idToUpdate, newValue) => {
    setArray(
      array.map((item) => 
        item.id === idToUpdate ? { ...item, name: newValue } : item
      )
    );
  };

  const handleYearAndStatusUpdate = () => {
    setArray(
      array.map((item) => {
        const newAge = item.age + 1;
        return {
          ...item,
          age: newAge,
          educationalstatus: newAge > 21 ? "Graduated" : "College"
        };
      })
    );
  };

  // An array mapping your specific student IDs to their target course edits
  const courseEdits = {
    101: "Angular",
    102: "C#",
    103: "Java"
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <div>
        <h1 className="text-center mt-5 text-2xl font-bold">Object</h1>
      </div>

      {/* Dynamic flex container rendering based on your array */}
      <div className="mt-5 w-full flex justify-center flex-wrap">
        {array.map((item) => (
          <div 
            key={item.id} 
            className="bg-white text-black p-5 rounded-lg w-64 m-5 flex flex-col justify-between"
          >
            <div>
              <p className="text-xl font-bold">{item.student}</p>
              <p className="text-lg mt-1">{item.name}</p>
              <p className="text-lg">{item.id}</p>
              <p className="text-lg">Age: {item.age}</p>
              <p className="text-lg">Educational Status: {item.educationalstatus}</p>
            </div>
            
            <button
              className="bg-amber-200 text-black p-2 rounded-lg hover:text-red-600 mt-5 font-medium transition-colors w-full"
              onClick={() => updateObj(item.id, courseEdits[item.id])}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      <div>
        <button 
          className="bg-amber-200 text-black p-2 rounded-lg hover:text-red-600 mt-5 font-medium transition-colors" 
          onClick={handleYearAndStatusUpdate}
        >
          year update
        </button>
      </div>
    </div>
  );
};

export default ObjectProject;