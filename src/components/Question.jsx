import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Question = () => {
	let { id } = useParams();
	let [questionDetails, setQuestionDetails] = useState("");
	let fetchQuestionSelected = async () => {
		let URL = `http://localhost:8000/quiz/${id}`;
		let data = await fetch(URL, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		});
		data = await data.json();
		setQuestionDetails(data[0]);
	};
	let { question, answer, discussion } = questionDetails;

	useEffect(() => {
		fetchQuestionSelected();
	}, []);
	console.log(questionDetails);
	return (
		<div className="mt-20 text-white text-center w-3/4 m-auto rounded-sm">
			<div>{question}</div>
		</div>
	);
};

export default Question;
