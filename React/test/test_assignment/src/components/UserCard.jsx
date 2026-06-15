

export default function UserCard({ userObj: { Name, Email, Phone, City } }) {
  return (
    <div className="max-w-sm bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-lg font-bold text-slate-900">{Name}</h3>
        <p className="text-xs text-slate-400 tracking-wide uppercase mt-0.5">{City}</p>
      </div>
      <div className="space-y-2 text-sm text-slate-600">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-medium w-12">Email:</span>
          <span className="text-slate-800 break-all">{Email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-medium w-12">Phone:</span>
          <span className="text-slate-800">{Phone}</span>
        </div>
      </div>
    </div>
  );
}