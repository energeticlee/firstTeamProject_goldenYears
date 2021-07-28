import React from "react";
import HomeNavBar from "./HomeNavBar";

const Landing = () => {
	return (
		<div>
			<HomeNavBar />
			<h1 className="is-size-1 has-text-centered has-text-primary" id="title">
				GoldenYears
			</h1>
			<p className="content is-medium has-text-centered">
				Make the sunset years of your life... Donec mi odio, faucibus at,
				scelerisque quis, convallis in, nisi. Pellentesque auctor neque nec
				urna. Morbi nec metus.
			</p>
		</div>
	);
};
export default Landing;
