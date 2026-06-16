import { Link } from "react-router-dom";
import { schools } from "../data/schools";
import SchoolCardWithCourses from "../components/SchoolCardWithCourses";

export default function Task2() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link
            to="/"
            className="text-slate-600 hover:text-slate-900 font-semibold text-sm flex items-center gap-1 transition-colors"
          >
            &larr; Home
          </Link>
          <span className="text-slate-400">|</span>
          <h1 className="text-lg font-bold text-slate-950">
            Task 2 &mdash; Courses Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schools.map((school) => (
            <SchoolCardWithCourses
              key={school.id}
              name={school.name}
              courses={school.courses}
            />
          ))}
        </div>
      </div>
    </div>
  );
}