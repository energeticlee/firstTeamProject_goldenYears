import React from "react";
import HomeNavBar from "./HomeNavBar";
import DoctorIntro from "../userIntro/DocIntro";
import PatientIntro from "../userIntro/PatientIntro";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Landing = () => {
	const { path } = useRouteMatch();
	return (
		<div>
			<HomeNavBar />
			<h1>GoldenYears</h1>
			<p>
				Curabitur vestibulum aliquam leo. Etiam feugiat lorem non metus.
				Praesent blandit laoreet nibh. Ut leo.
			</p>
			<Switch>
				<Route path={`${path}/patients`}>
					<PatientIntro />
				</Route>
				<Route path={`${path}/doctors`}>
					<DoctorIntro />
				</Route>
			</Switch>
		</div>
	);
};
export default Landing;
