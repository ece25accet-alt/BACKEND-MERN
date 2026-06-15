
import CourseCard from '../components/CourseCard';

export default function TaskInterview_Course() {
  const dynamicCourses = [
    { name: "MERN Stack Dev", time: "12 Weeks Intensive", cost: "$4,500" },
    { name: "Python Full Stack", time: "16 Weeks Bootcamp", cost: "$5,200" },
    { name: "Java Full Stack Enterprise", time: "20 Weeks Comprehensive", cost: "$6,000" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Interview Task: Reusable Architecture</h2>
      <p className="text-slate-500 mb-6">Rendering a single, reusable component 3 times with unique parameter sets.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dynamicCourses.map((course, idx) => (
          <CourseCard 
            key={idx}
            courseName={course.name}
            duration={course.time}
            fees={course.cost}
          />
        ))}
      </div>
    </div>
  );
}