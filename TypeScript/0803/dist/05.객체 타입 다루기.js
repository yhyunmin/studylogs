"use strict";
//Objects
function printName(person) {
    console.log(person.first + " " + person.last);
}
var coordinate;
coordinate = { x: 34, y: 23 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
randomCoordinate();
