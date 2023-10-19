"use strict"

var annualRateOfReturn  = 6.2;

var yearsToDouble = (72/annualRateOfReturn).toFixed(1);

var initialInvestment = 1000.00;

var DoubledInvestment = initialInvestment * 2;


console.log("At a " + annualRateOfReturn + " interest rate, your savings account will be worth" + DoubledInvestment.toFixed(2) + " in " + yearsToDouble + " years");