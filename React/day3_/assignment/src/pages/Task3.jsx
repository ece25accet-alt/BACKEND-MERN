import { Link } from "react-router-dom";
import Header from "../components/Header";
import SchoolStats from "../components/SchoolStats";
import SchoolList from "../components/SchoolList";
import Footer from "../components/Footer";

export default function Task3() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link
            to="/"
            className="text-slate-650 hover:text-slate-950 font-semibold text-sm flex items-center gap-1 transition-colors"
          >
            &larr; Home
          </Link>
          <span className="text-slate-400">|</span>
          <span className="text-sm text-slate-500 font-medium">
            Task 3 &mdash; Management Dashboard
          </span>
        </div>

        <Header />
        <SchoolStats />
        <SchoolList />
        <Footer />
      </div>
    </div>
  );
}