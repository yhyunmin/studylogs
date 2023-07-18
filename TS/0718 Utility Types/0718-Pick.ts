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

type CustomPick<T, S> = {
  [Key in keyof S]: S[Key];
};
type CustomOmit<T, S> = {};
