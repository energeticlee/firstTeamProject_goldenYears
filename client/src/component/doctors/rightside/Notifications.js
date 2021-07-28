import React from "react";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../../App";

const Notifications = () => {
  const data = useContext(dataContext);
  const doctorId = data.states.doctorId;
  console.log(doctorId);
  const dispatch = data.dispatch;
  const [patientsarray, setPatientsArray] = useState([]);
  const history = useHistory();
  useEffect(() => {
    if (Object.keys(data.states).length === 0) {
      console.log(Object.keys(data.states).length === 0);
      const getAuthentication = async () => {
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
      getAuthentication();
    }
  }, []);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/doctor/pending/${doctorId}`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setPatientsArray(data.myPendingPatients);
    };
    getData();
  }, []);

  const handleAccept = (id) => () => {
    const sendAccept = async () => {
      const response = await fetch(`/api/doctor/acceptPatient/${id}`, {
        mode: "cors",
        method: "PUT",
        body: JSON.stringify({
          userId: id,
          doctorId: doctorId,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    };
    sendAccept();
  };
  const handleDecline = (id) => () => {
    console.log("Decline", id);
  };
  return (
    <div>
      <h1>This is the notifications page</h1>
      {patientsarray.length === 0
        ? ""
        : patientsarray.map((patient) => {
            return (
              <div key={patient._id}>
                <div>{patient.name}</div>
                <button onClick={handleAccept(patient._id)}>Accept</button>
                <button onClick={handleDecline(patient._id)}>Decline</button>
              </div>
            );
          })}
    </div>
  );
};

export default Notifications;
