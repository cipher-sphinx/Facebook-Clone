import AccountCard from "./AccountCard";
import LoginForm from "./LoginForm";

const react = require("react");
const ReactDOM = require("react-dom");

function Container() {
  return (
    <div className="container">
      <div className="recent-logins">
        <img
          className="facebook"
          src="images/Facebook-Logo.png"
          alt="facebook-logo"
        />
        <div className="title">Recent Logins</div>
        <div className="subtitle">Click your picture or add an account.</div>
        <AccountCard />
      </div>

      <LoginForm />
    </div>
  );
}

export default Container;
