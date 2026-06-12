const totalMarks = (...marks) =>

    marks.reduce((sum, mark) => sum + mark, 0);

let marks = prompt("Enter marks with | between:");
let markArray = marks.split("|").map(Number);

console.log("Total Marks = " + totalMarks(...markArray));
