// Required
// 타입이 Optional 일때, 모든타입을 필수로 만드려 할때

interface Profile {
  name?: string;
  age?: number;
  married?: boolean;
}
type Name = Profile["name"];

type R<T> = {
  [Key in keyof T]-?: T[Key];
};
// modifier : -? 로 하면 모든 optional 을 제거함

// Readonly
// 객체 변경을 막는 유틸리티

type CustomReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

const me: CustomReadonly<Profile> = {
  name: "hm",
  age: 29,
  married: false,
};
me.name = "hm2"; // readonly 에러 뜸

// 반대로 readonly 를 제거하는 방법도있음

interface Profile2 {
  readonly name: string;
  readonly age: number;
  readonly married: boolean;
}
type CustomNotReadonly<T> = {
  -readonly [Key in keyof T]: T[Key];
};

const me2: CustomNotReadonly<Profile2> = {
  name: "hm",
  age: 29,
  married: false,
};
me2.name = "hhm"; // readonly 가 해제된 모습
