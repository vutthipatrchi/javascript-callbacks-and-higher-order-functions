const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary + 5000;
}

function forEach(array, operation) {
  // Start coding here
console.log (operation(array[0]));
console.log (operation(array[1]));
}

// Using `forEach` function here

//let newEmployeeSalaries = forEach(employeeSalaries,addSalary5000) ;
// arg1 employeeSalaries = [20005, 40000, 32000, 14500, 344000]
// arg2 addSalary5000 = function
//console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
const employeeSalaries2 = [1,2,3,4,5]
let newEmployeeSalaries2 = forEach(employeeSalaries2,addSalary5000)

console.log (newEmployeeSalaries2)
/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function? //  addSalary5000

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function? forEach

====================================
*/
