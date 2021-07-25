import React from "react";
import "./App.css";
import Home from "./component/mainapp/Home";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Landing from "./component/mainapp/Landing";
<<<<<<< HEAD
import UserIntro from "./component/mainapp/userIntro";

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
=======

function App() {
	return (
		<div className="App">
			<h1>GoldenYears</h1>
			<Switch>
				<Route path="/home">
					<Home />
				</Route>
				<Route exact path="/">
					<Landing />
				</Route>
			</Switch>
		</div>
	);
>>>>>>> b4c30602137408b5553e1060075ef78d7625d7f1
}

export default App;
