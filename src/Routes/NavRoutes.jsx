import Dashboard from "../components/DashBoard";
import Question from "../components/Question";
import { Routes, Route } from "react-router-dom";
const NavRoutes = () => {
	return (
		<Routes>
			<Route path=":id" element={<Question />} />
			<Route path="" element={<Dashboard />} />
		</Routes>
	);
};
export default NavRoutes;
