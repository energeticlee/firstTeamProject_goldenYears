import React from "react";
import "./App.css";
import Home from "./component/mainapp/Home";
import { Switch, Route } from "react-router-dom";
import Landing from "./component/mainapp/Landing";

function App() {
  return (
    <div className="App">
      <h1>GoldenYears</h1>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
