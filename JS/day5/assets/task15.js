const addEmployee = (employees,id,name,role = "General",salary = 10000) => [...employees,
  {
    id,
    name,
    role,
    salary
  }
];

const updateEmployee = (employees, id, updates) =>
  employees.map(emp =>
    emp.id === id
      ? { ...emp, ...updates }
      : emp
  );


const displayEmployee = employee =>
`ID: ${employee.id}
Name: ${employee.name}
Role: ${employee.role ?? "Not Assigned"}
Salary: ${employee.salary}`;


const calculateSalary = employee =>
  employee?.salary ?? 0;


let employees = [];

employees = addEmployee(
  employees,
  1,
  "Rahul",
  "Junior Developer",
  500000
);

employees = addEmployee(
  employees,
  2,
  "Priya",
  "Junior Tester",
  400000
);

employees.forEach(emp =>
  console.log(displayEmployee(emp))
);


employees = updateEmployee(
  employees,
  1,
  {
    salary: 600000,
    role: "Senior Developer"
  }
);

employees =updateEmployee(
    employees,
    2,
    {
        salary: 450000,
        role: "Senior Tester"
    }

)

employees.forEach(emp =>
  console.log(displayEmployee(emp))
);

employees.forEach(emp =>
  console.log(
    `${emp.name} Salary per month: ${calculateSalary(emp)/12}`
  )
);