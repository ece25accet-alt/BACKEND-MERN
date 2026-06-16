import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
          School Management
        </h1>
        <p className="text-slate-500 text-sm font-medium">
          React + Tailwind CSS + React Router
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl">
        {[
          { label: "Task 1", sub: "School Cards UI", path: "/task1" },
          { label: "Task 2", sub: "Courses Dashboard", path: "/task2" },
          { label: "Task 3", sub: "Management Dashboard", path: "/task3" },
        ].map((t) => (
          <button
            key={t.path}
            onClick={() => navigate(t.path)}
            className="bg-white border border-slate-200 text-slate-800 rounded-lg p-6 flex flex-col items-center gap-1.5 hover:border-indigo-500 hover:bg-amber-100 hover:shadow-sm transition-all"
          >
            <span className="text-2xl font-bold">{t.label}</span>
            <span className="text-xs text-slate-500 font-medium">{t.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}