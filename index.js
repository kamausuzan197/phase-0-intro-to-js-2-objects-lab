const employee = {
    name: 'Johnny Appleseed',
    streetAddress: '123 Main Lane',
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

const newUpdateEmployeeWithKeyAndValue = updateEmployeeWithKeyAndValue(employee,'name','Johanna Appleseed');


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee['name'] = 'Sam';
    employee['streetAddress'] = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete employee.name;
    return employee;
}