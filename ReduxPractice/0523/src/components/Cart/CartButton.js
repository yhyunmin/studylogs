import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showCartAction } from "../../store";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  // const Reducer = useSelector((state) => state.cart);
  const cartQuantity = useSelector((state) => state.cart2.totalQuantity);

  const dispatch = useDispatch();
  //   const showCart = () => {
  //     dispatch(showCartAction.toggle());
  //   };
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    // <button className={classes.button} onClick={showCart}>
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
