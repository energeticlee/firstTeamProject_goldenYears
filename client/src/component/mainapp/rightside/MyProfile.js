import React from "react";
import { useEffect, useState, useContext } from "react";
import { dataContext } from "../../../App";
import { Link, Route, useRouteMatch, useHistory } from "react-router-dom";
import PatientEditProfile from "./PatientEditProfile";

const MyProfile = () => {
  let { path, url } = useRouteMatch();
  const contextData = useContext(dataContext);
  const dispatch = contextData.dispatch;
  const history = useHistory();
  const [data, setUserData] = useState([]);
  useEffect(() => {
    if (Object.keys(contextData.states).length === 0) {
      console.log(Object.keys(contextData.states).length === 0);
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
      // Please change the localhost number according to your server port number
      const response = await fetch("/api/user", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(response);
      const data = await response.json();
      setUserData(data);
    };
    getData();
  }, []);
  return (
    <>
      <div>
        {data.map((userElement) => {
          return (
            <div key={userElement._id}>
              <div>Name: {userElement.name}</div>
              <div>Email: {userElement.email}</div>
              <div>Encrypted Password: {userElement.password}</div>
              <div>Photo: {userElement.photo}</div>
              <div>Age: {userElement.age}</div>
              <div>Gender: {userElement.gender}</div>
              <div>Height: {userElement.height}</div>
              <div>Weight: {userElement.weight}</div>
              <div>Health Conditions: {userElement.healthCondition}</div>
              <div>My Doctor: {userElement.myDoctor}</div>
              <br />
            </div>
          );
        })}
      </div>
      <Link to={`${url}/edit`}>
        <button>Edit Profile</button>
      </Link>
      <Route path={`${path}/edit`}>
        <PatientEditProfile />
      </Route>
    </>
  );
};

export default MyProfile;
