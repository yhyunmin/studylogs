import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Dummy = [
  {
    id: "p1",
    price: 5,
    title: "my first book",
    description: " the first book i ever wrote",
  },
  {
    id: "p2",
    price: 6,
    title: "my second book",
    description: " the second book i ever wrote",
  },
];
const Products = (props) => {
  const Reducer = useSelector((state) => state.cart);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
