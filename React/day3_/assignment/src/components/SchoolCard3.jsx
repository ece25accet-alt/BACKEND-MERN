const sportsBadgeColors = [
  "bg-slate-100 text-slate-700 border border-slate-205",
  "bg-sky-50 text-sky-750 border border-sky-200",
  "bg-violet-50 text-violet-750 border border-violet-200",
];
export default function SchoolCard3({ name, principal, city, sports }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 hover:border-slate-350 transition-colors flex flex-col gap-3">
      <div>
        <h2 className="text-lg font-bold text-slate-900">{name}</h2>
        <p className="text-xs text-slate-500">{city}</p>
      </div>
      <p className="text-sm text-slate-700">
        <span className="text-slate-500 font-medium">Principal:</span> {principal}
      </p>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
          Sports Available
        </p>
        <div className="flex flex-wrap gap-1.5">
          {sports.map((sport, idx) => (
            <span
              key={sport}
              className={`px-2.5 py-0.5 rounded text-xs font-medium ${sportsBadgeColors[idx % sportsBadgeColors.length]}`}
            >
              {sport}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}