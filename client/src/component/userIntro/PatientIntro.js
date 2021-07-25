import React from "react";
import Login from "./PatientLogin";
import Registration from "./PatientReg";
import { Link, useRouteMatch } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
// import { useState } from "react";

const UserIntro = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Getting Started</h1>
      <span>
        <Link to={`${url}/login`}>Login</Link>
        <Link to={`${url}/registration`}>Register</Link>
      </span>
      <br />
      <br />
      <div>
        <Switch>
          <Route path={`${path}/login`}>
            <Login />
          </Route>
          <Route path={`${path}/registration`}>
            <Registration />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserIntro;
