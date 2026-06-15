import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import Task1_StudentProfile from './tasks/Task1_StudentProfile';
import Task2_EmployeeCard from './tasks/Task2_EmployeeCard';
import Task3_ProductDetails from './tasks/Task3_ProductDetails';
import Task4_UserSkills from './tasks/Task4_UserSkills';
import Task5_UserInformationCard from './tasks/Task5_UserInformationCard';
import TaskBonus_CompanyDashboard from './tasks/TaskBonus_CompanyDashboard';
import TaskPropsDrilling from './tasks/TaskPropsDrilling';
import TaskInterview_Course from './tasks/TaskInterview_Course';

function App() {
  const taskLinks = [
    { path: '/task1', label: 'Task 1' },
    { path: '/task2', label: 'Task 2' },
    { path: '/task3', label: 'Task 3' },
    { path: '/task4', label: 'Task 4' },
    { path: '/task5', label: 'Task 5' },
    { path: '/bonus', label: 'Bonus Task' },
    { path: '/props-drilling', label: 'Props Drilling Task' },
    { path: '/interview', label: 'Interview Task' },
  ];

  return (
    <>
    <div className="p-6 max-w-5xl mx-auto">
      
      <header className="mb-6 pb-4">
        <h1 className="text-2xl font-bold text-slate-800">React Assignments</h1>
        <p className="text-sm text-slate-500">Click a button below to switch tasks.</p>
      </header>

      
      <nav className="flex flex-wrap gap-2 mb-8">
        {taskLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-all shadow-sm border ${
                isActive
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

    
      <main className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <Routes>
          <Route path="/" element={<Navigate to="/task1" replace />} />
          <Route path="/task1" element={<Task1_StudentProfile />} />
          <Route path="/task2" element={<Task2_EmployeeCard />} />
          <Route path="/task3" element={<Task3_ProductDetails />} />
          <Route path="/task4" element={<Task4_UserSkills />} />
          <Route path="/task5" element={<Task5_UserInformationCard />} />
          <Route path="/bonus" element={<TaskBonus_CompanyDashboard />} />
          <Route path="/props-drilling" element={<TaskPropsDrilling />} />
          <Route path="/interview" element={<TaskInterview_Course />} />
        </Routes>
      </main>
    </div>
    </>
  );
}

export default App;