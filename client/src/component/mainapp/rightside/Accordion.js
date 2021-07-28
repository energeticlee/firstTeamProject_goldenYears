import React from "react";

function Accordion(question, answser) {
	const handleClick = () => {
		const panel = document.getElementsById("panel");
		console.log(panel);

		// const panel = accordion.nextElementSibling;
		//panel.style.display = "none";
		//panel.style.display === "none" ? "block" : "none";
	};

	return (
		<div>
			<button className="accordion" onClick={handleClick}>
				This is a question.
			</button>
			<div id="panel">
				<p>This is the answer.</p>
			</div>
		</div>
	);
}

export default Accordion;
