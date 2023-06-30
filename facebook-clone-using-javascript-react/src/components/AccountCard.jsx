const react = require("react");
const ReactDOM = require("react-dom");

function AccountCard() {
  return (
    <div className="cards">
      <div className="card-1">
        <div className="cancel">x</div>
        <img
          className="card-1-img"
          src="./images/Profile-Picture1.jpg"
          alt="profile-picture-1"
        />
        <div className="username">Khakwaozi</div>
      </div>

      <div className="card-1">
        <div className="cancel">x</div>
        <img
          className="card-1-img"
          src="./images/profile-picture2.jpg"
          alt="profile-picture-1"
        />
        <div className="username">Menzeekhi</div>
      </div>

      <div className="card-2">
        <img
          className="card-2-img"
          src="./images/add-account.jpg"
          alt="add-account"
        />
        <div id="add-account">Add Account</div>
      </div>
    </div>
  );
}

export default AccountCard;
