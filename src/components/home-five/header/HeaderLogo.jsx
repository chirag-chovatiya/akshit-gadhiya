import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/NewLogo-1.png";
function HeaderLogo() {
  return (
    <div className="d-flex align-items-center">
      <div className="brand-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="light-version-logo header-logo-large"  />
        </Link>
      </div>
      {/* <div className="ms-2 ">
        <p className="mb-0 fs-5 fade-in-text">Care Comply</p>
      </div> */}
    </div>
  );
}

export default HeaderLogo;
