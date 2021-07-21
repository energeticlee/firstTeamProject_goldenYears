import React from "react";
import "./App.css";
import Home from "./component/mainapp/home";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Landing from "./component/mainapp/Landing";
import UserIntro from "./component/mainapp/UserIntro";

function App() {
  return (
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
  );
}

export default App;
