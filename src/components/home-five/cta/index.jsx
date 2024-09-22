import { Link } from "react-router-dom";
import Shape4Img from "../../../assets/images/v5/shape4.png";
function Cta() {
  return (
    <div className="aximo-cta2-section aximo-section-padding extra-side-margin green-bg my-5">
      <div className="container">
        <div className="aximo-cta2-wrap">
          <h2>Ensure Full Compliance – Schedule Your Consultation Today!</h2>
          <p>
            Get Started Today Ready to ensure your business is fully
            compliant? Contact us today to schedule a consultation or explore
            our services further to see how we can assist you."
          </p>
          <Link className="aximo-default-btn corn-btn pill" to="/contact-us">
            <span className="aximo-label-up">Get In Touch</span>
            <span className="aximo-label-up">Get In Touch</span>
          </Link>
        </div>
      </div>
      <div className="aximo-cta-shape3">
        <img src={Shape4Img} alt="shape" />
      </div>
    </div>
  );
}

export default Cta;
