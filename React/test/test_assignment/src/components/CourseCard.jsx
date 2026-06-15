
export default function CourseCard({ courseName, duration, fees }) {
  return (
    <div className="bg-white border border-slate-200 hover:border-indigo-400 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="inline-block px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded mb-3">
          Program
        </div>
        <h3 className="text-lg font-bold text-slate-800 leading-snug mb-1">{courseName}</h3>
        <p className="text-sm text-slate-500 flex items-center">
          <svg className="w-4 h-4 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {duration}
        </p>
      </div>
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400 uppercase">Tuition Fee</span>
        <span className="text-lg font-extrabold text-slate-900">{fees}</span>
      </div>
    </div>
  );
}