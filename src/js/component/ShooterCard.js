import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function ShooterCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<Link
			to={{
				pathname: "/GalleryProfile/" + props.shooter.id
			}}
<<<<<<< HEAD
			className="col-md-4">
			<div
				className="card mb-4 shadow-sm"
				style={{
					width: "25%",
					// marginLeft: "200px",
					border: "3px solid",
					boxShadow: "unset",
					padding: "15px",
					border: "none",
					backgroundColor: "black",
					flexWrap: "wrap"
				}}>
				<img src={props.shooter.photo} className="card-img-top" style={{ width: "500%" }} />
				<div className="card-body">
					<p className="card-text">{props.shooter.name}</p>
				</div>
			</div>
=======
			className="card text-center"
			style={{
				width: "25%",
				// marginLeft: "200px",
				border: "3px solid",
				boxShadow: "unset",
				padding: "15px",
				border: "none",
				backgroundColor: "black"
			}}>
			<img src={props.shooter.photo} className="card-img-top" alt="..." />
			<h5 className="card-title" style={{ marginTop: "1.5rem", backgroundcolor: "black", color: "burlywood" }}>
				{props.shooter.name}
			</h5>
			<br />
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
		</Link>
	);
}

ShooterCard.propTypes = {
	shooter: PropTypes.object
};
