// 타입추론에서 "타입 넓히기"
// 5로 설정해뒀지만 number라고 추론에서 넓혀 잡아줌
// let a = 5; (a:number)

// 타입가드에서 "타입 좁히기"
//=> 해당 타입 만사용한다고 명시하는것
// let a: string | number = 5;
// if (type of a ==='string') {
//   return a= 0;
// }

// 타입 오버로딩
// 같은 타입을 여러번 설정 하는것 (하나에는 걸리겠지)

// function add(x: number, y: number): number;
// function add(x: string, y: string): string;
// function add(x: number | string, y: number | string) {
//   return x + y;
// };

//  타입을 한가지방식으로 명시 하지 못할경우, 여러가지로 작성할 수 있다.

// declare는, 함수 타입 선언만 하고 코드는 다른데있다고 TS 를 속일 수 있음.
// 실제로 function 을 작성을 안해도 에러가 안뜸.

declare function add(x: number, y: number): number;
declare function add(x: number, y: number, z: number): number;

//타입스크립트를 몰라서 두가지의 경우를 한번에 타입화 하고 싶을때,못할 경우
add(1, 2);
add(2, 3, 4);

// ex)
// declare function add(x: number, y: number, z?: number): number;
// 옵셔널을 몰랐을경우 위에처럼 두줄로 표현 할 수 있다.

declare function add(x: string, y: string): number;
add("1", "2");

// 여러줄 추가하여 타입을 대응할 수 있다.

// interface, class 안에서도 오버로딩이 가능하다.

interface Add {
  (x: number, y: number): number;
  (x: string, y: string): string;
}
const addI: Add = (x, y) => x + y;

// @ts-ignore
class A {
  //오버로딩
  add(x: number, y: number): number;
  add(x: string, y: string): string;
  //실제구현부
  add(x: any, y: any) {
    return x + y;
  }
}

const testClass = new A().add(1, 2);

// 타입설정에서 오버로딩을 했을경우, 구현부에선 any를 사용해도 된다.

//
//
//
//
// 타입스크립트 에러 처리법
interface Axios {
  get(): void;
}
interface CustomError {
  name: string;
  message: string;
  stack?: string;
  response?: {
    data: any;
  };
}
declare const axios: Axios;

// 타입을 정교한게 만드려면 머리아프다
// 지금당장 코드를 통과하게 만들어서 쓰다가 문제생겼을 때 보완하는것이 효율적이다.( 처음부터 완벽하기 힘듬)

(async () => {
  try {
    await axios.get();
  } catch (err: unknown) {
    const customError = err as CustomError;
    // interface에서는 response 가 옵셔널이지만
    console.error((err as CustomError).response.data);
    // 여기서는 옵셔널이아니라고 했기때문에, TS가 잡아주는 모습
    console.error((err as CustomError).response?.data);
    //위에서 err as CustomError라 하였지만, 못잡는모습 (as는 1회성 )
    // err.reponse?.data;
    // as를 자주사용할것 같으면, 변수에 지정해준다
    customError.response?.data;
  }
})();

// any 만큼 안좋은게 as, as는 타입이 unknown 일 때 잡아준다.!
// as키워드가 안좋은점 : 사람이 as를 직접 명시하기 때문에 : 실수 할 수 있다.

class CustomError extends Error {
  response?: {
    data: any;
  };
}
(async () => {
  try {
    await axios.get();
  } catch (err: unknown) {
    //타입가드
    if (err instanceof CustomError) {
      //instanceof 클래스 확인하기
      console.error(err.response?.data);
    }
  }
})();

// interface 와 class의 차이

// interface 는 ts의 언어라 컴파일시 사라진다
// 그러면 (if instanceof CustomError) 가 에러가 뜬다 ( 없어지니까 )
// interface를 바로  타입가드로 사용할 수 없다.
// 자바스크립트에서도 남아있으면서, interface 와 비슷한 역할을 하는 class를 사용한다.
// if로 타입가드를 하면 as를 안 적을 수 있다.
// i.e) unknown이 있다면, 타입가드 해주는게 좋다.

//제네릭 실무에서도 타입설정을 할 경우

const x = <T = unknown>(v: T): T => {
  return v;
};
const f = x(3);

//Partial 타입 분석
