import React from "react";
import { Link } from "react-router-dom";
import DocLogin from "./DocLogin";
import DocReg from "./DocReg";
// import { useState } from "react";

const DocIntro = () => {
	// let { path, url } = useRouteMatch();

	return (
		<>
			<h1>Getting Started</h1>
			<span>
				<Link to="/doctors/login" component={DocLogin}>
					<button>Login</button>
				</Link>
				<Link to="/doctors/register" component={DocReg}>
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

export default DocIntro;
