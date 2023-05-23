import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = (props) => {
  const Reducer = useSelector((state) => state.cart);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={Reducer.price}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
