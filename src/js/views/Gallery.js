import React, { useState, useContext } from "react";
import { GalleryCard } from "../component/GalleryCard.js";
import { Context } from "../store/appContext";
<<<<<<< HEAD
import "../../styles/home.scss";
export function Gallery() {
	const { store, actions } = useContext(Context);
	let test = "";

	let isAuth = sessionStorage.getItem("loggedIn");

	if (isAuth == "true") {
		if (store.gallerys.length == 0) {
			test = "nothing to show";
		} else {
			test = (
				<div className="container">
					{/* <ul className="nav justify-content-center">
						<i className="fas fa-football-ball fa-2X" />
						<i className="fas fa-flag-checkered fa-2X" />
					</ul> */}
					<div className="text-center mt-5">
						<h1>All Games</h1>
						<br />
						<div className="row">
							{store.gallerys.map((gallery, index) => (
								<GalleryCard key={index} index={index} gallery={gallery} />
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

import "../../styles/home.scss";

export function Gallery() {
	const { store, actions } = useContext(Context);
	console.log(actions.getGallerys());

	// if (store.gallerys.length == 0) {
	// 	test = "nothing to show";
	// } else {
	// 	test = (
	return (
		<div className="container">
			<div className="text-center mt-5">
				<h1>All Games</h1>
				<div className="row">
					{store.gallerys.map((gallery, index) => (
						<GalleryCard
							key={index}
							index={index}
							// name={gallery.name}
							// genre={gallery.genre}
							// photo={gallery.photo}
							// console={gallery.console}
							// desc={gallery.desc}
							gallery={gallery}
						/>
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
