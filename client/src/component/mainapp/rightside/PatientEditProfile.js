import React from "react";
import { useEffect, useState, useContext } from "react";
import { dataContext } from "../../../App";

const PatientEditProfile = () => {
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
					<form>
						return ( key={userElement._id}
						<label>Name:</label>
						<br />
						<input
							type="text"
							name="name"
							id="name"
							placeholder={userElement.name}
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
							placeholder={userElement.email}
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
							placeholder={userElement.password}
							required
						/>
						<br />
						<br />
						<label>Photo:</label>
						<br />
						<input
							type="file"
							name="photo"
							id="photo"
							placeholder={userElement.photo}
							accept="image/png. image/jpeg"
							required
						/>
						<br />
						<br />
						<label>Age:</label>
						<br />
						<input
							type="number"
							name="age"
							id="age"
							placeholder={userElement.age}
							required
						/>
						<br />
						<br />
						<label>Gender:</label>
						<br />
						<input
							type="text"
							name="gender"
							id="gender"
							placeholder={userElement.gender}
							required
						/>
						<br />
						<br />
						<label>Height:</label>
						<br />
						<input
							type="number"
							name="height"
							id="height"
							placeholder={userElement.height}
							required
						/>
						<br />
						<br />
						<label>Weight:</label>
						<br />
						<input
							type="number"
							name="weight"
							id="weight"
							placeholder={userElement.weight}
							required
						/>
						<br />
						<br />
						<label>Health Conditions:</label>
						<br />
						<input
							type="text"
							name="healthConditions"
							id="healthConditions"
							placeholder={userElement.healthCondition}
							required
						/>
						<br />
						<br />
						<label>My Doctor:</label>
						<br />
						<input
							type="text"
							name="myDoctor"
							id="myDoctor"
							placeholder={userElement.myDoctor}
							required
						/>
						<br />
						<br />
						<input type="submit" value="Save Changes" />
						);
					</form>;
				})}
			</div>
		</>
	);
};

export default PatientEditProfile;
