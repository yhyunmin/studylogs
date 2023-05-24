import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, showCartAction } from "../../store";
import { cart2Action } from "../../store";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  // const Reducer = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart2);
  const dispatch = useDispatch();

  // const increaseAmount = () => {
  //   dispatch(cartAction.increaseAmount());
  // };
  // const decreaseAmount = () => {
  //   if (Reducer.amount === 0) return dispatch(showCartAction.toggle());
  //   dispatch(cartAction.decreaseAmount());
  // };
  const addItemHandler = () => {
    dispatch(
      cart2Action.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cart2Action.removeItemFromCart(id));
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
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
