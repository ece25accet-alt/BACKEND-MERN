
// Bottom Layer Child
function Employee({ name, role, salary }) {
  return (
    <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl mt-3 shadow-inner">
      <h5 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Employee Node View</h5>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
        <p><span className="font-semibold text-slate-700">Name:</span> {name}</p>
        <p><span className="font-semibold text-slate-700">Role:</span> {role}</p>
        <p><span className="font-semibold text-slate-700">Salary:</span> <span className="text-indigo-600 font-semibold">${salary.toLocaleString()}</span></p>
      </div>
    </div>
  );
}

// Intermediate Middle Layer Component
function Company({ compName, empName, empRole, empSalary }) {
  return (
    <>
    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mt-4">
      <div className="flex items-center justify-between border-b pb-2 mb-2">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Company Node View</h4>
        <span className="text-sm font-bold text-slate-800">{compName}</span>
      </div>
      <Employee name={empName} role={empRole} salary={empSalary} />
    </div>
    </>
  );
}

// App Root Layer Context
export default function TaskBonus_CompanyDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Bonus Interview Task</h2>
      <p className="text-slate-500 mb-6">Demonstrates dynamic state flows drifting components over 3 structural nodes: App ➔ Company ➔ Employee.</p>
      
      <div className="border-2 border-dashed border-slate-200 p-4 rounded-2xl bg-white">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">App Level (Source)</h3>
        <Company 
          compName="Initech Corp" 
          empName="Peter Gibbons" 
          empRole="Software Engineer" 
          empSalary={85000} 
        />
      </div>
    </div>
  );
}