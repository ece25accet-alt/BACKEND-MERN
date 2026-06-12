const salaryCalculator = ()=>{

    let baseSalary = parseInt(prompt("Enter the mark of subject1"));

    let totalSalary = (baseSalary + 0.1*baseSalary + 0.2*baseSalary);

    return (`Total Mark: ${totalSalary}`);
}
console.log(salaryCalculator());

