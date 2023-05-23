import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showCartAction } from "../../store";

const CartButton = (props) => {
  const Reducer = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(showCartAction.toggle());
  };
  return (
    <button className={classes.button} onClick={showCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{Reducer.amount}</span>
    </button>
  );
};

export default CartButton;
