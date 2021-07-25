import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const HomeNavBar = () => {
	return (
		<>
			<nav>
				<ol>
					<Link to="/patients">
						<li>For Patients</li>
					</Link>
					<Link to="/doctors">
						<li>For Doctors</li>
					</Link>
				</ol>
			</nav>
		</>
	);
};

export default HomeNavBar;
