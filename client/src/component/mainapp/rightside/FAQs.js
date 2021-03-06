import React from "react";
// import faqsData from "../../../faqsData";
import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../../App";

const FAQs = () => {
	// const [isActive, setIsActive] = useState(false);

	const data = useContext(dataContext);
	const dispatch = data.dispatch;
	const history = useHistory();

	useEffect(() => {
		if (Object.keys(data.states).length === 0) {
			console.log(Object.keys(data.states).length === 0);
			const getData = async () => {
				// Please change the localhost number according to your server port number
				const response = await fetch("/api/session", {
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				});
				const message = await response.json();
				if (message.error !== "Not Authenticated") {
					dispatch({ type: "PUSHPATIENTID", payload: message });
				} else {
					history.push("/");
				}
			};
			getData();
		}
	}, []);

	// const Accordion = (question, answer) => {
	// 	const handleClick = (e) => {
	// 		const panel = e.target.nextElementSibling;
	// 		panel.style.display === "none"
	// 			? (panel.style.display = "block")
	// 			: (panel.style.display = "none");
	// 	};

	// 	return (
	// 		<div className="faqs-container">
	// 			<button className="accordion" onClick={handleClick}>
	// 				{question}
	// 			</button>
	// 			<div id="panel" className="panel" style={{ display: "none" }}>
	// 				<p>{answer}</p>
	// 			</div>
	// 		</div>
	// 	);
	// };

	// return (
	// 	<>
	// 		{faqsData.map((data) => {
	// 			return Accordion(data.question, data.answer);
	// 		})}
	// 	</>
	// );

	return (
		<>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							This is a question?
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							This is the answer to the question.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							This is a question?
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							This is the answer to the question.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							This is a question?
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							This is the answer to the question.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQs;
