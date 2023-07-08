// forEach 타입 직접 만들기

[1, 2, 3].forEach((item) => {
  console.log(item);
});
[1, 2, 3].forEach((item) => {
  console.log(item);
  return "3";
});

const arr: Arr = [1, 2, 3];

arr.forEach((item) => {
  console.log(item);
});

arr.forEach((item) => {
  console.log(item);
  return "3";
});

// forEach 타입을 직점 만들어보기
// * 제네릭 없이 사용하기
interface Arr {
  forEach(callback: (item: number) => void): void;
}
// forEach는 다양한 환경에서 사용 할 수 있다.

const b: Arr = ["1", "2", "3"];
// 문자열 배열에선 Arr 이 string 이기 때문에 에러가 난다.
