const redux = require("redux"); // node 상의 import 라 require 를 사용할 것

// reducer 설정
// reducer 는 기존의 상태(state)와 action 값을 프로퍼티로 받는다.
// 또, 무조건 새로운 상태(state)를 리턴해야함.

const counterReducer = (state, action) => {
  // 기존의 상태를 대체할 새로운 상태를 리턴함
  // 대부분의 애플리케이션에는 상태는 하나의 값 이상을 의미 하기 때문에,
  // 실제로는 객체인 경우가 많다.
  return {
    //counter: 0,
    //이렇게 작성하는건 비현실적 counter 는 기존의 counter 값에서 + - 를 하는것이 맞다.
    counter: state.counter + 1,
    // 이양식이 기본적인 리듀서 함수의 모습.
  };
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
