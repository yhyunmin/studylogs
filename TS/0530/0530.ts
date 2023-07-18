// TODO)
//  union |, intersection &

type A = { a: string };
const aa: A = { a: "hello" };

interface B {
  a: string;
}

const bbb: B = { a: "hello" };

// interface 와 type 의 선택
// 간단하게는 type 을 선택
// 복잡한 기능들이 있어, 객체 지향을 원한다면 interface를 선택한다

//

function add(x: string | number, y: string | number): string | number {
  // x,y 가 string 일 수 있어서 + 가 에러가 뜸
  return x + y;
}

// or용법이라
// 아래와같이 마음대로 넣을 수 있다,
add(1, 2);
add("1", "2");
add(1, "2");
// 하지만 타입스크립트의 추론이 제대로 되질 않음.

// ex )
const result: string | number = add(1, 2);
// 값은 add의 값인 number이지만
// result 는 string 으로 착각 할 수 있다 나중에 문제가 생길 수 있음

type AA = string & number;
// & and string이면서 number 인 AA = 그런건 없다.
// 하지만 &는 객체에서는 사용할 수 있음

type CC = { hello: "world" } & { zero: "cho" };
const cc: CC = { hello: "world", zero: "cho" };

// 객체에서는 &와 | 둘다 사용 가능 하지만 그의미는 정반대임
type DD = { hello: "world" } | { zero: "cho" };
const dd: CC = { hello: "world", zero: "cho" };
// | 는 또는 이기때문에 한가지 속성만 있어도 사용이 가능 하다

// 즉,
// &(intersection) 모든 속성이 있어야함
// |(union) 한가지 속성만 있어도 됨

//TODO) 타입 애일리어스와 인터페이스의 상속(extends)

type Animal = { breath: true };
type Mammal = Animal & { breed: true };
type Human = Mammal & { think: true };
// 상속의 개념이라 생각하면 조금 편하다 (확장의 개념)

const me: Human = { breath: true, breed: true, think: true };
// and 의 느낌보다 상속의 느낌이라고 생각하면 편리하다 ( 하나라도 빠지면 안됨 )

interface AAA {
  breath: true;
}
interface BBB extends AAA {
  breed: true;
}
const CCC: BBB = { breath: true, breed: true };

// 타입과 인터페이스의 상속 사용 방법
// 인터페이스와 타입간의 차이가 있지만 골라서 사용하면 된다.

// but, 인터페이스가 type을 상속하기도 한다
interface C extends Human {}
// 표현성의 차이가 더 중요하다 (기능의 차이보단)

interface AAA {
  talk: () => void;
}
interface AAA {
  eat: () => void;
}
interface AAA {
  shit: () => void;
}

const aaa: AAA = {
  talk: () => {},
  eat: () => {},
  shit: () => {},
  breath: true,
};
// interface 의 특징 중 하나로, 선언 할 때 마다 합쳐진다
// 이런한 특징으로 남의 라이브러리를 수정하고 추가할 수 있다.

// 인터페이스와 타입의 네이밍 룰
// interface I
// type T
// Enum E
// 국룰은 앞글자 대문자로 명시하지않음. 제네릭에만 사용함

// TODO) 타입을 집합으로 생각하자

type Wide = string | number;
type Narrow = number;

type And = string & number;

// 좁은타입은 넓은타입으로 대입이 가능하다.

type x = { name: string };
type y = { age: number };
type z = { name: string; age: number };

// 객체에서는 상세할수록(길수록) 좁은 타입이다.

type XY = x | y;
type Z = x & y;

const z: Z = { name: "smurf", age: 1 };
const xy: XY = z;

// 좁은타입을 넓은타입에 넣는건되지만 반대는 안된다.
// 잉여속성이란것도 있다. 객체리터럴을 바로넣으면 안된다 헷갈릴 수 있음.

//todo) void 의 두가지 사용법

function voidd(): void {
  return;
  // return undefinend// return 값이 없어야함
}

interface Humann {
  talk: () => void;
}
const human2: Humann = {
  talk: () => {
    return "aaa";
  },
};
// 인터페이스에 메서드를 void로 지정했지만,
// human2 에서는 return 값을 지정할 수 있다(?);

// 함수에서 void 와 메서드의 void 는 미묘하게 다르다 (콜백함수의 void 역시 다르다)

// 1. interface 와 callback 의 void 는 " 리턴값을 사용하지 않겠다 "
// 2. function 에서의 void는 "리턴값이 없다"

// ts 에서는 function 을 두번 사용할 수 있다. (타입선언, 함수구현)

declare function forEach(
  arr: number[],
  callback: (el: number) => undefined
): void;

declare function forEach(arr: number[], callback: (el: number) => void): void;
// 함수구현을 하지않는다면 에러가 뜬다
// 함수구현을 하지않고 , 선언에서 declare를 한다면, js컴파일시 사라진다.
let target: number[] = [];
forEach([123], (el) => target.push(el));
// 위 forEach 타입선언에서 콜백함수의 리턴값을 undefined로 하여 에러가 나오는것.
// void 로 선언해도 에러가 안나온다.
// 즉 , 콜백함수에서의 void 는 "리턴값이 무엇이든 상관X"라는 뜻

forEach([123], (el) => {
  target.push(el);
});
forEach([123], (el) => target.push(el));

// void 와 undefined 는 다르다.

// 원칙적으로 void 는 return 을 넣지말기.

// 값을 강제로 바꾸고싶으면 as unknown as "타입" //
// 꺽쇠는 tsx 에서 ts가 헷갈려할 수 있음.

// todo) unknown 과 any 의 차이
// 원칙적으로 unknown를 쓰자 ( any 절대 노노 )
// any 는 ts 에서 포기함.
// unknown 는 당장 타입을 모를때 사용하는 것.
// unknown 의 대표적 사례 : try /catch 에서의 error
try {
} catch (error) {
  (error as Error).message;
}
// 에러가 어떤게 나올줄 모르니 타입을 지정을 할 수 없어서..

// todo) 타입 좁히기 ( 타입가드 )

function numOrNumArray(a: number | number[]) {
  if (Array.isArray(a)) {
    // number[]
    a.concat(4);
  } else {
    a.toFixed(3);
  }
}
numOrNumArray(123);
numOrNumArray([1, 2, 3]);
// 원시값일때는 typeof쓰고, 배열일때는 Array.isArray를 사용
//** Array.isArray = 배열인지 아닌지 확인하는법

class S {
  s() {}
}

class U {
  u() {}
}
// 클래스는 그자체로 타입이 될 수 있다.
// 클래스 자체의 타입은 typeof 클래스(typeof S) 이런식
// 클래스 간에서는 instanceof 로 구별을 한다.
function sOrU(param: S | U) {
  param.s();
  // s가 S 에 있는지 U 에 있는지 정확히 몰라서 instanceof 를 사용한다
  if (param instanceof S) {
    param.s();
    // 에러가 안뜬다.
  }
}
sOrU(new S());
sOrU(new U());

//** X instanceof Y X라는 객체가 Y의 클래스타입인지 확인하는 메서드

//** 객체타입을 값으로 확인하는 방법

type P = { type: "p"; ppp: string };
type O = { type: "o"; ooo: string };
type I = { type: "i"; iii: string };
function typeCheck(a: P | O | I) {
  // 당장 a 라는 파라미터가 P,O,I 타입중 어떤건지 모르니
  if (a.type === "p") {
    a.ppp;
  } else if (a.type === "o") {
    a.ooo;
  } else {
    a.iii;
  }
}

// 객체는 Array.isArray 같은 메서드가 없어서 , 안에 타입으로 구별 할 수 있다.
// 객체들간의 타입검사를 할 때는, 차이를 만들어야함.
// POI의 차이는 타입이 다르고, 속성이 다르다.
// 같은 속성인데 값이 다른경우 / 다른속성인 경우 : 이 두가지로 객체를 구별 할 수 있다.
// 즉 객체끼리 타입구별할때는 객체의 차이로 구별 !

//** 객체타입을 속성으로 확인하는 방ㅂ버
function typeCheck2(a: P | O | I) {
  // 당장 a 라는 파라미터가 P,O,I 타입중 어떤건지 모르니
  if ("ppp" in a) {
    //a 가 P O I 중 하나인데, ppp라는 속성이 있다면,
    a.ppp;
  } else if (a.type === "o") {
    a.ooo;
  } else {
    a.iii;
  }
}

// 객체 를 만들 때 타입을 미리 넣어주는 습관을 가져준다.
// 타입스크립트를 위해서

const human = { type: "human", talk() {} };
const dog = { type: "dog", bow() {} };
const cat1 = { type: "cat", meow() {} };

// 타입을 달아주지않았다면 in 으로 찾기
if ('talk' in params)
