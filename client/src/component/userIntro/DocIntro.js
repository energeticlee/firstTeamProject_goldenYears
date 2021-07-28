import React from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import DocLogin from "./DocLogin";
import DocReg from "./DocReg";

const DocIntro = () => {
	let { path, url } = useRouteMatch();

	return (
		<>
			<h1 className="is-size-2 has-text-centered">Doctors</h1>
			<div className="container">
				<Link to={`${url}/login`}>
					<button className="button is-primary" id="login-button">
						Login
					</button>
				</Link>
				<Link to={`${url}/register`}>
					<button className="button is-primary is-light" id="reg-button">
						Register
					</button>
				</Link>
			</div>
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
