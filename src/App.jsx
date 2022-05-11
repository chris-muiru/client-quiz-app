import { BrowserRouter as Router } from "react-router-dom";
import "./assets/output.css";
import Header from "./components/Header";
import AuthProvider from "./AuthProvider";
import AuthRoutes from "./Routes/AuthRoutes";
import MainRoutes from "./Routes/MainRoutes";
const App = () => {
	return (
		<div className="w-full bg-slate-700 block fixed h-full">
			<Header />
			<AuthProvider>
				<Router>
					<MainRoutes />
					<AuthRoutes />
				</Router>
			</AuthProvider>
		</div>
	);
};

export default App;
