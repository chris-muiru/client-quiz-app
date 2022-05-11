import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NavRoutes from "./Routes/NavRoutes";

const Main = () => {
	return (
		<div>
			<NavBar />
			<NavRoutes />
			<Footer />
		</div>
	);
};

export default Main;
