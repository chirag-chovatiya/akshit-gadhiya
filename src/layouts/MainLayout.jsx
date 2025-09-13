import { Outlet } from "react-router-dom";
import Navbar from "../components/comman/Navbar";
import Footer from "../components/comman/Footer";

function MainLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default MainLayout;
