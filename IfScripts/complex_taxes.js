"use strict"

var payRate = 10.00;
var hoursWorked = 45;



var grossPay;


if(hoursWorked > 40){
    // gross of just overtime
    let overtimePay = (hoursWorked - 40) * (payRate * 1.5)
    
    // total grossPay
    grossPay = overtimePay + (40 * payRate)
}else{
    grossPay = hoursWorked * payRate
}


//////////////////////////////////////////////////


// grossPay per year is grossPay times 52 weeks
var grossPayPerYear = grossPay * 52
console.log(`Your gross amount for the year is ${grossPayPerYear}`)


// taxes are different for single or joint 
var singleOrJoint = "single"
var federalTaxes;



if(singleOrJoint === "single"){
    // Single filter

    if(grossPayPerYear < 12000){
        federalTaxes = grossPayPerYear * 0.05
    } 
    else if(grossPayPerYear >= 12000 && grossPayPerYear < 25000){
        federalTaxes = grossPayPerYear * 0.10
    } 
    else if(grossPayPerYear >= 25000 && grossPayPerYear < 75000){
        federalTaxes = grossPayPerYear * 0.10
    } 
    else if(grossPayPerYear >= 75000){
        federalTaxes = grossPayPerYear * 0.20
    }

}else{
    // Joint filter

    if(grossPayPerYear < 12000){
        federalTaxes = 0
    } 
    else if(grossPayPerYear >= 12000 && grossPayPerYear < 25000){
        federalTaxes = grossPayPerYear * 0.06
    } 
    else if(grossPayPerYear >= 25000 && grossPayPerYear < 75000){
        federalTaxes = grossPayPerYear * 0.11
    } 
    else if(grossPayPerYear >= 75000){
        federalTaxes = grossPayPerYear * 0.20
    }
    
}



console.log(`Your federal taxes for this year is ${federalTaxes.toFixed(2)}`)

///////////////////////////////////////////////

// Divide the yearly federal taxes by 52 weeks
var taxWithholdingPerWeek = federalTaxes / 52

// Deduct it from the weekly grossPay
var weeklyPay = grossPay - taxWithholdingPerWeek

console.log(`Your net pay for the week is ${weeklyPay}`)