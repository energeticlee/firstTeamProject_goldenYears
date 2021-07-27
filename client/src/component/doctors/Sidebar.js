import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  let { url } = useRouteMatch();
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
          <Link to={`/`}>Log out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
