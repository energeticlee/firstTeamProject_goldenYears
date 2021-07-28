import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  let { url } = useRouteMatch();

  const logout = () => {
    // Please change the localhose number according to your server port number
    fetch("/api/doctorSession", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to={`${url}/myprofile`}> My Profile </Link>{" "}
        </li>
        <li>
          <Link to={`${url}/mypatients`}>My Patients</Link>
        </li>
        <li>
          <Link to={`${url}/overallperformance`}>Overall Performance</Link>
        </li>
        <li>
          <Link to={"/"} onClick={logout}>
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
