import React from "react";
import { useEffect, useState, useContext } from "react";
import { dataContext } from "../../../App";
import { Link, Route, useRouteMatch } from "react-router-dom";
import PatientEditProfile from "./PatientEditProfile";

const MyProfile = () => {
	let { path, url } = useRouteMatch();
	const contextData = useContext(dataContext);
	const states = contextData.states;
	console.log(states);
	const [data, setUserData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			// Please change the localhose number according to your server port number
			const response = await fetch("http://localhost:3333/api/user", {
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			console.log(response);
			const data = await response.json();
			setUserData(data);
		};
		getData();
	}, []);
	return (
		<>
			<div>
				{data.map((userElement) => {
					return (
						<div key={userElement._id}>
							<div>Name: {userElement.name}</div>
							<div>Email: {userElement.email}</div>
							<div>Encrypted Password: {userElement.password}</div>
							<div>Photo: {userElement.photo}</div>
							<div>Age: {userElement.age}</div>
							<div>Gender: {userElement.gender}</div>
							<div>Height: {userElement.height}</div>
							<div>Weight: {userElement.weight}</div>
							<div>Health Conditions: {userElement.healthCondition}</div>
							<div>My Doctor: {userElement.myDoctor}</div>
							<br />
						</div>
					);
				})}
			</div>
			<Link to={`${url}/edit`}>
				<button>Edit Profile</button>
			</Link>
			<Route path={`${path}/edit`}>
				<PatientEditProfile />
			</Route>
		</>
	);
};

export default MyProfile;
