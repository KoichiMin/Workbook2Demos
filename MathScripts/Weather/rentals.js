"use strict"

var passengers = 38;

var amountOfVans = Math.ceil(passengers/15);

var totalCostOfVans = amountOfVans * 250

var amountPerPerson = (totalCostOfVans/ passengers).toFixed(2)

console.log(amountPerPerson)

