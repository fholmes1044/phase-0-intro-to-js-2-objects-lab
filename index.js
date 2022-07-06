let employee ={
    name: "Bill",
    streetAddress: "123 Ways"
}

function updateEmployeeWithKeyAndValue (employee, key, value){
let newObj = {...employee};
newObj [key] = value;
return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey (employee, key){
    let deleteKey = {...employee};
    delete deleteKey[key];
    return deleteKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key];
return employee}