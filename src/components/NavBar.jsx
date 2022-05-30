import { useAuthContext } from "../AuthProvider";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
const NavBar = () => {
	let { logoutUser, getToken } = useAuthContext();
	let [score, setScore] = useState(0);
	const fetchScore = async () => {
		let URL = "http://localhost:8000/quiz/score/";
		let response = await fetch(URL, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getToken()}`,
			},
		});
		let { total } = await response.json();
		setScore(total);
	};
	useEffect(() => {
		fetchScore();
	}, []);
	return (
		<div className="">
			<nav className="p-4 rounded-md">
				<div className="px-10 m-auto flex justify-between w-3/4">
					<div className="relative right-10 pt-2 text-green-600 font-bold">
						Score: <span className="text-white">{score}</span>
					</div>
					<div
						align="center"
						className="bg-transparent rounded-3xl absolute  right-1/4 hover:bg-green-700  text-white border-white hover:border-2 box-border"
						onClick={logoutUser}
					>
						<button className="m-3">
							<FontAwesomeIcon icon={faRightFromBracket} />
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
