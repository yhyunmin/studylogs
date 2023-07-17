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
// 하지만 반대로는 안됨

function testFunc2(x: string): number | string {
  return +x;
}
type testType2 = (x: string) => number;

const testVar2: testType2 = testFunc2; // 반대로는 안되서 에러가 남
