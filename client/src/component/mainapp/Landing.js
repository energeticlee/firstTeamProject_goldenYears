import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
	return (
		<>
			<h1>GoldenYears</h1>
			<p>
				Cras ultricies mi eu turpis hendrerit fringilla. Duis leo. Quisque ut
				nisi. Donec id justo. Nulla neque dolor, sagittis eget, iaculis quis,
				molestie non, velit.
			</p>
			//* insert preview images
			<Link to="/login">Login</Link>
			<Link to="/registration">Register</Link>
		</>
	);
};
export default Landing;
