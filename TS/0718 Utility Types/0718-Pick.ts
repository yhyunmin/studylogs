interface Profile {
  name: string;
  age: number;
  married: boolean;
}
// Pick , Omit
// Pick 은 선택한것만 가져올 수 있다.
// Omit 은 제외한 나머지를 가져올 수 있다.

const PickTest: Pick<Profile, "name" | "age"> = {
  name: "hm",
  age: 29,
};
// Omit 은 많은
const OmitTest: Omit<Profile, "married"> = {
  name: "hm",
  age: 29,
};

// Pick Omit 직접 만들기

type CustomPick<T, S extends keyof T> = {
  // [Key in keyof S]: S[Key]; => S[Key] 는 S가 이미 지정된 객체키기때문에
  // prop1:'prop1', prop2:'prop2' 처럼됨
  [Key in S]: T[Key];
};
// 제네릭을 설정할때 , 서로와 관계를 먼저 정해줘야한다. (제한조건을 먼저
type CustomOmit<T, S> = {};
