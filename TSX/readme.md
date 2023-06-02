# typescript + react


## What & Why ;
* 타입스크립트는 자바스크립트의 수퍼셋 언어 (확장)
* 자바스크립트는 동적 타입기능 이었고 ts에서는 정적타입 기능 추가
```js

function add(a,b) {
  return a+b;
}
add(2,5) // 7 합
add("2","5") // 25 연결

```
```ts
function add(a:number,b:number) {
  return a+b;
}
const result = add('2','5'); // '2'와 '5'는 에러가 뜸

```

## npx tsc
