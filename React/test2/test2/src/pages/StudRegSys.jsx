import { useState, useEffect } from "react";

const StudRegSys = () => {
const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: "", age: "", course: "", city: "" });

  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) setStudents(JSON.parse(saved));
  }, []);

  const handleSubmit = (e) => {

    if (!formData.name || !formData.age || !formData.course || !formData.city) return;

    const updated = [...students, { ...formData}];
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
    setFormData({ name: "", age: "", course: "", city: "" });

  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Student Registration System</h2>
     
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="border p-2 rounded w-full" />
          <input type="number" placeholder="Age" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} className="border p-2 rounded w-full" />
          <input type="text" placeholder="Course" value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} className="border p-2 rounded w-full" />
          <input type="text" placeholder="City" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="border p-2 rounded w-full" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register Student</button>
     
      </form>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Registered Students</h3>

        <ul className="divide-y divide-gray-200">
          {students.map((e,i) => (
            <li key={i+1} className="py-2 text-gray-700">
              <span className="font-medium">{e.name}</span> ({e.age} yrs) - {e.course} in {e.city}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default StudRegSys
