import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const AuthReducer = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      {!AuthReducer.isAuthenticated ? <Auth /> : <UserProfile />}

      {/*<Counter />*/}
    </>
  );
}

export default App;
