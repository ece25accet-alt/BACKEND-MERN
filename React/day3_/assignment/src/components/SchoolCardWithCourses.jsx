const courseBadgeColors = [
  "bg-slate-100 text-slate-700 border border-slate-200",
  "bg-blue-50 text-blue-750 border border-blue-200",
  "bg-indigo-50 text-indigo-755 border border-indigo-200",
  "bg-emerald-50 text-emerald-755 border border-emerald-200",
];
export default function SchoolCardWithCourses({ name, courses }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 hover:border-slate-350 transition-colors">
      <h2 className="text-lg font-bold text-slate-900 mb-3">{name}</h2>
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
        Courses Offered
      </p>
      <div className="flex flex-wrap gap-1.5">
        {courses.map((course, idx) => (
          <span
            key={course}
            className={`px-2.5 py-0.5 rounded text-xs font-medium ${courseBadgeColors[idx % courseBadgeColors.length]}`}
          >
            {course}
          </span>
        ))}
      </div>
    </div>
  );
}