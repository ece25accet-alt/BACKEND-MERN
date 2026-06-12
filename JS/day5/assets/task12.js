const combineCourses = (...courses) => [...courses.flat()];

console.log(
  combineCourses(["Java"],["Python"],["JavaScript"],["React"])
);
