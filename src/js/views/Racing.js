import React, { useState, useContext } from "react";
import { RacingCard } from "../component/RacingCard.js";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export function Racing() {
	const { store, actions } = useContext(Context);
<<<<<<< HEAD
	let test = "";
	let isAuth = sessionStorage.getItem("loggedIn");

	if (isAuth == "true") {
		if (store.gallerys.length == 0) {
			test = "nothing to show";
		} else {
			test = (
				<div className="container">
					<div className="text-center mt-5">
						<h1>Racing Games</h1>
						<br />
						<div className="row">
							{store.racings.map((racing, index) => (
								<RacingCard key={index} index={index} racing={racing} />
							))}
						</div>
					</div>
				</div>
			);
		}
	} else {
		location.replace("https://3000-d8974454-0d60-4f1d-888b-0628666ba0f0.ws-us02.gitpod.io/About");
	}
	return <div className="col text-center">{test}</div>;
}
=======
	console.log(actions.getRacings());

	// if (store.gallerys.length == 0) {
	// 	test = "nothing to show";
	// } else {
	// 	test = (
	return (
		<div className="container">
			<div className="text-center mt-5">
				<h1>Racing Games</h1>
				<div className="row">
					{store.racings.map((racing, index) => (
						<RacingCard key={index} index={index} racing={racing} />
					))}
				</div>
			</div>
			<br />
		</div>
	);
}
// return <div className="col text-center">{test}</div>;
// }
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
