//공변성, 반공변성,이변성,불변성
//함수간의 서로 대입과 관련되어있다

function testFunc(x: string): number {
  return +x;
}
testFunc("1"); //1

type testType = (x: string) => number | string;

const testVar: testType = testFunc; // ?????????

// function 은 string 받아서 number 리턴
// type 은 string을 받아서 number | string 을 리턴
// 근데 대입이 된다.
//
