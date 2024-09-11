import  {Link} from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import profileHeader from "../../Assets/images/profile-header.jpg";
import { NavItem, NavItemDropDown } from "../../Components";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container mt-3">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt=".." />
          </Link>
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                {" "}
                <Link to="#hero" className="nav-link">
                  Browse
                </Link>
              </NavItem>
              <NavItemDropDown>
                {" "}
                <Link
                  to="#.."
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Details
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#learn" className="dropdown-item">
                      Fortnite
                    </Link>
                  </li>
                  <li>
                    <Link to="#next" className="dropdown-item">
                      Call Of Duty
                    </Link>
                  </li>
                </ul>
              </NavItemDropDown>{" "}
              <NavItem>
                <Link to="#hero" className="nav-link">
                  Streams
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/profile" className="profNav nav-link">
                  <div>
                  Profile {" "}
                  <img className="profHeader" src={profileHeader} alt=""/>
                  </div>
                </Link>
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
