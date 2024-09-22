import DarkLogoImg from "../../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
function FooterAbout() {
  return (
    <div className="aximo-footer-textarea">
      <div className="d-flex align-items-center mb-4">
        <div className="brand-logo">
          <Link to="/">
            <img src={DarkLogoImg} alt="Logo" className="light-version-logo" />
          </Link>
        </div>
        <div className="ms-2 ">
          <p className="mb-0 fs-5 fade-in-text">Care Comply</p>
        </div>
      </div>

      <p>
        We are a compliance-focused consulting firm, dedicated to helping
        businesses grow by providing expert financial and legal solutions. With
        a proven track record of success, we’ve partnered with diverse
        organizations to ensure seamless compliance and drive
        sustainable growth.
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
