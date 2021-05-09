import "./register.scss";

const RegisterPage = () => {
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
          <form className="loginBox">
            <div className="loginName">
              <input
                type="text"
                placeholder="First Name"
                className="loginInput"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="loginInput"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Username"
              className="loginInput"
              required
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength="6"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Confirm password"
              required
              minLength="6"
              className="loginInput"
            />
            <button type="submit" className="loginButton">
              Login
            </button>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
