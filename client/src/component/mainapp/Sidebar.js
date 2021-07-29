import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
	let { url } = useRouteMatch();

	const logout = () => {
		// Please change the localhose number according to your server port number
		fetch("/api/session", {
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
			<aside className="menu">
				<p className="is-size-3 sidebar-title">GoldenYears</p>
				<ul className="menu-list is-size-5 sidebar-items">
					<li>
						{" "}
						<Link to={`${url}/myprofile`}> My Profile </Link>{" "}
					</li>

					<li>
						<Link to={`${url}/tests`}>Tests</Link>
					</li>
					<li>
						<Link to={`${url}/myperformance`}>My Performance</Link>
					</li>
					<li>
						<Link to={`${url}/FAQs`}>FAQs</Link>
					</li>
					<li>
						<Link to={`/`} onClick={logout}>
							Log out
						</Link>
					</li>
				</ul>
			</aside>
		</>
	);
};

export default Sidebar;
