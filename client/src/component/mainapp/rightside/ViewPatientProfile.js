/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const ViewPatientProfile = (props) => {
  const [userElement, setUserElement] = useState({});
  const userId = props.currentUser;
  const { url } = useRouteMatch();
  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      const response = await fetch(`/api/user/${userId}`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      if (mounted) {
        setUserElement(data);
      }
    };
    getData();
    return () => (mounted = false);
  }, []);

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
            <div>Date of Birth: {userElement.age}</div>
            <div>Gender: {userElement.gender}</div>
            <div>
              Height: {userElement.height ? `${userElement.height} cm` : null}
            </div>
            <div>
              Weight: {userElement.weight ? `${userElement.weight} cm` : null}
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
