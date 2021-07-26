import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PatientEditProfile = () => {
	const patientHistory = useHistory();
	const handlePatientUpdate = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<h1>My Profile</h1>
			<div>
				<form onSubmit={handlePatientUpdate}>
					<label>Name:</label>
					<br />
					<input
						type="text"
						name="name"
						id="name"
						placeholder="<use history>"
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
			</div>
			<button>Edit Profile</button>
		</>
	);
};

export default PatientEditProfile;
