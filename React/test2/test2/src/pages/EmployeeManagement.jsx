import { useState, useEffect } from "react";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ empName: "", empId: "", dept: "", salary: "" });

  useEffect(() => {
    const saved = localStorage.getItem("employees");
    if (saved) setEmployees(JSON.parse(saved));
  }, []);

  const handleSubmit = (e) => {
    
    if (!formData.empName || !formData.empId || !formData.dept || !formData.salary) return;
    const updated = [...employees, formData];

    setEmployees(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
    setFormData({ empName: "", empId: "", dept: "", salary: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Employee Management System</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Employee Name" value={formData.empName} onChange={(e) => setFormData({...formData, empName: e.target.value})} className="border p-2 rounded w-full" />
          <input type="text" placeholder="Employee ID" value={formData.empId} onChange={(e) => setFormData({...formData, empId: e.target.value})} className="border p-2 rounded w-full" />
          <input type="text" placeholder="Department" value={formData.dept} onChange={(e) => setFormData({...formData, dept: e.target.value})} className="border p-2 rounded w-full" />
          <input type="number" placeholder="Salary" value={formData.salary} onChange={(e) => setFormData({...formData, salary: e.target.value})} className="border p-2 rounded w-full" />
        </div>
        <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">Add Employee</button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e, i) => (
              <tr key={i+1} className="hover:bg-gray-50">
                <td className="border p-2">{e.empId}</td>
                <td className="border p-2">{e.empName}</td>
                <td className="border p-2">{e.dept}</td>
                <td className="border p-2">${e.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeManagement