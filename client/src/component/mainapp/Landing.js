import React from "react";
import HomeNavBar from "./HomeNavBar";
import DoctorIntro from "../userIntro/DocIntro";
import PatientIntro from "../userIntro/PatientIntro";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Landing = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <h1>Landing Page</h1>
      <HomeNavBar />
      <Switch>
        <Route path={`${path}/patients`}>
          <PatientIntro />
        </Route>
        <Route path={`${path}/doctors`}>
          <DoctorIntro />
        </Route>
      </Switch>
    </div>
  );
};
export default Landing;
