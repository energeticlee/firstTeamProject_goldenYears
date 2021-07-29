import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import ViewDoctorProfile from "./ViewDoctorProfile";
import EditDoctorProfile from "./EditDoctorProfile";

const MyProfile = () => {
  const { path } = useRouteMatch();
  // const data = useContext(dataContext);
  // const doctorId = data.states.doctorId;
  // const dispatch = data.dispatch;
  // const history = useHistory();
  // useEffect(() => {
  // 	if (Object.keys(data.states).length === 0) {
  // 		console.log(Object.keys(data.states).length === 0);
  // 		const getData = async () => {
  // 			// Please change the localhose number according to your server port number
  // 			const response = await fetch("/api/doctorsession", {
  // 				mode: "cors",
  // 				headers: {
  // 					"Content-Type": "application/json",
  // 					Accept: "application/json",
  // 				},
  // 			});
  // 			const message = await response.json();
  // 			if (message.error !== "Not Authenticated") {
  // 				dispatch({ type: "PUSHDOCTORID", payload: message._id });
  // 			} else {
  // 				history.push("/");
  // 			}
  // 		};
  // 		getData();
  // 	}
  // }, []);

  return (
    <>
      <div className="is-size-5 profile">
        <h1 className="is-size-2 has-text-centered">My Profile</h1>
        <Switch>
          <Route path={`${path}/edit`}>
            <EditDoctorProfile />
          </Route>
          <Route path={`${path}`}>
            <ViewDoctorProfile />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default MyProfile;
