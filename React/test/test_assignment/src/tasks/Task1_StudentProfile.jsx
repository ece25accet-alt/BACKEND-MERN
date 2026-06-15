
function Student({ name, age, course, city }) {
  return (
      <div className="bg-indigo-50 rounded-xl border border-indigo-100 shadow-sm">
      <div className="flex items-center space-x-4 mb-4">
       
        <div>
          <h3 className="text-lg font-bold text-slate-800">{name}</h3>
          <p className="text-sm text-indigo-600 font-medium">{course}</p>
        </div>
      </div>
      <div className="border-t border-slate-100 pt-3 space-y-2 text-sm text-slate-600">
        <p><span className="font-semibold text-slate-500">Age:</span> {age} years old</p>
        <p><span className="font-semibold text-slate-500">City:</span> {city}</p>
      </div>
    </div>
  );
}

export default function Task1_StudentProfile() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Task 1 - Student Profile</h2>
      <p className="text-slate-500 mb-6">Passing classic string and number values into props structure.</p>
      <Student name="Alex Mercer" age={22} course="Full Stack Web Development" city="New York" />
    </div>
  );
}