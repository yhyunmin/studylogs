// Primitives :number string boolean
// more complex types : arrays.objects
// function types, parameters

// Primitives

let age: number = 30;
// 대문자는 자바스크립트의 객체로 인식함
age = 12;
let userName: string = "홍길동";
userName = "Max";

let isInstructor: boolean;
isInstructor = true;
isInstructor = false;

// null / undefined 는 다르게 사용함.

// more complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];
hobbies = ["Sports", "Cooking", "Dancing"];

// let person; // 현재 any 타입
let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 30,
};

//객체로 이루어진 배열

//type inference
let course = "React - The Complete Guide"; // course :string
// TS 에서 타입추론을 자동적으로 해줌
// 타입추론을 적극적으로 사용 할 것 (명시적으로 안적어두됨)

// union type
let course2: string | number = "React - The Complete Guide";
course2 = 10;

// 어느시점 동일타입을 작성할때가 있음
//

type Person = {
  name: string;
  age: number;
};

let person2: Person;

person2 = {
  name: "Max",
  age: 30,
};

let people: Person[];

// function & types

function add(a: number, b: number): number {
  // return : ts 의 타입 추론
  return a + b;
}
function print(value: any): void {
  console.log(value);
}

// generics
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // ?

// any 타입은 타입스크립트의 어떠한 지원도 받을 수 없다.

updatedArray[0].split(""); // 에러가 생기질 않음 ( any타입 추론 X )

// 제네릭이란, 위 함수를 제네릭 함수로 변경 할 수있다.

// 함수명과 매개변수 사이에서 제네릭타입을 명시
//
function genericInsertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray2 = [1, 2, 3];
const updatedArray2 = genericInsertAtBeginning(demoArray2, -1);
// updatedArray2[0].split("");

// any타입은 아니지만, 대신 array 배열과 value 값이 같은 타입을 받아야한다고 명시

const stringArray = genericInsertAtBeginning(["a", "b", "c"], "d");
// Ts 가 자동적으로 genericInsertAtBeginning 함수의 타입을 추론해 준다.
// 제네릭 타입은 유연하게 어떤 타입이든 사용할 수있지만, 특정 타입이 추론되면 고정이 된다. ( any 와 다름 )
