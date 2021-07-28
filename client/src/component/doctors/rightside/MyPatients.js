import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import PatientPerformance from "./PatientPerformance";
import { dataContext } from "../../../App";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const MyPatients = () => {
  let { path, url } = useRouteMatch();
  const [patientsarray, setPatientsArray] = useState([]);
  const data = useContext(dataContext);
  const dispatch = data.dispatch;
  const doctorId = data.states.doctorId;
  const history = useHistory();
  useEffect(() => {
    if (Object.keys(data.states).length === 0) {
      console.log(Object.keys(data.states).length === 0);
      const getData = async () => {
        // Please change the localhose number according to your server port number
        const response = await fetch("/api/doctorsession", {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const message = await response.json();
        if (message.error !== "Not Authenticated") {
          dispatch({ type: "PUSHDOCTORID", payload: message._id });
        } else {
          history.push("/");
        }
      };
      getData();
    }
  }, []);
  useEffect(() => {
    const getData = async () => {
      // Please change the localhose number according to your server port number
      const response = await fetch(`/api/doctor/accepted/${doctorId}`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setPatientsArray(data.myPatients);
    };
    getData();
  }, []);
  console.log(patientsarray);
  return (
    <div>
      <h1>Your Patients</h1>
      <nav>
        Nav bar of patients&apos; names here
        {patientsarray.length === 0
          ? " "
          : patientsarray.map((patient, index) => {
              return (
                <Link to={`${url}/${patient._id}`} key={index}>
                  <button>{patient.name}</button>
                </Link>
              );
            })}
      </nav>
      <Switch>
        <Route path={`${path}/:id`}>
          <PatientPerformance />
        </Route>
      </Switch>
    </div>
  );
};
export default MyPatients;