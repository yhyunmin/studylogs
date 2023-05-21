# Redux 는 무엇인가 왜 쓰는가 ~  
배운게 얕아서 다시 공부
## What is redux ?
* 리덕스는 크로스컴포넌트 상태 관리 시스템 
* 상태를 변경하는 데이터를 관리하는데 도와준다.

## What is Cross-component / App-Wide State ?
* 리액트에서 상태 는 총 세가지의 종류가 있다.
> * Local State
> * Cross-Componenet State
> *  App-wide State

* Local State 란  데이터가 변경되어서 하나의 컴포넌트에 속하는 UI에  영향을 미치는 상태  
  (예를 들어, 사용자가 input 에 입력 후, 리액트는 키입력과 세부정보를 state에 저장하는 것 등등 useSate,useReducer)
* Cross-Component , 데이터가 하나의 컴포넌트가 아닌 여러 컴포넌트에 영향을 미치는 상태  
  (modal component와 같이 열고 닫는것이 다른 컴포넌트에도 영향을 미칠 때 prop 체인이 됨 drilling)
* App-wide State 는 다수의 컴포넌트가아닌 "모든" 컴포넌트의 영향이 미치는 상태를 말한다  
  (ex :로그인/로그아웃 상황의 다른 화면 출력)

## Redux Concepts
* 하나의 중앙 데이터 (Store)
* 컴포넌트가 store 를 구독
* 데이터가 변경시 store가 컴포넌트에게 알림
* 이 데이터는 state값이기 때문에 컴포넌트측에서도 변화가 있어야함
*  그렇지만, store에 저장된 데이터는 직접 조작하지않음
* 그러한이유로 컴포넌트가 store를 구독한 이유
* 리듀서 함수를 이용해 state를 변화함
* 리듀서와 컴포넌트를 연결하기 위해서 액션이 존재함
* 컴포넌트에서 액션을 리듀서에게 보냄
* 리듀서가 액션을 받아서 그 액션에 해당하는 새로운 싱태를 뱉어내고 
* 그 스테이트가 다시 Store에 들어감.


## 핵심 리덕스 개념
* 리액트에 이용하기전 리덕스 개념을 순수 js에서 알아보고간다.
```js
const redux = require("redux"); // node 상의 import 라 require 를 사용할 것

// reducer 설정
// reducer 는 기존의 상태(state)와 action 값을 프로퍼티로 받는다.
// 또, 무조건 새로운 상태(state)를 리턴해야함.

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  // 기존의 상태를 대체할 새로운 상태를 리턴함
  // 대부분의 애플리케이션에는 상태는 하나의 값 이상을 의미 하기 때문에,
  // 실제로는 객체인 경우가 많다.
  return state;
  //counter: 0,
  //이렇게 작성하는건 비현실적 counter 는 기존의 counter 값에서 + - 를 하는것이 맞다.
  // if문으로 통해 increment 타입을 받을때 증가해야하니 if문 밖에 return 은 state를 반환해야함
  // counter: state.counter + 1,
  // 이양식이 기본적인 리듀서 함수의 모습.
};

// store 설정
// 완성된 리듀서 함수를 createStore 안에 넣는다.
// 어떤 리듀서함수가 store 를 변화시키는지 알아야하기 때문.
// store 와 직접적으로 작동하는건 reducer 함수임.
// createStore 는 더이상 사용안함 /툴킷의 configureStore 를 사용함
const store = redux.createStore(counterReducer);

// 저장소를 구독할 함수와 액션을 작성하자;
const counterSubscriber = () => {
  // 저장소에 getState 를 호출 (createStore 로 생성된 저장소에서 사용할 수 있다.)
  const latestState = store.getState();
  console.log(latestState);
  // 리덕스가 이 함수를 인식하도록 상태가 변경할때마다 이 함수를 실행하라고 말해야함
};
// 저장소의 stroe subscribe 를 호출
// subscribe 안에다가 함수를 작성하면
// 리덕스가 데이터와 스토어의 값이 변경될떄마다 실행해줆
// 중요한점은 countersubscriber 함수는 직접적으로 호출하지 않는다.
store.subscribe(counterSubscriber);

// node redux-demo.js 를 실행하면 counter 함수를 찾을 수 없다고 에러가 뿜음.
// 이유는 저장소가 초기화할때 리덕스가 리듀서함수를 실행하는데 처음에 실행할때 state 의 초기값이 없어서 에러가 뿜음
// state 프로퍼티에 기본값을 정해줘야함

// 실행하면 counter는 1임 이유는 처음에 state가 0 부터 시작하고,  처음으로 실행될 때 1이 증가함.

// swtich 를 이용해보자

// 액션을 전송하는 함수
store.dispatch({ type: "INCREMENT" });
// 일반적으로 리덕스에서 리듀서 내부 다른액션은 다른일을 하는게 목표
// 그래서 리듀서 함수 두번째 인자가 action인 이유 ( 여러 action 을 받기 위해 )
store.dispatch({ type: "DECREMENT" });

```
