// Omit 만들기
// Exclude를 알아야 만듬

// Omit 은 Pick 과 Exclude를 합친 기능

// Exclude 는 T에서 U 타입을 뺴는것

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

type A = Exclude<keyof Profile, "married">;
// keyof 에서 빼고싶은걸 정한다.

type CustomOmit = Pick<Profile, Exclude<keyof Profile, "married">>;

type CustomOmit2<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
const newType: CustomOmit2<Profile, "married"> = {
  name: "hm",
  age: 29,
};

// S extends keyof any -> S는 string | number |symbol
// T, S extends keyof T 할시, <Profile,Profile> 이 될수 있기에 any로 설정 한다.

//Extract: 키들을 추출한다.

type Animal = "cat" | "dog" | "human";
type Human = Extract<Animal, "cat" | "dog">;
// type Exclude<T,U> = T extends U ? never : T;
// 각각 한번씩 확인한다
// T 가 U 가 포함되어있다면 T로 아니면 never
// human 이 cat인가 ? false = T
// human 이 dog인가 ? false = T
// human 이 human인가 ? true = never
// =>
type Mammal = Exclude<keyof Animal, "human">; // 'Cat'|'Dog'|'never'
// type Extends<T,U> = T extends U ? T : never;
// Exclude와 반대.

// 타입에는 삼항 연산자가 들어갈 수 있다.
