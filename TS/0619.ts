// lib.es5.d.ts
// forEach,map 제네릭 분석

interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
}
// @ts-ignore
const a: Array<number> = [1, 2, 3];
[1, 2, 3].forEach((value) => console.log(value));
["1", "2", "3"].forEach((value) => console.log(value));
// value 들이 추론이 잘되는 모습
// 어떤 원리 ?
[true, false, true].forEach((value) => console.log(value));
// 제네릭 덕분 ARRAY<T>

// 제네릭
// 제네릭은 타입을 함수의 파라미터처럼 사용하는것
// 타입선언시 타입을 결정 하는게 아닌, 생성 시점에 타입을 명시하여, 다양한 타입을 사용할 수 있게 하는것
// 타입스크립트가 추론하게 해야함. 하나라도 타입이 정해졋으면 나머지도 똑같이 추론함.

function add<T>(x: T, y: T): T {
  return x;
}
add<number>(1, 2);
// 이경우엔 타입스크립트가 멍청해서 추론을 제대로 하지않을 때 명시해준다.
add("1", "2");
add(true, false);
