"use strict"

// var year = 1900;
// var year = 1950;
// var year = 1999;
// var year = 2000;
// var year = 2001;
var year = 2012;


let isThisALeapYear ;


// leap year has to be divisible by 4 to be a leap year
// cannot be a leap year if it is divisible by 100 but not 400

if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            isThisALeapYear = " a leap year "
        } else{
            isThisALeapYear = "not a leap year "
        }
    }else{
        isThisALeapYear = " a leap year "      
    }
} else{
    isThisALeapYear = "not a leap year "
}

console.log(`the year ${year} is ${isThisALeapYear}`)
