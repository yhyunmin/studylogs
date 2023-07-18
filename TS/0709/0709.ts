// map 타입 직접 만들기

interface Arr<T> {
  forEach(callback: (item: T, index: number) => void): void;
  map<S>(callback: (v: T, index: number) => S): S[];
  filter<S extends T>(callback: (v: T) => v is S): S[];
  // filter():void
  // filter(callback:(v:T)=>void):T[];
  // filter<S>(callback:(v:T)=>v is S):S[];
  // filter<S extends T >(callback:(v:T)=>v is S):S[];
}
const A: Arr<number> = [1, 2, 3];
const B = A.map((v) => v + 1); // 2,3,4
const C = A.map((v) => v.toString()); //['2','3','4'];
// const C = A.map((v) => v.toString()); //['2','3','4']; 처럼 return 이 다르게 나올 수 있다.
// 새로운 제네릭을 사용
const D = A.map((v) => v % 2 === 0);
// [false, true, false];

// filter 타입 직접 만들기
const E = A.filter((v): v is number => v === 1);

const AA: Arr<number | string> = [1, "2", 3, "4", 5];
const BB = AA.filter((v): v is string => typeof v === "string"); //['2','4'] string[]
const CC = AA.filter((v): v is number => typeof v === "number");
// 커스텀 타입가드 ( 형식 조건자) 로 만들어줘야한다.

const predicate = (v: string | number): v is number => typeof v === "number";
const DD = AA.filter(predicate);
// 바깥으로 뺄 수 있다.
// 타입스크립트는 가독성이 원래 안좋아서 별 상관 없다.
// 연습 reduce등등..
