import React from "react";
import "./App.css";
import Home from "./component/mainapp/Home";
import { Switch, Route } from "react-router-dom";
import Landing from "./component/mainapp/Landing";
import DoctorIntro from "./component/userIntro/DocIntro";
import PatientIntro from "./component/userIntro/PatientIntro";
import DoctorHome from "./component/doctors/DoctorHome";
import { createContext, useReducer } from "react";

const dataContext = createContext();
const stateReducer = (states, action) => {
	switch (action.type) {
		case "PUSHPATIENTID":
			return {
				userId: action.payload,
			};
		case "PUSHDOCTORID":
			return {
				userId: action.payload,
			};
	}
};
function App() {
	const [states, dispatch] = useReducer(stateReducer, {});
	const data = { states, dispatch };
	return (
		<dataContext.Provider value={data}>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Landing />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/patients">
						<PatientIntro />
					</Route>
					<Route path="/doctors">
						<DoctorIntro />
					</Route>
					<Route path="/doctorhome">
						<DoctorHome />
					</Route>
				</Switch>
			</div>
		</dataContext.Provider>
	);
}

export { App, dataContext };
