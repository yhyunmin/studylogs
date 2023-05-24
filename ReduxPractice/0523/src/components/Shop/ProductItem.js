import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cart2Action } from "../../store";
import { cartAction } from "../../store";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  // const Reducer = useSelector((state) => state.cart);
  // const onClick = () => {
  //   dispatch(cartAction.increaseAmount());
  // };
  const addToCartHandler = () => {
    dispatch(
      cart2Action.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          {/*<button onClick={onClick}>Add to Cart</button>*/}
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
