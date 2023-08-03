"use strict";
var addNumbers = function (x, y) {
    return x + y;
};
// 애너테이션 작성하는이유 : 확실히 하려고 
var square = function (num) {
    num * num;
};
square(2); // void : 리턴이없으면 void 가 됨
// 리턴값을 작성하면 return을 적어야함. 
// 반환 값의 타입이 복수일 경우,
function random(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
random(2);
random(0.2);
