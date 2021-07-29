import React, { useEffect } from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import PatientLogin from "./PatientLogin";
import PatientReg from "./PatientReg";

const PatientIntro = () => {
  const history = useHistory();
  let { path, url } = useRouteMatch();
  useEffect(() => {
    const getData = async () => {
      // Please change the localhose number according to your server port number
      const response = await fetch("/api/session", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const message = await response.json();
      if (message.error !== "Not Authenticated") {
        history.push("/home/myperformance");
      }
    };
    getData();
  }, []);
  return (
    <>
      <h1 className="is-size-2 has-text-centered intro-header">Patients</h1>
      <div className="container">
        <Link to={`${url}/login`}>
          <button className="button is-primary" id="login-button">
            Login
          </button>
        </Link>
        <Link to={`${url}/register`}>
          <button className="button is-primary is-light" id="reg-button">
            Register
          </button>
        </Link>
      </div>
      <br />
      <br />
      <Switch>
        <Route path={`${path}/login`}>
          <PatientLogin />
        </Route>
        <Route path={`${path}/register`}>
          <PatientReg />
        </Route>
      </Switch>
    </>
  );
};

export default PatientIntro;
