"use strict";
var colors = ['red', 'blue', 'orange'];
colors.map(function (color) {
    // color 가 자동으로 string 으로 추론 된 모습(애너테이션 필요 X)
    if (color.length < 3) {
        return color.toFixed(2);
    }
    return color.toLowerCase();
});
function blah(color) {
}
