import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useAuthContext } from "../AuthProvider";
const Question = () => {
	let [questionDetails, setQuestionDetails] = useState([]);
	let [answerCorrect, setAnswerCorrect] = useState(false);
	let btnOnclickRef = useRef();
	let { id } = useParams();
	let { getToken } = useAuthContext();
	let fetchQuestionSelected = async () => {
		/**
		 * fetch all questions from quiz
		 * save the questions in questionDetails state
		 */
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
	const isAnswerCorrect = (status) => {
		/**
		 * check the status of question.
		 * use spefied classNames based on the status answer
		 */
		let response = status ? "Correct Answer" : "Incorrect answer";
		let color = status ? "bg-green-700" : "bg-red-600";
		return (
			<div
				ref={btnOnclickRef}
				className={`hidden ${color} rounded-md mb-3 text-center p-5`}
			>
				{response}
			</div>
		);
	};
	const submitAnswer = async (event) => {
		/**
		 * post form data to /quiz/:id.
		 * object returns - {status:correct}
		 * if status correct,set answerCorrect to true else false
		 */
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
		let { status } = data;
		setAnswerCorrect(() => {
			if (status === "correct") {
				return true;
			}
			return false;
		});
	};
	const onBtnClick = () => {
		btnOnclickRef.current.style.display = "block";
	};
	let answer = isAnswerCorrect(answerCorrect);
	let appendQuestion = (object) => {
		/**
		 * an array containing data sen by
		 */
		let arr = [];
		if (object.length !== 0) {
			let { question, choices } = object;
			let { opp1, opp2 } = choices[0];
			arr.push(
				<div className="m-auto">
					{answer}
					<div className="bg-slate-800 p-20 rounded-xl">
						<h2 className="mb-3 sm:text-center text-green-500 ">
							{question}
						</h2>
						<div className="flex justify-center">
							<form method="post" onSubmit={submitAnswer}>
								<input
									type="radio"
									id="opp1"
									name="quizgroup"
									className="my-5 mr-5"
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
									className="my-5 mr-5"
									value={opp2}
								/>
								<label for="opp2">{opp2}</label>
								<br />
								<div className="flex justify-center">
									<button
										type="submit"
										onClick={onBtnClick}
										className="bg-green-500 border-none rounded-md p-3 w-28 mt-10"
									>
										Submit
									</button>
								</div>
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
	return (
		<div className="mt-20 w-3/4  text-white m-auto rounded-sm">
			{questionArr}
		</div>
	);
};

export default Question;
