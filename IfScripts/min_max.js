"use strict"

// const a = 3;
// const b = 5;
// const c = 8;

const a = 32;
const b = 13;
const c = 98;



let min ;
let max ;


// finding the lower number then assigning it to min variable
if(a < b && a< c){
    min = a
}
else if(b < a && b < c){
    min = b
} else if(c < a && c < b){
    min = c
}


// finding the highest number then assigning it to max variable
if(a > b && a > c){
    max = a
}
else if(b > a && b > c){
    max = b
}
else if(c > a && c > b){
    max = c
}

console.log(min, max)