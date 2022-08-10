import QuestionHeader from "./QuestionHeader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext } from "../Context/AuthProvider";
const DashBoard = () => {
	/**
	 * contains all the quizlets from the backend api
	 */
	// fetch questions from api
	let [questions, setQuestions] = useState([]);
	let { getToken } = useAuthContext();
	let fetchQuestions = async () => {
		let data = await fetch("http://localhost:8000/quiz", {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getToken()}`,
			},
		});
		data = await data.json();
		setQuestions(data);
	};
	useEffect(() => {
		fetchQuestions();
	}, []);

	return (
		<div className="flex w-3/4 m-auto flex-col mt-10 xl:w-1/2">
			{questions.map(({ id, question }) => {
				return (
					<Link to={`/dash/${id}`}>
						<QuestionHeader question={question} />
					</Link>
				);
			})}
		</div>
	);
};
export default DashBoard;
