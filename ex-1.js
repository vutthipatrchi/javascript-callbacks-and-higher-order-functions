// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) { // Callback Function
  return salary + 5000;
}

function forEach(array, operation) { // Higher Order Function
  let salary = [];
    for (let item of array) {
        result.push(operation(item));
    }

    return result;
}

// Using `forEach` function here

let newEmployeeSalaries;

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?

====================================
*/
