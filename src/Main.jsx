import React from "react"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import NavRoutes from "./Routes/NavRoutes"

const Main = () => {
	return (
		<>
			<NavBar />
			<NavRoutes />
			<Footer/>
		</>
	)
}

export default Main
