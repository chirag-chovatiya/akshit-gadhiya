import { Link } from "react-router-dom";
import Shape1Img from "../../../assets/images/v5/shape1.png";
function Hero() {
  return (
    <div className="aximo-hero-section5">
      <div className="container">
        <div className="aximo-hero-content5">
          <h1>
            EXPERT CARE IN EVERY
            <span className="aximo-hero-shape-title">
              COMPLIANCE
              {/* <img
                className="aximo-hero-wave-shape"
                src={Shape1Img}
                alt="Shape"
              /> */}
            </span>
          </h1>
          <p>
            At Care Comply Private Limited, we deliver Expert Care in Every
            Compliance, ensuring your business stays aligned with all regulatory
            requirements. Our dedicated team provides tailored financial and
            legal solutions to support your business needs. Trust us to handle
            your compliance, so you can focus on what you do best.
          </p>
          <div className="aximo-hero-btn-wrap center">
            <Link className="aximo-default-btn pill corn-btn" to="/contact-us">
              <span className="aximo-label-up">Let's Talk</span>
              <span className="aximo-label-up">Let's Talk</span>
            </Link>
            {/* <Link
              className="aximo-default-btn aximo-default-btn-outline pill outline-white"
              to="/service"
            >
              <span className="aximo-label-up">Explore Our Services</span>
              <span className="aximo-label-up">Explore Our Services</span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
