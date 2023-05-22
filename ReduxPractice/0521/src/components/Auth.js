import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from "../store/Auth";

const Auth = () => {
  const AuthReducer = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (AuthReducer.email.length > 4 && AuthReducer.password.length >= 4) {
      dispatch(AuthAction.login());
      console.log(
        "success",
        AuthReducer.email,
        AuthReducer.password,
        AuthReducer.isAuthenticated
      );
    } else {
      console.log(
        "fail",
        AuthReducer.email,
        AuthReducer.password,
        AuthReducer.isAuthenticated
      );
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={AuthReducer.email}
              onChange={(e) => dispatch(AuthAction.emailValue(e.target.value))}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={AuthReducer.password}
              onChange={(e) =>
                dispatch(AuthAction.passwordValue(e.target.value))
              }
            />
          </div>
          <button onClick={onSubmit}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
