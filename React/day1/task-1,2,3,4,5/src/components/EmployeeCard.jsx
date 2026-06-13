function EmployeeCard() {
  return (
    <div className="w-80 p-5 bg-violet-100 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-700 mb-3 text-center">Employee Card</h1>
      <ul className="space-y-2">
      <li><b>Employee Name:</b> MANI</li>
      <li><b>Employee ID:</b> 4304</li>
      <li><b>Department:</b> IT</li>
      <li><b>Salary:</b> 50000</li>
      </ul>
    </div>
  );
}

export default EmployeeCard;