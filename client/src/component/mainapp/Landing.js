import React from "react";
import HomeNavBar from "./HomeNavBar";

const Landing = () => {
	return (
		<div>
			<HomeNavBar />
			<h1 className="is-size-1 has-text-centered has-text-primary">
				GoldenYears
			</h1>
			<p>
				Curabitur vestibulum aliquam leo. Etiam feugiat lorem non metus.
				Praesent blandit laoreet nibh. Ut leo.
			</p>
		</div>
	);
};
export default Landing;
