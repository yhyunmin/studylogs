import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from "../store/Auth";

const Header = () => {
  const AuthReducer = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(AuthAction.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          {AuthReducer.isAuthenticated && (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
