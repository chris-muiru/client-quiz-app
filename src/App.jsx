import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import "./assets/output.css";
import Main from "./Main";
import Login from "./components/authentication/LogIn";
import Header from "./components/Header";
// import PrivateRoute from "./utils/PrivateRoute";
import { useAuthContext } from "./AuthProvider";
const App = () => {
	let { user } = useAuthContext();
	return (
		<div className="w-full bg-slate-700 block fixed h-full">
			<Header />
			<Router>
				<Routes>
					<Route
						path="/dash/*"
						element={!user ? <Navigate to="/auth" /> : <Main />}
					></Route>
					<Route path="/auth" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
