import "./navbar.scss";
import mainLogo from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";
import appIcon from "../../assets/app.svg";
import expandIcon from "../../assets/expand.svg";
import settingsIcon from "../../assets/settings.svg";
import notificationIcon from "../../assets/notifications.svg";
import userIcon from "../../assets/user.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={mainLogo} alt="logo" />
        <span>MyAdmin</span>
      </div>
      <div className="icons">
        <img src={searchIcon} className="icon" alt="search" />
        <img src={appIcon} className="icon" alt="app" />
        <img src={expandIcon} className="icon" alt="exand" />
        <div className="notification">
          <img src={notificationIcon} alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={userIcon} alt="user" />
        </div>
        <img src={settingsIcon} alt="setting" />
      </div>
    </div>
  );
};

export default Navbar;
