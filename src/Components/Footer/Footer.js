/* ----------------- SCSS IMPORTS ----------------- */
import { useLocation } from "react-router-dom";
import "./Footer.scss";

function Footer() {


  const location = useLocation();

  return (
    <>
      <footer
        className={
          location.pathname.includes("item") ||
          location.pathname.includes("add") ||
          location.pathname.includes("edit") ||
          location.pathname.includes("150a36cf-f38e-4f59-8e31-39974207372d")
            ? "footer footer--bottom"
            : "footer"
        }
      >
        <p className="footer__text">© InStock Inc. All Rights Reserved.</p>
      </footer>
    </>
  );
}
export default Footer;
