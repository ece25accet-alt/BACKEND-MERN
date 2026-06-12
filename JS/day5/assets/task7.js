const employee = {
  id: 101,
  name: "Dravid"
};

const updatedEmployee = {
  ...employee,
  department: "IT",
  experience: 5,
  salary: 60000
};

console.log("Original Employee:", employee);
console.log("Updated Employee:", updatedEmployee);