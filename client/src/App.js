import React from "react";
import "./App.css";
import Home from "./component/mainapp/Home";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Landing from "./component/mainapp/Landing";
import UserIntro from "./component/mainapp/UserIntro";

function App() {
	return (
		<div className="App">
			<h1>GoldenYears</h1>
			<Switch>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/userintro">
					<UserIntro />
				</Route>
				<Route exact path="/">
					<Landing />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
