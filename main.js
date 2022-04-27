"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var employeeList = [];
employeeList.push(new Employee_1.Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Employee_1.Employee("Tran Thi A", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
employeeList.push(new Employee_1.Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
