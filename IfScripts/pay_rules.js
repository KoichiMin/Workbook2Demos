"use strict"

// var payRate = 12.50;
// var hoursWorked = 20;

// var payRate = 25;
// var hoursWorked = 40;

// var payRate = 17.30;
// var hoursWorked = 45;

var payRate = 17.30;
var hoursWorked = 100;



var grossPay;


if(hoursWorked > 40){
    // gross of just overtime
    let overtimePay = (hoursWorked - 40) * (payRate * 1.5)
    
    // total grossPay
    grossPay = overtimePay + (40 * payRate)
}else{
    grossPay = hoursWorked * payRate
}

console.log(grossPay)