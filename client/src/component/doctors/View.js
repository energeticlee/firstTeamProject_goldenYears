import React from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import MyProfile from "./rightside/MyProfile";
import MyPatients from "./rightside/MyPatients";
import OverallPerformance from "./rightside/OverallPerformance";
import Notifications from "./rightside/Notifications";

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
          <div>
          <OverallPerformance />
          </div>
        </Route>

        <Route path={`${path}/notifications`}>
          <Notifications />
        </Route>
      </Switch>
    </div>
  );
};

export default View;
