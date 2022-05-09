import React from "react";
import Main from "../components/Main";
import Question from "../components/Question";
import { Routes, Route } from "react-router-dom";

const NavRoutes = () => {
	return (
		<Routes>
			<Route path="" element={<Main />} />
			<Route path="/quiz/:id" element={<Question />} />
		</Routes>
	);
};
export default NavRoutes;
