import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/loader/ScrollToTop";
import Preloader from "../components/loader/Preloader";
function LayoutLoader() {
	return (
		<>
			<Preloader />
			<Outlet />
			<ScrollToTop />
		</>
	);
}

export default LayoutLoader;
