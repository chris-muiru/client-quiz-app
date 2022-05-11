import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useAuthContext } from "../AuthProvider";
import Main from "../Main";
const MainRoutes = () => {
	let { user } = useAuthContext();
	return (
		<Routes>
			<Route
				path="/dash/*"
				element={!user ? <Navigate to="/auth" /> : <Main />}
			/>
		</Routes>
	);
};

export default MainRoutes;
