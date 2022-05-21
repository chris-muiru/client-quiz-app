import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../AuthProvider";
const Question = () => {
	let [questionDetails, setQuestionDetails] = useState([]);
	let { id } = useParams();
	let { getToken } = useAuthContext();
	let fetchQuestionSelected = async () => {
		let URL = `http://localhost:8000/quiz/${id}`;
		let data = await fetch(URL, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getToken()}`,
			},
		});
		data = await data.json();
		setQuestionDetails(data);
	};
	const submitAnswer = async (event) => {
		event.preventDefault();
		let URL = `http://localhost:8000/quiz/${id}/`;
		event.preventDefault();
		let data = await fetch(URL, {
			method: "POST",
			MODE: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getToken()}`,
			},
			body: JSON.stringify({
				answer: event.target.quizgroup.value,
			}),
		});
		data = await data.json();
		console.log(data);
	};
	let appendQuestion = (object) => {
		let arr = [];
		if (object.length !== 0) {
			let { question, choices } = object;
			let { opp1, opp2 } = choices[0];
			arr.push(
				<div className="m-auto">
					<div className="bg-slate-800 p-20 rounded-xl">
						<h2 className="mb-3 text-center text-green-500 ">
							{question}
						</h2>
						<div className="">
							<form method="post" onSubmit={submitAnswer}>
								<input
									type="radio"
									id="opp1"
									name="quizgroup"
									className="my-5 mr-10"
									value={opp1}
								/>
								<label for="opp1" className="">
									{opp1}
								</label>
								<br />
								<input
									type="radio"
									id="opp2"
									name="quizgroup"
									className="my-5 mr-10"
									value={opp2}
								/>
								<label for="opp2">{opp2}</label>
								<br />
								<button
									type="submit"
									className="bg-green-500 border-none rounded-md p-3 w-44 mt-10"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			);
		}
		return arr;
	};
	useEffect(() => {
		fetchQuestionSelected();
	}, []);
	// todo: come up with logic that allows the fetchQuestionSelected to always update questionDetails after every render
	let questionArr = appendQuestion(questionDetails);
	console.log(questionArr);
	return (
		<div className="mt-20 w-3/4  text-white m-auto rounded-sm">
			{questionArr}
		</div>
	);
};

export default Question;
