import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AuthProvider from "./AuthProvider";
import NavRoutes from "./Routes/NavRoutes";

const Main = () => {
	return (
		<div>
			<AuthProvider>
				<NavBar />
				<NavRoutes />
				<Footer />
			</AuthProvider>
		</div>
	);
};

export default Main;
