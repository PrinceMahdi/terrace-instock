/* ---------------- SCSS IMPORTS ---------------- */
import "./Header.scss";
/* ---------------- REACT IMPORTS ---------------- */
import { NavLink, Link } from "react-router-dom";
/* ---------------- ASSET IMPORTS ---------------- */
import Logo from "../../assets/logo/InStock-Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to={"/warehouses"} className="header-logo">
          <img src={Logo} alt="instock-logo" />
        </Link>
        <ul className="nav-menu">
          <li>
            {/* Switching the active class between nav items */}
            <NavLink
              to={"/warehouses"}
              className={(navData) =>
                navData.isActive ? "nav-item--active" : "nav-item"
              }
            >
              Warehouses
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/inventories"}
              className={(navData) =>
                navData.isActive ? "nav-item--active" : "nav-item"
              }
            >
              Inventory
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
