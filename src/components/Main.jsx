import QuestionHeader from "./QuestionHeader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Main = () => {
	let [questions, setQuestions] = useState([]);
	/**
	 * contains all the quizlets from the backend api
	 */
	// fetch questions from api
	let fetchQuestions = async () => {
		let data = await fetch("http://localhost:8000/quiz", {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		});
		data = await data.json();
		setQuestions(data);
	};
	useEffect(() => {
		fetchQuestions();
	}, []);
	console.log(questions);

	return (
		<div className="flex w-3/4 m-auto flex-col mt-10 xl:w-1/2">
			{questions.map(({ id, question }) => {
				return (
					<Link to={`/quiz/${id}`}>
						<QuestionHeader question={question} />
					</Link>
				);
			})}
		</div>
	);
};
export default Main;
