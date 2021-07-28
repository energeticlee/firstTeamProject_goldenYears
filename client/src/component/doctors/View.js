import React from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import MyProfile from "./rightside/Myprofile";
import MyPatients from "./rightside/Mypatients";
import OverallPerformance from "./rightside/OverallPerformance";

const View = () => {
  let { path } = useRouteMatch();

  return (
    <div className="App">
      <Switch>
        <Route path={`${path}/myprofile`}>
          <MyProfile />
        </Route>

        <Route path={`${path}/mypatients`}>
          <MyPatients />
        </Route>

        <Route path={`${path}/overallperformance`}>
          <OverallPerformance />
        </Route>
      </Switch>
    </div>
  );
};

export default View;
