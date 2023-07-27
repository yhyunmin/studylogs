//infer 심화 예제

const p1 = Promise.resolve(1)
.then((a) => a + 1)
.then((a) => a + 1)
.then((a) => a.toString());
const p2 = Promise.resolve(2);
const p3 = new Promise((res, rej) => {
  setTimeout(res, 1000);
});

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result); // ["3",2,undefined"]
});

// 프로미스는 Promise<결과값>타입으로 표시합니다.

// p1 은 then 이 연속 3번후 toString
// Promise.all 에 넣었을경우, 전부다 실행후 최종결과값을 result 로 리턴함.

// result 는 미리 p1 의 타입을 추론하고있음.
//   console.log(result); // ["3",2,undefined"]

all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;
// p1,p2,p3 = T  , unknown[]과 [] (readonly)
// return 값부분 [P in keyof T]
// T = [p1,p2,p3]
// keyof T = '0'|'1'|'2'|'length'
// T 를 개겣로 표현하면
// { '0':p1,
//   '1':p2,
//   '2':p3,
// }

const arr = [1,2,3] as const;
type Arr = keyof typeof arr;
const key: Arr = 1;
