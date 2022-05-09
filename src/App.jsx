import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/output.css";
import Main from "./Main";
import Login from "./components/authentication/LogIn";
import Header from "./components/Header";

const App = () => {
	return (
		<div className="w-full bg-slate-700 block fixed h-full">
			<Header />
			<Router>
				<Routes>
					<Route path="dash/" element={<Main />} />
					<Route path="auth/" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
