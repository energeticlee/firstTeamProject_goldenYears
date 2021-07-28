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

	const Accordion = (question, answer) => {
		const handleClick = (e) => {
			const panel = e.target.nextElementSibling;
			panel.style.display === "none"
				? (panel.style.display = "block")
				: (panel.style.display = "none");
		};

		return (
			<div>
				<button className="accordion" onClick={handleClick}>
					{question}
				</button>
				<div id="panel" className="panel" style={{ display: "none" }}>
					<p>{answer}</p>
				</div>
			</div>
		);
	};

	return <>{Accordion("123", "567")}</>;
};

export default FAQs;
