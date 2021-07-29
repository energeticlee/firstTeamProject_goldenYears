import React from "react";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../../App";
import NotificationsCard from "./NotificationsCard";

const Notifications = () => {
  const data = useContext(dataContext);
  const doctorId = data.states.doctorId;
  const dispatch = data.dispatch;
  const [patientsarray, setPatientsArray] = useState([]);
  const [status, setStatus] = useState(0);
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
  }, [status]);

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
      setStatus((status) => status + 1);
    };
    sendAccept();
  };
  const handleDecline = (id) => () => {
    const sendDecline = async () => {
      const response = await fetch(`/api/doctor/declinePatient/${id}`, {
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
      setStatus((status) => status + 1);
    };
    sendDecline();
  };

  return (
    <div className="notifications-container">
      {patientsarray.length === 0
        ? ""
        : patientsarray.map((patient) => {
            return (
              <NotificationsCard
                key={patient._id}
                patient={patient}
                handleAccept={handleAccept}
                handleDecline={handleDecline}
              />
            );
          })}
    </div>
  );
};

export default Notifications;
