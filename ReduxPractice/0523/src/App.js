import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
function App() {
  const Reducer = useSelector((state) => state.show);
  return (
    <Layout>
      {Reducer.isShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
