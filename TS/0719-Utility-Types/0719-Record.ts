// Record : 객체를 표현하는 한가지 방법

interface Obj {
  [key: string]: number;
}
const a: Obj = {
  a: 3,
  b: 5,
  c: 7,
};
const b: Record<string, number> = {
  a: 3,
  b: 5,
  c: 7,
};
// 위 Obj 와 Record는 동일 하다.

type customRecord<T extends keyof any, S> = {
  [key in T]: S;
};
