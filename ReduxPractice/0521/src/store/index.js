import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  show: true,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //payload이름이 고정 (redux/toolkit)
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});
// export const INCREMENT = "increment";
//
// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return { counter: state.counter + 1, show: state.show };
//   } else if (action.type === "decrement") {
//     return { counter: state.counter - 1, show: state.show };
//   } else if (action.type === "increase") {
//     return { counter: state.counter + action.amount, show: state.show };
//   }
//
//   if (action.type === "toggle") {
//     return {
//       show: !state.show,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const oldStore = createStore(counterReducer);
//createStore는 더이상 안씀

//생성한 리듀서와 store를 컴포넌트와 연결하려면 export하면됨

//configureStore 를 통해서 새로 만들어주자
//configureStore는 인자로 객체를 받아온다.
// 객체안의 키값은 reducer(단수) 로, 또 객체로 받아와서 원하는 프로퍼티 키이름으로 지정후 해당하는 리듀서함수를 밸류로 한다.
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    test: null,
  },
});
// 액션값을 export해준다.
export const counterAction = counterSlice.actions;

export default store;
