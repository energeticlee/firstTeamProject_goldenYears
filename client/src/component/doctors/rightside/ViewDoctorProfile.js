/* eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { dataContext } from "../../../App";

const ViewDoctorProfile = () => {
  const [userElement, setUserElement] = useState({});
  const data = useContext(dataContext);
  const doctorId = data.states.doctorId;
  const { url } = useRouteMatch();
  const dispatch = data.dispatch;
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
      const response = await fetch(`/api/doctor/${doctorId}`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();

      setUserElement(data);
    };
    getData();
  }, [doctorId]);

  return (
    <>
      {Object.keys(userElement).length === 0 ? (
        " "
      ) : (
        <div>
          <div key={userElement._id}>
            <div>Name: {userElement.name}</div>
            <div>Email: {userElement.email}</div>
            <div>Password: {userElement.password}</div>
            <div>Photo: {userElement.photo}</div>
            <div>Age: {userElement.age}</div>
            <br />
          </div>
          <Link to={`${url}/edit`}>Edit Profile</Link>
        </div>
      )}
    </>
  );
};

export default ViewDoctorProfile;
