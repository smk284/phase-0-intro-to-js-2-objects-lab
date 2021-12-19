// Write your solution in this file!
const employee={
    name:'',
    streetAddress:'',
}
//1
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee,[key]:value};
    return newEmployee;
}
//2
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]= value
    return employee;
}
//3
function deleteFromEmployeeByKey (employee,key){
    const delEmployee = Object.assign({}, employee)
    delete delEmployee[key]
    return delEmployee;
}
//4
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    delete employee[key];
    return employee;
}