const react = require("react");
const ReactDOM = require("react-dom");

function LoginForm() {
  return (
    <div className="login">
      <input type="email" placeholder="Email or Phone Number" />
      <input type="password" placeholder="Password" />
      <input type="button" value="Log In" className="login-button" />
      <a href="#">Forgot Password?</a>
      <hr className="loginform-hr" />
      <input
        type="button"
        value="Create New Account"
        className="create-new-account"
      />
      <p>
        <strong>Create a Page</strong> for a Celebrity, Brand or Business
      </p>
    </div>
  );
}

export default LoginForm;
