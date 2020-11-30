import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export function GalleryProfile() {
	const { store, actions } = useContext(Context);
	// use params gives us access to the URL variable id
	let params = useParams();
	// use history gives us access to go back to the last page
	let history = useHistory();

	let gallery = actions.getGallery(params.id);
<<<<<<< HEAD
	// console.log(gallery);
	let content = "Game Not Found";
=======
	console.log(gallery);
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32

	return (
		<div className="container">
			<div className="card-group">
				<div
					className="card text-center"
					style={{ backgroundColor: "black", color: "white", marginTop: "25px" }}>
					<h1>{gallery.name}</h1>
				</div>
				<div className="container" style={{ border: "none ", backgroundColor: "black" }}>
					<img
						src={gallery.photo}
						className="card-img-top"
						alt="..."
						style={{ width: "100%", margin: "auto", padding: "1.25rem" }}
					/>
					<div className="row">
						{/* margin: "auto ",  */}
<<<<<<< HEAD
						<div
							className="card-body col-6"
							style={{
								color: "white",
								maxWidth: "none",
								width: "50%",
								placeContent: "space-between",
								justifyContent: "center"
							}}>
=======
						<div className="card-body col-6" style={{ color: "white" }}>
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
							<h5 className="card-title">
								<strong>{gallery.name}</strong>
							</h5>
							<p className="card-text">
<<<<<<< HEAD
								Console:
								{gallery.console}
							</p>
							<p className="card-text">
								Genre:
								{gallery.genre}
							</p>
							<p className="card-text">
								Publisher:
								{gallery.publisher}
							</p>
							<p className="card-text">
								Rating:
								{gallery.ratings}
							</p>
							<p className="card-text">{gallery.desc}</p>
						</div>

						<iframe
							src={gallery.video}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							style={{
								width: 500,
								height: 250,
								marginRight: "20px",
								marginLeft: "20px",
								marginTop: "20px"
							}}
							allowFullScreen
						/>
=======
								<strong>
									Console:
									{gallery.console}
								</strong>{" "}
							</p>
							<p className="card-text">
								<strong>
									Genre:
									{gallery.genre}
								</strong>{" "}
							</p>
							<p className="card-text">
								<strong>Publisher:</strong> {gallery.publisher}
							</p>
							<p className="card-text">
								<strong>Rating:</strong> {gallery.ratings}
							</p>
							<p className="card-text">{gallery.desc}</p>
						</div>
						<div className="col-6">
							<iframe
								src={gallery.video}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								style={{ width: 500, height: 250 }}
								allowFullScreen
							/>
						</div>
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
					</div>
				</div>
			</div>
		</div>
	);
<<<<<<< HEAD
	return <div className="text-center mt-5">{content}</div>;
=======
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
}
