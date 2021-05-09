import "./login.scss";

function Login() {
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
          <form className="loginBox">
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
}

export default Login;
