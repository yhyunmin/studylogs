// 타입추론에서 "타입 넓히기"
// 5로 설정해뒀지만 number라고 추론에서 넓혀 잡아줌
// let a = 5; (a:number)

// 타입가드에서 "타입 좁히기"
//=> 해당 타입 만사용한다고 명시하는것
// let a: string | number = 5;
// if (type of a ==='string') {
//   return a= 0;
// }
