//공변성, 반공변성,이변성,불변성
//함수간의 서로 대입과 관련되어있다

function testFunc(x: string): number {
  return +x;
}
testFunc("1"); //1

type testType = (x: string) => number | string; // (x:string)=>string, 또는 (x:string)=> number

const testVar: testType = testFunc; // ?????????

// function 은 string 받아서 number 리턴
// type 은 string을 받아서 number | string 을 리턴
// 근데 대입이 된다.
// ** 리턴값은 더 넓은 타입으로 대입할 수 있다 .**  ( 집합 생각해보면 쉬움 ) 용어는 신경 쓰지 말 것

// 하지만 반대로는 안됨 **

function testFunc2(x: string): number | string {
  return +x;
}
type testType2 = (x: string) => number;

const testVar2: testType2 = testFunc2; // 반대로는 안되서 에러가 남

//
//
//

function testFunc3(x: string | number): number {
  return 0;
}
type testType3 = (x: string) => number;

const testVar3: testType3 = testFunc3; // 매개변수가 더좁은 함수이지만 type 설정이 가능하다 (?)

//(x:number):number 가 (x:string) => number 에 대입되는 중.

// => 리턴값과 다르게 매개변수의 타입은 좁은타입에 들어가지고 (string |number => number)
// 넓은타입에는 들어가지못한다 (string =/> number|string)

// i.e ) return 값은 넓은 타입에 대입 되고, 매개변수는 좁은 타입에 대입이 된다.
