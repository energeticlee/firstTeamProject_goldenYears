import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../App";
// import { Redirect } from "react-router";

// import { useRef } from "react-router-dom";

const PatientReg = () => {
	const data = useContext(dataContext);
	const history = useHistory();
	const dispatch = data.dispatch;

	const handleSubmitPatientData = (event) => {
		event.preventDefault();

		const patientName = event.target.name.value;
		const patientEmail = event.target.email.value;
		const patientConfirmEmail = event.target.confirm_email.value;
		const patientPassword = event.target.password.value;
		const patientConfirmPW = event.target.confirm_password.value;

		if (patientConfirmEmail != patientEmail) {
			alert("Email addresses don't match, please enter again.");
		}

		if (patientConfirmPW != patientPassword) {
			alert("Passwords don't match, please enter again.");
		}

		const sendData = async () => {
			// Please change the localhost number according to your server port number

			const response = await fetch("/api/user", {
				method: "POST",
				mode: "cors",
				body: JSON.stringify({
					name: patientName,
					email: patientEmail,
					password: patientPassword,
				}),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			if (response.status === 400) {
				const data = await response.json();
				console.log("data", data.error);
			} else if (response.status === 200) {
				const data = await response.json();
				dispatch({ type: "PUSHPATIENTID", payload: data._id });
				history.push("/home/tests");
			}
		};
		sendData();
	};

	return (
		<div>
			<form onSubmit={handleSubmitPatientData}>
				<label>Name:</label>
				<br />
				<input
					type="text"
					name="name"
					id="name"
					placeholder="John Smith"
					required
				/>
				<br />
				<br />
				<label>Email:</label>
				<br />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="johnsmith@gmail.com"
					required
				/>
				<br />
				<br />
				<label>Confirm email:</label>
				<br />
				<input
					type="email"
					name="confirm_email"
					id="confirm_email"
					placeholder="johnsmith@gmail.com"
					required
				/>
				<br />
				<br />
				<label>Password:</label>
				<br />
				<input
					type="password"
					name="password"
					id="password"
					placeholder="************"
					required
				/>
				<br />
				<br />
				<label>Confirm password:</label>
				<br />
				<input
					type="password"
					name="confirm_password"
					id="confirm_password"
					placeholder="************"
					required
				/>
				<br />
				<br />
				<button>Create Account</button>
			</form>
		</div>
	);
};

export default PatientReg;
