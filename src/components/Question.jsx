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
	useEffect(() => {
		fetchQuestionSelected();
	}, []);
	
	return (
		<div className="mt-20 text-white text-center w-3/4 m-auto rounded-sm">
		
		</div>
	);
};

export default Question;
