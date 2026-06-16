import { schools } from "../data/schools";
export default function SchoolStats() {
  const totalSchools = schools.length;
  const totalStudents = schools.reduce((acc, s) => acc + s.students, 0);
  const totalTeachers = schools.reduce((acc, s) => acc + s.teachers, 0);
  const stats = [
    { label: "Total Schools", value: totalSchools },
    { label: "Total Students", value: totalStudents.toLocaleString() },
    { label: "Total Teachers", value: totalTeachers.toLocaleString() },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-white rounded-lg border border-slate-200 p-4 text-center">
          <p className="text-2xl font-bold text-slate-900">{s.value}</p>
          <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}