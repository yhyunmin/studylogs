const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

// enum 은 하나의 변수를 그룹으로 묶을 때 사용  ( 객체와 취향 차이 )
// 타입스크립트의 enum 과 자바스크립트의 객체는 컴파일후 남겨져있는가 아닌가 차이

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// "as const " as const 를 붙이면 ts 에서 추론을 정확하게 해준다 / 상수 & readonly 로 객체값을 고정해준다.

const a = EDirection.Up;
const b = EDirection.Down;

// 이넘은 직접 타입으로 사용할 수 있다.

function walk(dir: EDirection) {}
// dir : 은 Edirection 중 하나여야한다.

walk(EDirection.Down);
walk(EDirection.Up);

// enum 이 낯설경우 객체로 타입을 설정 할 수 있다.
// 다만 타입 정의가 어려워짐

type Direction = (typeof ODirection)[keyof typeof ODirection];
function run(dir: Direction) {}

// 객체를 타입 설정은 복잡하니 enum 활용을 하는게 좋음

const obj = { a: "123", b: "hello", c: "world" } as const;
// keyof : 객체중 원하는 값만 가져올 때
type Key = keyof typeof obj;
// typeof : 객체를 타입으로 사용 할 때
// 즉 Key 값 은 키값만 가져옴.
type Key2 = (typeof obj)[keyof typeof obj];
// Key2 값은 벨류를 가져옴

// 객체를 상수로 사용할 떄는 꼭 "as const " 입력하기
