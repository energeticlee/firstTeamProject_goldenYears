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
							<a className="button is-primary" id="patients">
								<Link to={`/patients`} style={{ color: "white" }}>
									<strong>For Patients</strong>
								</Link>
							</a>
							<a className="button is-light" id="doctors">
								<Link to={`/doctors`} style={{ color: "white" }}>
									<strong>For Doctors</strong>
								</Link>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HomeNavBar;
