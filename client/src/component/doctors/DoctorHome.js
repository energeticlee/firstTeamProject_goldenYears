import React from "react";
import Sidebar from "./Sidebar";
import View from "./View";
import { dataContext } from "../../App";
import { useContext } from "react";

const DoctorHome = () => {
  const data = useContext(dataContext);
  const userId = data.states.userId;
  return (
    <div>
      <h1>Welcome {userId}</h1>
      <br />
      <Sidebar />
      <View />
    </div>
  );
};

export default DoctorHome;
