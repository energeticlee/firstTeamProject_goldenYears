import React from "react";
// import "./App.css";
import { Link } from "react-router-dom";

const HomeNavBar = () => {
	return (
		<div>
			<nav className="navbar-menu is-active">
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a className="button is-primary">
								<Link to={`/patients`}>For Patients</Link>
							</a>
							<a className="button is-light">
								<Link to={`/doctors`}>For Doctors</Link>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HomeNavBar;
