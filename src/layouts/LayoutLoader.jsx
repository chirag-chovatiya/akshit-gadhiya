import { Outlet } from "react-router-dom";
import Preloader from "../components/Loader/loader";
import ScrollToTop from "../components/loader/ScrollToTop";
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
