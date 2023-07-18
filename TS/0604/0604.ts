//타입 가드
// 타입가드는 에러를 최소한으로 줄이기위해 사용하는 방어 코드 기법
// typeof(일반타입체킹) ,instanceof(클래스 체킹) Array.isArray()(배열체킹) .type / in (객체 속성 체킹)
//https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85-%EC%B6%94%EB%A1%A0-%ED%83%80%EC%9E%85-%ED%98%B8%ED%99%98-%ED%83%80%EC%9E%85-%EB%8B%A8%EC%96%B8-%ED%83%80%EC%9E%85-%EA%B0%80%EB%93%9C-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC#%ED%83%80%EC%9E%85_%EA%B0%80%EB%93%9C_guards

// if문을 이용해서 분기를 만드는것도 타입가드의 일종

// 커스텀 타입 가드

// 예제

//isRejected 와 isFulfilled 는 타입가드이다.
//is가 있으면 타입 가드
// const isRejected = (
//   input: PromiseSettledResult<unknown>
// ): input is PromiseRejectedResult => input.status === "rejected";
// const isFulfilled = <T>(
//   input: PromiseSettledResult<T>
// ): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);
// Promise -> pending -> Settled(Fulfilled,Rejected)
// PromiseSettledResult = PromiseRejectedResult PromiseFulfilledResult

// TS 가   Promise.resolve("a"),
//   Promise.resolve("b"), 만 봐서는성공인지 실패인지 몰라서
// 넓게 추론을 해버림
const error = promises.filter((a) => true); // PromiseSettledResult
// 자바스크립트에서의 rejected(error)만 분리해놓은 코드
// 하지만 타입스크립트에서는 역시 넓게 추론함 이유 ) 타입바보.
const error2 = promises.filter((promise) => promise.status === "rejected");
//에러와 fulfilled 만 구별 하고 싶을때

//error2와 같은 함수이지만 return에 is 문법이 추가되어있음
const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === "rejected";
const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

const errors = promises.filter(isRejected);
const fulfilled = promises.filter(isFulfilled);

// 타입스크립트에 올바르게 추론하지 못할 떄, 타입가드를 직접 커스텀해야함

export {};

// {}와 Object

// 빈객체타입과 대문자오 오브젝트
const x: {} = "hello";
const y: Object = "hi"; // {},Object 는 모든 타입 ( null 과 undefined 제외)
//밑에가 실제 객체 (소문자 오브젝트 )
const xx: object = "hi";
const yy: object = { hello: "hi" }; // object 지양 하시고 interface,type,class 쓰자
// unknown 은 any와 같이 모든값을 받아올수 있지만 나중에 타입을 지정해줘야한다 ( any 말고 이거 쓰기 )
const z: unknown = "hi";

// unknown = {} | null | undefined **
if (z) {
  z; // const z : {};
} else {
  z; // const z : unknown;
}
