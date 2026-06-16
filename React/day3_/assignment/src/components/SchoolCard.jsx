export default function SchoolCard({ name, city, principal, students, teachers }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 hover:border-slate-350 transition-colors">
      <div className="mb-3">
        <h2 className="text-lg font-bold text-slate-900">{name}</h2>
        <p className="text-xs text-slate-500">{city}</p>
      </div>
      <div className="pt-3 border-t border-slate-100 space-y-1.5 text-sm text-slate-700">
        <p>
          <span className="text-slate-500 font-medium">Principal:</span> {principal}
        </p>
        <p>
          <span className="text-slate-500 font-medium">Students:</span> {students.toLocaleString()}
        </p>
        <p>
          <span className="text-slate-500 font-medium">Teachers:</span> {teachers}
        </p>
      </div>
    </div>
  );
}
