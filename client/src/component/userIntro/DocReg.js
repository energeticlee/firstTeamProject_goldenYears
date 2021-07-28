import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../App";

const DocReg = () => {
	const data = useContext(dataContext);
	const dispatch = data.dispatch;
	const docHistory = useHistory();

	const handleSubmitDocData = (event) => {
		event.preventDefault();

		const docName = event.target.name.value;
		const docEmail = event.target.email.value;
		const docConfirmEmail = event.target.confirm_email.value;
		const docPassword = event.target.password.value;
		const docConfirmPW = event.target.confirm_password.value;

		if (docConfirmEmail != docEmail) {
			alert("Email addresses don't match, please enter again.");
		}

		if (docConfirmPW != docPassword) {
			alert("Passwords don't match, please enter again.");
		}

		const sendData = async () => {
			// Please change the localhost number according to your server port number
			const response = await fetch("/api/doctor", {
				method: "POST",
				mode: "cors",
				body: JSON.stringify({
					name: docName,
					email: docEmail,
					password: docPassword,
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
				dispatch({ type: "PUSHDOCTORID", payload: data._id });
				alert("You have successfully registered!");
				docHistory.push("/doctorHome");
			}
		};
		sendData();
	};

	return (
		<div>
			<form onSubmit={handleSubmitDocData}>
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
				<input type="submit" value="Create Account" />
			</form>
		</div>
	);
};

export default DocReg;
