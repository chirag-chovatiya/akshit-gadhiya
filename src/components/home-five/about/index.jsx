import { Link } from "react-router-dom";
import Thumb1Img from "../../../assets/images/v5/thumb1.png";
function About() {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="aximo-content-thumb3 ">
							<img src={Thumb1Img} alt="Thumb" />
						</div>
					</div>
					<div className="col-lg-7 d-flex align-items-center">
						<div className="aximo-default-content libre-font m-left-gap-small">
							<h2>Expanding your compliance  with expert care for unprecedented growth.</h2>
							<p>
							Care Comply Private Limited is dedicated to providing comprehensive financial and legal solutions tailored specifically for the corporate world. Our mission is to ensure seamless compliance and strategic growth for businesses, leveraging our expertise across various domains.{" "}
							</p>
							<p>
							At Care Comply, our approach is encapsulated in our tagline: "Connect - Consult - Comply." We connect with our clients to understand their unique needs, consult with tailored solutions, and ensure they comply with all necessary regulations efficiently.
							</p>
							<div className="aximo-btn-wrap">
								<Link className="aximo-default-btn pill corn-btn" to="/contact-us">
									<span className="aximo-label-up">Explore more</span>
									<span className="aximo-label-up">Explore more</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
