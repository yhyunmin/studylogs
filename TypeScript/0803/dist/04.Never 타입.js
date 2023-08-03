"use strict";
// Never 타입 : TS 의 고유 타입
// 절대 반환되지 않아야 할때 Never를 사용 ( void 랑 다름)
function makeError(msg) {
    throw new Error(msg);
    return new Error(msg); // never에 return X 
}
