// PromiseAll 에 return 타입인 Awaited

type Awaited<T> = T extends null | undefined
  ? T
  : T extends object & { then(onfulfilled: infer F, ...args: infer _): any }
  ? F extends (value: infer V, ...args: infer _) => any
    ? Awaited<V>
    : never
  : T;

// T = [p1,p2,p3]
// T extends null | undefined ? T = T는 배열이기때문에 null 과 undefined 일 수 가 없음
// T extends object & { then(onfulfilled: infer F):any}?
// 컨디셔널 타입(조건부타입)
