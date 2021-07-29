import React from "react";
import Sidebar from "./Sidebar";
import View from "./View";
import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../App";

const Home = () => {
	const data = useContext(dataContext);
	const dispatch = data.dispatch;
	const history = useHistory();
	useEffect(() => {
		if (Object.keys(data.states).length === 0) {
			console.log(Object.keys(data.states).length === 0);
			const getData = async () => {
				// Please change the localhose number according to your server port number
				const response = await fetch("/api/session", {
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				});
				const message = await response.json();
				if (message.error !== "Not Authenticated") {
					dispatch({ type: "PUSHPATIENTID", payload: message });
				} else {
					history.push("/");
				}
			};
			getData();
		}
	}, []);
	return (
		<>
			<div className="dashboard-container">
				<div className="sidebar">
					<Sidebar />
				</div>
				<div className="rightside">
					<View />
				</div>
			</div>
		</>
	);
};

export default Home;
