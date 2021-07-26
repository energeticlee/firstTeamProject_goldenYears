import React from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import MyProfile from "./rightside/myprofile";
import MyPatients from "./rightside/mypatients";

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
      </Switch>
    </div>
  );
};

export default View;
