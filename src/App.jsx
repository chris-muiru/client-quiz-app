import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import "./assets/output.css";
import Footer from "./components/Footer";
function App() {
	return (
		<div className="w-full bg-slate-700 block fixed h-full">
			<Header />
			<NavBar />
			<Main />
			<Footer/>
		</div>
	);
}

export default App;
