import React from "react";

const Login = () => {
	return (
		<div>
			<form>
				<label>Email:</label>
				<br />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email address"
					required
				/>
				<br />
				<br />
				<label>Password:</label>
				<br />
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter password"
					required
				/>
				<br />
				<br />
				<input type="submit" value="Enter" />
			</form>
		</div>
	);
};

export default Login;
