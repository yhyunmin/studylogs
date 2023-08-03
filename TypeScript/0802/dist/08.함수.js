"use strict";
exports.__esModule = true;
// 
function square(num) {
    num.toUpperCase(); // num이 error 라 에러를 못잡는 모습
    return num * num;
}
square('5');
square(true); // 에러가 안나는 모습
function greet(person) {
    console.log("Hello, " + person);
}
