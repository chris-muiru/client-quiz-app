import { BrowserRouter as Router } from "react-router-dom"
import "./assets/output.css"
import Header from "./components/Header"
import AuthProvider from "./Context/AuthProvider"
import AuthRoutes from "./Routes/AuthRoutes"
import MainRoutes from "./Routes/MainRoutes"
const App = () => {
	return (
		<div className="bg-slate-700 overflow-auto h-screen">
			<Header />
			<AuthProvider>
				<Router>
					<MainRoutes />
					<AuthRoutes />
				</Router>
			</AuthProvider>
		</div>
	)
}

export default App
