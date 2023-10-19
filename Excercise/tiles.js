"use strict"

var roomLength = 12;
var roomWidth = 15;

var roomSquare = roomLength * roomWidth;

var boxesOfTiles = roomSquare/ 12

var addTenPercent = Math.ceil(boxesOfTiles + (boxesOfTiles * 0.1))


console.log(addTenPercent)
