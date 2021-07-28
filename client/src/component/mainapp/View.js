import React from "react";
import { Switch, Route } from "react-router-dom";
import MyPerformance from "./rightside/MyPerformance";
import FAQs from "./rightside/FAQs";
import { useRouteMatch } from "react-router-dom";
import TestLibrary from "../fitnessTest/TestLibrary";
import MyProfile2 from "./rightside/MyProfile2";

const View = () => {
  let { path } = useRouteMatch();

  return (
    <div className="App">
      <h1>This is View</h1>
      {/* <TestLibrary /> */}
      <Switch>
        <Route exact path={`${path}/myperformance`}>
          <MyPerformance />
        </Route>

        <Route path={`${path}/faqs`}>
          <FAQs />
        </Route>

        <Route path={`${path}/myprofile`}>
          <MyProfile2 />
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
