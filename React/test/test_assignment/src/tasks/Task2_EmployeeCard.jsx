
function EmployeeCard({ employeeName, employeeId, department, salary, experience }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden max-w-sm">
      <div className="bg-slate-800 p-4 text-white">
        <h3 className="text-lg font-bold">{employeeName}</h3>
        <p className="text-xs text-slate-400">ID: {employeeId}</p>
      </div>
      <div className="p-6 space-y-3 text-sm">
        <div className="flex justify-between border-b pb-2"><span className="text-slate-500 font-medium">Department:</span> <span className="font-semibold text-slate-800">{department}</span></div>
        <div className="flex justify-between border-b pb-2"><span className="text-slate-500 font-medium">Experience:</span> <span className="font-semibold text-slate-800">{experience}</span></div>
        <div className="flex justify-between pt-1"><span className="text-slate-500 font-medium">Salary:</span> <span className="text-emerald-600 font-bold">${salary.toLocaleString()}</span></div>
      </div>
    </div>
  );
}

export default function Task2_EmployeeCard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Task 2 - Employee Card</h2>
      <p className="text-slate-500 mb-6">Displaying dynamic employee properties inside a card layout standard view.</p>
      <EmployeeCard employeeName="Sarah Connor" employeeId="EMP-800" department="Cyber Security" salary={95000} experience="6 Years" />
    </div>
  );
}