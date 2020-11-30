import React, { useState } from "react";
//import { Header } from "../component/Header.js";
import { Footer } from "../component/footer.js";
//import PropTypes from "prop-types";
import { LoginForm } from "../component/LoginForm.js";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";
=======

>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
import "../../styles/home.scss";

export function Login() {
	const adminUser = {
		email: "admin@admin.com",
		email: "luis@luis.com",
		password: "admin123",
		password: "luis123"
	};

	const [user, setUser] = useState({ name: "", email: "" });
	const [error, setError] = useState("");
<<<<<<< HEAD
	const [redirect, setRedirect] = useState(false);
=======
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32

	const Login = details => {
		console.log(details);

		if (details.email == adminUser.email && details.password == adminUser.password) {
			console.log("Logged in");

			setUser({
				name: details.name,
				email: details.email
			});
<<<<<<< HEAD
			setRedirect(true);
		} else {
			// console.log("Details do not match!");
=======
		} else {
			console.log("Details do not match!");
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
			setError("Details do not match!");
		}
	};

	const Logout = () => {
		setUser({ name: "", email: "" });
	};
<<<<<<< HEAD
	let renderRedirect = () => {
		if (redirect) {
			return <Redirect to="/Gallery" />;
		}
	};

=======
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
	return (
		<div className="container">
			{/* <Header /> */}
			<div className="text-center mt-5">
				{user.email != "" ? (
					<div className="welcome" style={{ color: "white" }}>
						<h2>
							Welcome, <span>{user.name}</span>
						</h2>
						<button onClick={Logout}>Logout</button>
					</div>
				) : (
					<LoginForm Login={Login} error={error} />
				)}
			</div>
<<<<<<< HEAD
			{renderRedirect()}
=======
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
			<Footer />
		</div>
	);
}
