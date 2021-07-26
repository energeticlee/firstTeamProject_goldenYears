import React from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import DocLogin from "./DocLogin";
import DocReg from "./DocReg";

const DocIntro = () => {
	let { path, url } = useRouteMatch();

	return (
		<>
			<h1>Doctors</h1>
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
					<DocLogin />
				</Route>
				<Route path={`${path}/register`}>
					<DocReg />
				</Route>
			</Switch>
		</>
	);
};

export default DocIntro;
