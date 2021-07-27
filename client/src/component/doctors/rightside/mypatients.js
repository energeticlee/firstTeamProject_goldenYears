import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import PatientPerformance from "./PatientPerformance";

const MyPatients = () => {
	let { path, url} = useRouteMatch();
  const patientsarray = ["Patient1", "Patient2"];
  return (
    <div>
      
      <h1>Your Patients</h1>
      <nav>Nav bar of patients&apos; names here
        {patientsarray.map((name, index) => {
          return (
            <Link to={`${url}/patientid`} key = {index}>
              <button>{name}</button>
            </Link>
          );
        })}
        </nav>
        <Switch>
        <Route path={`${path}/patientid`}>
          < PatientPerformance/>
        </Route>
        </Switch>
    </div>
  );
};

export default MyPatients;
