import { Link } from "react-router-dom";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="aximo-default-btn aximo-header-btn pill corn-btn" to="/contact-us">
				<span className="aximo-label-up">Contact Us</span>
				<span className="aximo-label-up">Contact Us</span>
			</Link>
			<Link className="aximo-default-btn aximo-header-btn pill corn-btn ms-3" to="/login">
				<span className="aximo-label-up">Login</span>
				<span className="aximo-label-up">Login</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
