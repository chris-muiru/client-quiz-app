import Quiz from "./Quiz";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Main = () => {
	let [questions, setQuestions] = useState("");
	/**
	 * contains all the quizlets from the backend api
	 */
	// fetch questions from api
	let fetchQuestions = async () => {
		let questions = await fetch("http://localhost:8000/quiz", {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		});
		let data = await questions.json();
		setQuestions(data);
	};
	console.log(questions[0]);
	useEffect(() => {
		fetchQuestions();
	}, []);

	let rows = [];
	for (let i = 0; i < questions.length; i++) {
		let pk=questions[i].quiz_pk
        console.log(pk)
        rows.push(
			<Link to={`/test/${pk}`}>
				<Quiz question={questions[i].question} />
			</Link>
		);
	}
	console.log(rows);
	return (
		<div className="flex w-3/4 m-auto flex-col mt-10 xl:w-1/2">
			<Router>{rows}</Router>
		</div>
	);
};
export default Main;
