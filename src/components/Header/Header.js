/* ---------------- SCSS IMPORTS ---------------- */
import "./Header.scss";
/* ---------------- REACT IMPORTS ---------------- */
import { Link } from "react-router-dom";
/* ---------------- ASSET IMPORTS ---------------- */
import Logo from "../../assets/logo/InStock-Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to={"/"} className="header-logo">
          <img src={Logo} alt="instock-logo" />
        </Link>
        <ul className="nav-menu">
          <Link to={"/"} className="nav-item nav-item--active">
            <li>Warehouses</li>
          </Link>
          <Link to={"/"} className="nav-item">
            <li>Inventory</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
