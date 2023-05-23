import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, showCartAction } from "../../store";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const Reducer = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increaseAmount = () => {
    dispatch(cartAction.increaseAmount());
  };
  const decreaseAmount = () => {
    if (Reducer.amount === 0) return dispatch(showCartAction.toggle());
    dispatch(cartAction.decreaseAmount());
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseAmount}>-</button>
          <button onClick={increaseAmount}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
