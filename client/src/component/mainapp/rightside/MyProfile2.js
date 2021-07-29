import React from "react";
import ViewPatientProfile from "./ViewPatientProfile";
import EditPatientProfile from "./EditPatientProfile";
import { useRouteMatch, Switch, Route } from "react-router-dom";

const MyProfile2 = () => {
	const { path } = useRouteMatch();
	// const data = useContext(dataContext);
	// const dispatch = data.dispatch;
	// const userId = data.states.userId;
	// const history = useHistory();
	// useEffect(() => {
	//   if (Object.keys(data.states).length === 0) {
	//     console.log(Object.keys(data.states).length === 0);
	//     const getData = async () => {
	//       // Please change the localhose number according to your server port number
	//       const response = await fetch("/api/session", {
	//         mode: "cors",
	//         headers: {
	//           "Content-Type": "application/json",
	//           Accept: "application/json",
	//         },
	//       });
	//       const message = await response.json();
	//       if (message.error !== "Not Authenticated") {
	//         dispatch({ type: "PUSHPATIENTID", payload: message });
	//       } else {
	//         history.push("/");
	//       }
	//     };
	//     getData();
	//   }
	// }, []);
	return (
		<>
			<div className="is-size-5 profile my-profile-2">
				<h1 className="is-size-3 has-text-centered profile-title">
					My Profile
				</h1>
				<Switch>
					<Route path={`${path}/edit`}>
						<EditPatientProfile />
					</Route>
					<Route path={`${path}`}>
						<ViewPatientProfile />
					</Route>
				</Switch>
			</div>
		</>
	);
};

export default MyProfile2;
