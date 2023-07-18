//todo) 커스텀 타입가드 (js, 형식 조건자)

interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}

// return 값에 is를 사용 할 수 있다 타입가드중 한개
// 타입을 구분해주는 커스텀 함수를 직접 만드는것
// typeof instanceof in Array.isArray 같은게 아니라,
// 타입판별용으로 함수를 제작할 수 있다.
function catOrDog(a: Cat | Dog): a is Dog {
  // 강아지임을 찾아내는 조건문을 직접 작성해야함(a is Dog)
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}
// 일반 타입구분후 타입가드.
function pet(a: Cat | Dog) {
  // is 가 있어야 if문안에 타입가드를 ts가 확인해줄수 있다.
  if (catOrDog(a)) console.log(a.bow); // ?
  if ("meow" in a) {
    console.log(a.meow); // ?
    // a값에 meow 가 있다면
  }
}

// 커스텀 타입가드는 if 문안에 사용하는것. if(catOrDog(a))
// is가 아니면 타입추론이 안되는 경우도 있음.
