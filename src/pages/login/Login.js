import "./login.scss";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authLogin } from "../../slices/login";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: email.current.value,
      password: password.current.value,
    };

    const sendUserData = async () => {
      try {
        dispatch(authLogin(loginInfo));
      } catch (error) {
        console.log(error);
      }
    };
    sendUserData();

    email.current.value = "";
    password.current.value = "";

    history.push("/");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          {window.innerWidth > 1200 ? (
            <img
              src="https://i.imgur.com/WtQloZa.png"
              alt=""
              style={{ width: "100%" }}
            />
          ) : (
            <>
              {" "}
              <h3 className="loginLogo">Cosmic Social</h3>
              <span className="loginDesc">
                Speak to the world around you on Cosmic Social
              </span>
            </>
          )}
        </div>

        <div className="loginRight">
          <form onSubmit={handleSubmit} className="loginBox">
            <input
              type="email"
              placeholder="Email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="loginInput"
              ref={password}
            />
            <button type="submit" className="loginButton">
              Login
            </button>
            <Link to="/register">
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
