import { Route, Routes } from "react-router-dom";
import LogIn from "../components/authentication/LogIn";

const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/auth" element={<LogIn />} />
		</Routes>
	);
};

export default AuthRoutes;
