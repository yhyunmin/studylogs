// forEach 타입 직접 만들기

[1, 2, 3].forEach((item) => {
  console.log(item);
});
[1, 2, 3].forEach((item) => {
  console.log(item);
  return "3";
});

const arr: Arr<number> = [1, 2, 3];

arr.forEach((item) => {
  console.log(item);
});

arr.forEach((item) => {
  console.log(item);
  return "3";
});

// forEach 타입을 직점 만들어보기
// * 제네릭 없이 사용하기
interface Arr<T> {
  forEach(callback: (item: T) => void): void;
}
// forEach 는 다양한 환경에서 사용 할 수 있다.

const b: Arr<string> = ["1", "2", "3"];
// 문자열 배열에선 Arr 이 string 이기 때문에 에러가 난다.
// item:number | string 은 옳긴 하지만, 조금만 복잡해져도 에러가난다
// ex ) toFixed(1);charAt(3);
// 또는으로 안될땐 "제네릭"을 사용한다
b.forEach((item) => {
  console.log(item);
  item.charAt(3); // unknown
});
b.forEach((item) => {
  console.log(item);
  return "3";
});
// forEach 에서 제네릭 사용시 charAt 에서 unknown 타입 에러가 뜬다.
// <T>에 위치는 forEach 뒤가 아닌, Arr 인것
// interfac 에 제네릭을 달아서, 타입에다가 제네릭을 쓰는것

// **
// 타입스크립트는 코드에 발전에 따라 수정해가는것 / 모든것을 예상하기는 어렵다. !
//

const c: Arr<string | number> = ["1", 2, "3"];
c.forEach((item) => {
  console.log(item);
  item.charAt(3);
});
c.forEach((item) => {
  console.log(item);
});
