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
