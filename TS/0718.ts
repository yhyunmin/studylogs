//Partial 타입 분석
// Utility Types 분석 및 공부
// TS에서 미리 만들어둔 타입들 ( 사용할 수 있음 )
// 직접만들줄 알아야함

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const my: Profile = {
  name: "hm",
  age: 29,
  married: false,
};
// 이때 married (개인정보보호로) married가 필요 없을 때

interface NewProfile {
  name: string;
  age: number;
}
const newMy: NewProfile = {
  name: "hm",
  age: 31,
};

// 중복되는게 싫을때 유틸리티 타입을 이용하는 것
// 같은 객체를 만들지 말고,

const newMe: Partial<Profile> = {
  name: "hmhm",
  age: 29,
};
// Partial 은 interface를 전부 옵셔널로 만들어줌.

// interface NewProfile {
//   name?: string,
//   age?: number,
//   married?:boolean,
// }

// Partial 은 ts 내부유틸리티 타입이지만 직접만들어보기
