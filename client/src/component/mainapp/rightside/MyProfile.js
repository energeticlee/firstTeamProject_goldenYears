import React from "react";
import { useEffect } from "react";

const MyProfile = () => {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://localhost:3001/api/user/all", {
        mode: "cors",
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
    };
    getData();
  }, []);
  return (
    <>
      <div>This is my Profile</div>
    </>
  );
};

export default MyProfile;
