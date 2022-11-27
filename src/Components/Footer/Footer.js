/* ----------------- SCSS IMPORTS ----------------- */
import { useParams, useLocation } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const params = useParams();

  const location = useLocation();

  return (
    <>
      <footer
        className={
          location.pathname.includes("item")
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
