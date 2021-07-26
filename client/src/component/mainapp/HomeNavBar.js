import React from "react";
// import "./App.css";
import { Link } from "react-router-dom";

const HomeNavBar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to={`/patients`}>For Patients</Link>
        </div>
        <div>
          <Link to={`/doctors`}>For Doctors</Link>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavBar;
