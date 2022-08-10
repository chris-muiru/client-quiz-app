import { createContext, useContext, useEffect, useState, useRef } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuthContext() {
	return useContext(AuthContext);
}
const BASE = "http://localhost:8000";

const AuthProvider = ({ children }) => {
	let refreshInterval = useRef(0);
	const [user, setUser] = useState(() =>
		localStorage.getItem("quizAppTokens")
			? jwtDecode(localStorage.getItem("quizAppTokens"))
			: null
	);
	const [token, setToken] = useState(() =>
		localStorage.getItem("quizAppTokens")
			? JSON.parse(localStorage.getItem("quizAppTokens"))
			: null
	);

	const loginUser = async (e) => {
		e.preventDefault();
		console.log(`${BASE}/api/token/`);
		const response = await fetch(`${BASE}/api/token/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: e.target.username.value,
				password: e.target.password.value,
			}),
		});
		let data = await response.json();
		if (response.status === 200) {
			setToken(data);
			setUser(jwtDecode(data.access));
			localStorage.setItem("quizAppTokens", JSON.stringify(data));
			window.location = "/dash";
		} else {
			alert("Invalid credentials");
		}
	};
	let logOutUser = () => {
		setToken(null);
		setUser(null);
		localStorage.removeItem("quizAppTokens");
		window.location = "/auth";
	};
	const refreshToken = async () => {
		const response = await fetch(`${BASE}/api/token/refresh/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refresh: token.refresh }),
		});
		let data = await response.json();
		if (response.status === 200) {
			setToken(data);
			setUser(jwtDecode(data.access));
			localStorage.setItem("quizAppTokens", JSON.stringify(data));
		} else {
			logOutUser();
		}
	};

	const getToken = () => {
		/**
		 * check if token is expired,if true,clear hr localstorege
		 * and change location to /auth,else return the access token.
		 */
		if (jwtDecode(token.access).exp < Date.now() / 1000) {
			localStorage.clear();
			window.location = "/auth";
		}
		return token.access;
	};
	// if token not fetched,redirect to main page
	let contextData = {
		user: user,
		loginUser: loginUser,
		logoutUser: logOutUser,
		getToken: getToken,
	};
	useEffect(() => {
		refreshInterval.current = setInterval(() => {
			if (token) {
				refreshToken();
			}
		}, 240000);
		return () => {
			clearInterval(refreshInterval.current);
		};
	}, [token]);
	return (
		<AuthContext.Provider value={contextData}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
