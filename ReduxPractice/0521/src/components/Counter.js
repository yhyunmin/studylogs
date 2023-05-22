import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/Counter";

const Counter = () => {
  // state 값을 가져왔다 생각하면됨
  const counter = useSelector((state) => {
    console.log(state);
    return state.counter;
  });

  const isShow = useSelector((state) => state.counter.show);
  const dispatch = useDispatch();

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };
  // const increaseHandler = () => {
  //   dispatch({ type: "increase", amount: 5 });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const increaseHandler = () => {
    //payload는 적어준다
    dispatch(counterAction.increase(10)); // {type:some_ID,payload:10}
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter.counter}</div>
      {isShow && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 10</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
