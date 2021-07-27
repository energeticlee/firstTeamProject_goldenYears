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
  });

  return (
    <>
      {Object.keys(userElement).length === 0 ? (
        " "
      ) : (
        <div>
          <div key={userElement._id}>
            <div>{userElement.name}</div>
            <div>{userElement.email}</div>
            <div>{userElement.password}</div>
            <div>{userElement.photo}</div>
            <div>{userElement.age}</div>
            <div>{userElement.gender}</div>
            <div>{userElement.height}</div>
            <div>{userElement.weight}</div>
            <div>{userElement.healthCondition}</div>
            <div>{userElement.myDoctor}</div>
            <br />
          </div>
          <Link to={`${url}/edit`}>Edit Profile</Link>
        </div>
      )}
    </>
  );
};

export default ViewPatientProfile;
