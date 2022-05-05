import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import "./assets/output.css";
import Footer from "./components/Footer";
import Question from "./components/Question";
import { useParams } from "react-router-dom";
function App() {
	return (
		<div className="w-full bg-slate-700 block fixed h-full">
			<Header />
			<NavBar />
			<Router>
				<Routes>
					<Route path="" element={<Main />} />
					<Route
						path="/quiz/:id"
						element={
							<>
								<Question id=""/>
							</>
						}
					/>
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
