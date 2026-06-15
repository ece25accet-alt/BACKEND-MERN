
function Skills({ skillList }) {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Core Competencies</h3>
      <div className="flex flex-wrap gap-2">

        {skillList.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1.5 bg-white border border-slate-300 shadow-sm text-slate-700 text-sm font-medium rounded-lg
            hover:border-indigo-500 hover:text-indigo-600 transition-colors cursor-default">
            {skill}
          </span>

        ))}
      </div>
    </div>
  );
}

export default function Task4_UserSkills() {
  const codingSkills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Task 4 - User Skills</h2>
      <p className="text-slate-500 mb-6">Using array mapping expressions (`.map()`) inside template views.</p>

      <Skills skillList={codingSkills} />

    </div>
  );
}