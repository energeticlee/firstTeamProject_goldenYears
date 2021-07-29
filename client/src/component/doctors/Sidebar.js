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
    <>
      <nav>
        <aside className="menu">
          <p className="is-size-3 sidebar-title">GoldenYears</p>
          <ul className="menu-list is-size-5 sidebar-items">
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
              <Link to={`${url}/notifications`}>Notifications</Link>
            </li>
            <li>
              <Link to={"/"} onClick={logout}>
                Log out
              </Link>
            </li>
          </ul>
        </aside>
      </nav>
    </>
  );
};

export default Sidebar;
