import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ShowPatientProfile = () => {
	const patientHistory = useHistory();

	const fetchData = async () => {
		const response = await fetch("http://localhost:3001/api/session/new", {
			method: "GET",
			mode: "cors",
			body: JSON.stringify({}),
		});
	};

	return (
		<>
			<h1>My Profile</h1>
			<div></div>
			<button>Edit Profile</button>
		</>
	);
};

export default ShowPatientProfile;
