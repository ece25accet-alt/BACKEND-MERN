
function GrandChild({ name, course }) {
  return (
    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mt-3">
      <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">Grandchild Component (Destination Layer)</h5>
      <div className="space-y-1 text-sm text-slate-700">
        <p><span className="font-medium text-slate-500">Student Name:</span> <strong className="text-slate-900">{name}</strong></p>
        <p><span className="font-medium text-slate-500">Active Course:</span> <strong className="text-slate-900">{course}</strong></p>
      </div>
    </div>
  );
}

function Child({ name, course }) {
  return (
    <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-3">
      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">Child Component (Pass-Through Layer)</h4>
      <GrandChild name={name} course={course} />
    </div>
  );
}

function Parent({ name, course }) {
  return (
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-3">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Parent Component (Pass-Through Layer)</h3>
      <Child name={name} course={course} />
    </div>
  );
}

export default function TaskPropsDrilling() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Props Drilling Challenge</h2>
      <p className="text-slate-500 mb-6">Passing props down structural paths: App ➔ Parent ➔ Child ➔ Grandchild without intermediate parsing mutations.</p>
      
      <div className="border-2 border-dashed border-slate-200 p-4 rounded-2xl bg-white">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">App Component Root (Data Origin)</h3>
        <Parent name="Sudhan" course="MERN" />
      </div>
    </div>
  );
}