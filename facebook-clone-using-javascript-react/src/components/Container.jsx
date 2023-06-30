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
        {/* <div id="cards">
          <div id="card-1">
            <div id="cancel">x</div>
            <img
              id="card-1-img"
              src="images/Profile-Picture.jpg"
              alt="profile-picture-1"
            />
            <div class="username">Khakwaozi</div>
          </div>

          <div id="card-1">
            <div id="cancel">x</div>
            <img
              id="card-1-img"
              src="images/profile-picture.jpg"
              alt="profile-picture-1"
            />
            <div class="username">Menzeekhi</div>
          </div>

          <div id="card-2">
            <img
              id="card-2-img"
              src="images/add-account.jpg"
              alt="add-account"
            />
            <div class="username" id="add-account">
              Add Account
            </div>
          </div>
        </div> */}
      </div>

      <LoginForm />
      {/* <div className="login">
        
        <input type="email" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />
        <input type="button" value="Log In" id="login-button" />
        <a href="#">Forgot Password?</a>
        <hr style="width: 95%;" />
        <input
          type="button"
          value="Create New Account"
          id="create-new-account"
        />
        <p>
          <strong>Create a Page</strong> for a Celebrity, Brand or Business
        </p>
      </div> */}
    </div>
  );
}

export default Container;
