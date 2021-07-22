import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import { Link, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Switch, Route } from "react-router-dom";
// import { useState } from "react";

const UserIntro = () => {
	let { path, url } = useRouteMatch();

	return (
		<>
			<h1>Getting Started</h1>
			<span>
				<Link to={`${url}/login`}>
					<button>Login</button>
				</Link>
				<Link to={`${url}/registration`}>
					<button>Register</button>
				</Link>
			</span>
			<br />
			<br />
			<Switch>
				<Route path={`${path}/login`}>
					<Login />
				</Route>
				<Route path={`${path}/registration`}>
					<Registration />
				</Route>
			</Switch>
		</>
	);
};

export default UserIntro;
