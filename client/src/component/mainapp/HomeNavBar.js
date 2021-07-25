import React from "react";
// import "./App.css";
import { Link, useRouteMatch } from "react-router-dom";

const HomeNavBar = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <nav>
        <div>
          <Link to={`${url}/patients`}>For Patients</Link>
        </div>
        <div>
          <Link to={`${url}/doctors`}>For Doctors</Link>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavBar;
