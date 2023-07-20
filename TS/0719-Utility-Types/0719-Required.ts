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
