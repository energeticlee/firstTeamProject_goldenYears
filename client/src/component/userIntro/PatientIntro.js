import React from "react";
<<<<<<< HEAD
import Login from "./PatientLogin";
import Registration from "./PatientReg";
import { Link, useRouteMatch } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
// import { useState } from "react";

const UserIntro = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Getting Started</h1>
      <span>
        <Link to={`${url}/login`}>Login</Link>
        <Link to={`${url}/registration`}>Register</Link>
      </span>
      <br />
      <br />
      <div>
        <Switch>
          <Route path={`${path}/login`}>
            <Login />
          </Route>
          <Route path={`${path}/registration`}>
            <Registration />
          </Route>
        </Switch>
      </div>
    </div>
  );
=======
import { Link } from "react-router-dom";
import PatientLogin from "./PatientLogin";
import PatientReg from "./PatientReg";
// import { useState } from "react";

const PatientIntro = () => {
	// let { path, url } = useRouteMatch();

	return (
		<>
			<h1>Getting Started</h1>
			<span>
				<Link to="/patients/login" component={PatientLogin}>
					<button>Login</button>
				</Link>
				<Link to="/patients/register" component={PatientReg}>
					<button>Register</button>
				</Link>
			</span>
		</>

		// <>
		// 	<h1>Getting Started</h1>
		// 	<span>
		// 		<Link to={`${url}/login`}>
		// 			<button>Login</button>
		// 		</Link>
		// 		<Link to={`${url}/registration`}>
		// 			<button>Register</button>
		// 		</Link>
		// 	</span>
		// 	<br />
		// 	<br />
		// 	<Switch>
		// 		<Route path={`${path}/login`}>
		// 			<Login />
		// 		</Route>
		// 		<Route path={`${path}/registration`}>
		// 			<Registration />
		// 		</Route>
		// 	</Switch>
		// </>
	);
>>>>>>> ashley
};

export default PatientIntro;
