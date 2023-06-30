import Container from "./components/Container";
import Footer from "./components/Footer";

const react = require("react");
const ReactDOM = require("react-dom");

function App() {
  return (
    <div>
      <Container />
      {/* <div id="container">
        <div id="recent-logins">
          <img
            id="facebook"
            src="images/Facebook-Logo.png"
            alt="facebook-logo"
          />
          <div id="title">Recent Logins</div>
          <div id="subtitle">Click your picture or add an account.</div>
          <div id="cards">
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
          </div>
        </div>

        <div id="login">
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
        </div>
      </div> */}
      <Footer />
      {/* <footer>
        <div>
          English (UK) සිංහල தமிழ் Español Deutsch Italiano Français (France)
          Português (Brasil) 日本語 العربية हिन्दी
          <hr style="width: 100%;" />
          Sign Up Log in Messenger Facebook Lite Watch Places Games Marketplace
          Meta Pay Meta Store Meta Quest Instagram Bulletin
          <br />
          Fundraisers Services Voting Information Centre Privacy Policy Privacy
          Centre Groups About Create ad Create Page Developers Careers Cookies
          Ad Choices Terms Help Contact uploading and non-users Settings
          Activity log
          <br />
          <br />
          Meta © 2023
        </div>
      </footer> */}
    </div>
  );
}

export default App;
