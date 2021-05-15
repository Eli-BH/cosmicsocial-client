import "./register.scss";
import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { authRegister, authRegisterSelector } from "../../slices/register";
import { Link, useHistory } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { authData } = useSelector(authRegisterSelector);

  const history = useHistory();

  const email = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value === confirmPassword.current.value) {
      try {
        const formData = {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };

        dispatch(authRegister(formData));
      } catch (error) {
        console.log(error);
      }
    } else {
      password.current.setCustomValidity("Passwords do not match!");
    }
    history.push("/home");
  };

  console.log(authData);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          {window.innerWidth > 750 ? (
            <img
              src="https://i.imgur.com/WtQloZa.png"
              alt=""
              className="loginImg"
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
          <form className="loginBox" onSubmit={handleSubmit}>
            <div className="loginName">
              <input
                type="text"
                placeholder="First Name"
                className="loginInput"
                ref={firstName}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="loginInput"
                required
                ref={lastName}
              />
            </div>

            <input
              type="text"
              placeholder="Username"
              className="loginInput"
              required
              ref={username}
            />
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
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <input
              type="password"
              placeholder="Confirm password"
              required
              className="loginInput"
              ref={confirmPassword}
            />
            <button type="submit" className="loginButton">
              Register
            </button>

            <Link to="/login">
              <button className="loginRegisterButton">
                Login into your account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
