/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const ViewDoctorProfile = (props) => {
  const [userElement, setUserElement] = useState({});
  const doctorId = props.currentUser;
  const { url } = useRouteMatch();
  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      const response = await fetch(`/api/doctor/${doctorId}`, {
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
