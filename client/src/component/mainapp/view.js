import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import MyPerformance from "./rightside/myPerformance";
import MyProfile from "./rightside/myProfile";
// import Tests from "./rightside/tests";
import Faqs from "./rightside/faqs";
import { useRouteMatch } from "react-router-dom";
import TestLibrary from "../fitnessTest/TestLibrary";

const View = () => {
  let { path } = useRouteMatch();

  return (
    <div className="App">
      <h1>This is View</h1>
      {/* <TestLibrary /> */}
      <Switch>
        <Route exact path={`${path}`}>
          <MyPerformance />
        </Route>

        <Route path={`${path}/faqs`}>
          <Faqs />
        </Route>

        <Route path={`${path}/myprofile`}>
          <MyProfile />
        </Route>

        <Route path={`${path}/tests`}>
          <TestLibrary />
        </Route>
        {/* <Redirect to = "/404"/> */}
      </Switch>
    </div>
  );
};

export default View;
