/* eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { dataContext } from "../../../App";
import moment from "moment";

const ViewPatientProfile = () => {
  const [userElement, setUserElement] = useState({});
  const { url } = useRouteMatch();
  const data = useContext(dataContext);
  const dispatch = data.dispatch;
  const history = useHistory();
  const userId = data.states.userId;
  console.log(userId);
  useEffect(() => {
    if (Object.keys(data.states).length === 0) {
      console.log(Object.keys(data.states).length === 0);
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
          dispatch({ type: "PUSHPATIENTID", payload: message });
        } else {
          history.push("/");
        }
      };
      getData();
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/user/${userId}`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setUserElement(data);
    };
    getData();
  }, [userId]);
  console.log(userElement);

  return (
    <>
      {Object.keys(userElement).length === 0 ? (
        " "
      ) : (
        <div>
          <div key={userElement._id}>
            <div>Name: {userElement.name}</div>
            <div>Email: {userElement.email}</div>
            <div>Password: *******</div>
            <div>Photo: {userElement.photo}</div>
            <div>
              Date of Birth:{" "}
              {userElement.age
                ? moment(userElement.age).format("Do MMM YYYY")
                : null}
            </div>
            <div>Gender: {userElement.gender}</div>
            <div>
              Height: {userElement.height ? `${userElement.height} cm` : null}
            </div>
            <div>
              Weight: {userElement.weight ? `${userElement.weight} kg` : null}
            </div>
            <div>Health Conditions: {userElement.healthCondition}</div>
            <div>
              My Doctor:{" "}
              {userElement.myDoctor === null ? " " : userElement.myDoctor.email}
            </div>
            <br />
          </div>
          <Link to={`${url}/edit`}>Edit Profile</Link>
        </div>
      )}
    </>
  );
};

export default ViewPatientProfile;
