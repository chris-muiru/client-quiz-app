import React, { useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = React.createContext();
export const useAuthContext = () => {
	return useContext(AuthContext);
};
const BASE_URL = "http:localhost:8000";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [token, setToken] = useState({});

	const loginUser = async (e) => {
		const response = await fetch(`${BASE_URL}/api/token/`, {
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
			localStorage.setItem("quizAppTokens", data);
			window.location = "/dash";
		} else {
			alert("something went wrong");
		}
	};
	useEffect(() => {}, []);
	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
