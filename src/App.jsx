import { BrowserRouter as Router } from "react-router-dom";
import "./assets/output.css";
import Header from "./components/Header";
import AuthProvider from "./AuthProvider";
import ConnectorRoute from "./Routes/ConnectorRoute";
import AuthRoutes from "./Routes/AuthRoutes";
const App = () => {
	return (
		<div className="w-full bg-slate-700 block fixed h-full">
			<Header />
			<AuthProvider>
				<Router>
					<ConnectorRoute />
					<AuthRoutes />
				</Router>
			</AuthProvider>
		</div>
	);
};

export default App;
