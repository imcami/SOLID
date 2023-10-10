//Principio de responsabilidad unica

function calculateSalary() {
  const salary = employee.hoursWorked * employee.hourlyRate;
}

function generateReport(employee, salary) {
  const report = `
    Name: ${employee.name}
    Age: ${employee.age}
    Hours Worked: ${employee.hoursWorked}
    Hourly Rate: ${employee.hourlyRate}
    Salary: ${salary}
    
    `;
  console.log(report);
}

const salary = calculateSalary(employee);

generateReport(employee, salary);
