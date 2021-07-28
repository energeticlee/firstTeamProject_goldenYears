import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../App";

const DocLogin = () => {
	const data = useContext(dataContext);
	const dispatch = data.dispatch;
	const docHistory = useHistory();
	const [errorMessage, setMessage] = useState();

	const handleDocLogin = (event) => {
		event.preventDefault();
		const docEmail = event.target.email.value;
		const docPassword = event.target.password.value;

		const sendData = async () => {
			// Please change the localhost number according to your server port number
			const response = await fetch("/api/doctorSession/new", {
				method: "POST",
				mode: "cors",
				body: JSON.stringify({
					password: docPassword,
					email: docEmail,
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
				const data = await response.json();
				dispatch({ type: "PUSHDOCTORID", payload: data._id });
				docHistory.push("/doctorHome");
			}
		};
		sendData();
	};
	return (
		<div>
			<form onSubmit={handleDocLogin}>
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
			<br />
			<div>{errorMessage}</div>
		</div>
	);
};

export default DocLogin;
