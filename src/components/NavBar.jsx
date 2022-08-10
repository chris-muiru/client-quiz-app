import { useAuthContext } from "../Context/AuthProvider"
import { useState, useEffect } from "react"
const NavBar = () => {
	let { logoutUser, getToken } = useAuthContext()
	let [score, setScore] = useState(0)
	const fetchScore = async () => {
		let URL = "http://localhost:8000/quiz/score/"
		let response = await fetch(URL, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getToken()}`,
			},
		})
		let { total } = await response.json()
		setScore(total)
	}
	useEffect(() => {
		fetchScore()
	}, [])
	return (
		<div className="px-10 m-auto flex justify-between w-3/4 box-border h-20">
			<div className="relative right-10 pt-2 text-green-600 font-bold">
				Score: <span className="text-white">{score}</span>
			</div>
			<div className=" w-10 h-10 rounded-3xl hover:border relative left-10" onClick={logoutUser}>
				<button className="mt-2 ml-2">
					<svg
						className="text-white w-5 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
						></path>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default NavBar
