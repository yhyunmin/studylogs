//forEach 타입 직접 만들기

const a: Arr = [1, 2, 3];
a.forEach((item) => {
  console.log(item);
});
a.forEach((item) => {
  console.log(item);
  return "3";
});
