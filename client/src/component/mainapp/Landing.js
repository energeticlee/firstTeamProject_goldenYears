import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<>
			<nav>
				<ol>
					<li>Patients</li> //* need to add dropdown for patients' login/reg
					<li>Doctors</li> //* need to add dropdown for doctors' login/reg
				</ol>
			</nav>
			<h1>GoldenYears</h1>
			<p>
				Cras ultricies mi eu turpis hendrerit fringilla. Duis leo. Quisque ut
				nisi. Donec id justo. Nulla neque dolor, sagittis eget, iaculis quis,
				molestie non, velit.
			</p>
		</>
	);
};
export default Landing;
