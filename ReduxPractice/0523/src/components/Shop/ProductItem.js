import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const Reducer = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(cartAction.increaseAmount());
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
          <button onClick={onClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
