import DarkLogoImg from "../../../assets/images/logo/NewLogo-1.png";
import { Link } from "react-router-dom";
function FooterAbout() {
  return (
    <div className="aximo-footer-textarea">
      <div className="d-flex align-items-center mb-4">
        <div className="brand-logo">
          <Link to="/">
            <img src={DarkLogoImg} alt="Logo" className="light-version-logo header-logo-large" />
          </Link>
        </div>
      </div>

      <p className="tracking-wide">
        We are a compliance-focused consulting firm, dedicated to helping
        businesses grow by providing expert financial and legal solutions. With
        a proven track record of success, we've partnered with diverse
        organizations to ensure seamless compliance and drive
        sustainable growth.
      </p>
      {/* <div className="aximo-social-icon aximo-social-icon4">
        <ul>
          <li>
            <a href="https://twitter.com/" target="_blank">
              <i className="icon-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/" target="_blank">
              <i className="icon-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="icon-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="icon-linkedin"></i>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default FooterAbout;
