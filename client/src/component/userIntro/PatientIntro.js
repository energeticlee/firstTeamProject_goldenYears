import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import PatientLogin from "./PatientLogin";
import PatientReg from "./PatientReg";

const PatientIntro = () => {
	let { path, url } = useRouteMatch();

	return (
		<>
			<h1>Patients</h1>
			<span>
				<Link to={`${url}/login`}>
					<button>Login</button>
				</Link>
				<Link to={`${url}/register`}>
					<button>Register</button>
				</Link>
			</span>
			<br />
			<br />
			<Switch>
				<Route path={`${path}/login`}>
					<PatientLogin />
				</Route>
				<Route path={`${path}/register`}>
					<PatientReg />
				</Route>
			</Switch>
		</>
	);
};

export default PatientIntro;
