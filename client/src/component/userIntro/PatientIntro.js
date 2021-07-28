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
      <h1>Patients</h1>
      <span>
        <Link to={`${url}/login`}>
          <button>Login</button>
        </Link>
        <Link to={`${url}/register`}>
          <button>Register</button>
        </Link>
      </span>
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
