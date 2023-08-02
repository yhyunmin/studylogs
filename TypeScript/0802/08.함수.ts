// 함수 파라미터 애너테이션
import App from './../../ReduxPractice/0523/src/App';

// 

function square(num) {
  num.toUpperCase(); // num이 error 라 에러를 못잡는 모습
  return num * num;
}
square('5');
square(true); // 에러가 안나는 모습

function greet(person:string) {
  console.log(`Hello, ${person}`);
}
App