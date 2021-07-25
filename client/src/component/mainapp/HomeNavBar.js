import React from "react";
// import "./App.css";
import { Link } from "react-router-dom";
import PatientIntro from "../userIntro/PatientIntro";
import DocIntro from "../userIntro/DocIntro";

const HomeNavBar = () => {
	return (
		<>
			<nav>
				<ol>
					<Link to="/patients" component={PatientIntro}>
						<li>For Patients</li>
					</Link>
					<Link to="/doctors" component={DocIntro}>
						<li>For Doctors</li>
					</Link>
				</ol>
			</nav>
		</>
	);
};

export default HomeNavBar;
