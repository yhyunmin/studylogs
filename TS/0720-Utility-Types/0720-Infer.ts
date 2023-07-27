// Parameters
// 함수의 매개변수들을 타입만 가져오려면 Parameters<함수> 하면 된다.

function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

// 매개들의 타입들을 가져오고 싶은 상황
type Params = Parameters<zip>; // 변수는 바로 사용을 못함
type Params2 = Parameters<typeof zip>; // [number,string,boolean] 튜플

type First = Params2[0]; // number
type Second = Params2[1]; // string
type Third = Params2[2]; // boolean

//타입간에도 배열이면 인덱스로 접근 할 수 있다.

// Parameters 만들어보기

//매개변수 가져오기
type getP<T extends (...args: any) => any> = T extends (...args: infer A) => any
  ? A
  : never;

//함수 타입은 (...args:any)=>any
//
// P<T extends (...args:any)=>any> T는 함수여야한다.
//
// T extends (...args: infer A) => any ? A
// infer : infer는 extends에서만 사용가능하다
// infer : 추론
// ( 추론 조건 ? 추론 성공시의 값 : 추론 실패 시의 값 )
// infer A는 A(매개변수)를 추론해서 맞으면 A(매개변수), 아니면 never;

//ReturnType
//리턴값 가져오기
type getR<T extends (...args: any) => any> = T extends (...args: any) => infer B
  ? B
  : never;

type parameter = getP<typeof zip>; // [number,string,boolean]
type returnValue = getR<typeof zip>; // {x:number,y:string,z:boolean}
// i.e)

type getParams = Parameters<typeof zip>;
type getReturnValue = ReturnType<typeof zip>;

// 어떤함수가있을때 리턴값과 매개변수의 타입을 자유자재로 사용할 수 있다.
// 매개변수 하드코딩 할 이유가 없음

// abstract new 생성자 모양

class A {
  a: string;
  b: number;
  c: boolean;
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
const c = new A("123", 456, true);
type C = ConstructorParameters<typeof A>; // 생성자의 타입을 얻어오고 싶을 때
type I = InstanceType<typeof A>;

// class는 타입 그대로 사용 할 수 있다.
// A라는 타입
const a: A = new A("123", 456, true); // 정확히는 Instance

// new() 로 만들어낸 애들이 Instance임

// 생성자 타입 만들때는 typeof 클래스가 생성자
