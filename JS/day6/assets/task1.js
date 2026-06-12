const getStudent = () =>
  new Promise((resolve) => {
    setTimeout(() => {resolve("Sudhan");}, 2000);
  });

getStudent()
  .then((student) => {
    console.log(student);
  });