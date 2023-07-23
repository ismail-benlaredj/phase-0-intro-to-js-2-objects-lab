// Write your solution in this file!
const employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        [key]: value,
        ...employee,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    let newEmp = { ...employee };
    delete newEmp[key];
    return newEmp;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}