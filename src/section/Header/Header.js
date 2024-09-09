import logo from "../../Assets/images/logo.png";
import { NavItem, NavItemDropDown } from "../../Components";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
          <a href="#.." className="navbar-brand">
            <img src={logo} alt=".." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <NavItem>
                {" "}
                <a href="#hero" className="nav-link">
                  Home
                </a>
              </NavItem>
              <NavItem>
                {" "}
                <a href="#hero" className="nav-link">
                  Browse
                </a>
              </NavItem>
              <NavItemDropDown>
                {" "}
                <a
                  href="#.."
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Details
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#learn" className="dropdown-item">
                      Fortnite
                    </a>
                  </li>
                  <li>
                    <a href="#next" className="dropdown-item">
                      Call Of Duty
                    </a>
                  </li>
                </ul>
              </NavItemDropDown>{" "}
              <NavItem>
                <a href="#hero" className="nav-link">
                  Streams
                </a>
              </NavItem>
              <NavItem>
                <a href="#hero" className="nav-link">
                  Profile
                </a>
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
