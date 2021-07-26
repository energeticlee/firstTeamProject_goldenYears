import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PatientLogin = () => {
	const patientHistory = useHistory();
	const [errorMessage, setMessage] = useState("Please enter your details");
	const handlePatientLogin = (event) => {
		event.preventDefault();
		const userEmail = event.target.email.value;
		const userPassword = event.target.password.value;

		const sendData = async () => {
			// Please change the localhost number according to your server port number
			const response = await fetch("http://localhost:3001/api/session/new", {
				method: "POST",
				mode: "cors",
				body: JSON.stringify({
					password: userPassword,
					email: userEmail,
				}),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			if (response.status === 400) {
				const data = await response.json();
				console.log("data", data.error);
				setMessage(data.error);
			} else if (response.status === 200) {
				patientHistory.push("/home");
			}
		};
		sendData();
	};
	return (
		<div>
			<form onSubmit={handlePatientLogin}>
				<label>Email:</label>
				<br />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email address"
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
					placeholder="Enter password"
					required
				/>
				<br />
				<br />
				<input type="submit" value="Enter" />
			</form>
			<div>{errorMessage}</div>
		</div>
	);
};

export default PatientLogin;
