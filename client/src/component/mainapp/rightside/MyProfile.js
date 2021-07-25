import React from "react";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const [data, setUserData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      // Please change the localhose number according to your server port number
      const response = await fetch("http://localhost:3001/api/user", {
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
    <div>
      {data.map((userElement) => {
        return (
          <div key={userElement._id}>
            <div>{userElement._id}</div>
            <div>{userElement.name}</div>
            <div>{userElement.email}</div>
            <div>{userElement.password}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default MyProfile;
