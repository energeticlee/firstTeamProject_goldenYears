import React from "react";
import { Link } from "react-router-dom";
import PatientLogin from "./PatientLogin";
import PatientReg from "./PatientReg";
// import { useState } from "react";

const PatientIntro = () => {
	// let { path, url } = useRouteMatch();

	return (
		<>
			<h1>Getting Started</h1>
			<span>
				<Link to="/patients/login" component={PatientLogin}>
					<button>Login</button>
				</Link>
				<Link to="/patients/register" component={PatientReg}>
					<button>Register</button>
				</Link>
			</span>
		</>

		// <>
		// 	<h1>Getting Started</h1>
		// 	<span>
		// 		<Link to={`${url}/login`}>
		// 			<button>Login</button>
		// 		</Link>
		// 		<Link to={`${url}/registration`}>
		// 			<button>Register</button>
		// 		</Link>
		// 	</span>
		// 	<br />
		// 	<br />
		// 	<Switch>
		// 		<Route path={`${path}/login`}>
		// 			<Login />
		// 		</Route>
		// 		<Route path={`${path}/registration`}>
		// 			<Registration />
		// 		</Route>
		// 	</Switch>
		// </>
	);
};

export default PatientIntro;
