import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./../AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
	let { user } = useAuthContext();
	return (
		<Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>
	);
};

export default PrivateRoute;
