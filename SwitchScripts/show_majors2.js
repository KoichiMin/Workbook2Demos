"use strict"


const studentName = "Bill" ;
let studentMajor = "";

let nameOfMajor;
let advisingLocation;


switch(studentMajor){
    case "BIOL":
        nameOfMajor = "Biology";
        advisingLocation = "Science Bldg, Room 310";
        break;
    case "CSCI":
        nameOfMajor = "Computer Science";
        advisingLocation = "Sheppard Hall, Room 314";
        break;
    case "ENG":
        nameOfMajor = "English";
        advisingLocation ="Kerr Hall, Room 201";
        break;    
    case "HIST":
        nameOfMajor = "History";
        advisingLocation = "Kerr Hall, Room 114";
        break;    
    case "MKT":
        nameOfMajor = "Marketing";
        advisingLocation = "Westly Hall, Room 310";
        break;    
    default:
        nameOfMajor = "unknown";
        advisingLocation = "unknown";
        break;    
}

console.log(`Student: ${studentName}, Major: ${nameOfMajor}, Advising Location: ${advisingLocation}`)