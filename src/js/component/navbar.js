import React from "react";
import { Link } from "react-router-dom";
import IMG from "../../img/IMG.png";

export const Navbar = () => {
	return (
		<div className="container">
			<nav
				className="navbar navbar-expand-lg "
				style={{ backgroundColor: "#edb704", textShadow: "2px 2px 5px black" }}>
				<Link className="navbar-brand" style={{ width: "30%" }} to="/">
					<img src={IMG} className="card-img" alt="..." />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item ">
							<Link className="nav-link" to="/">
								<i className="fas fa-home fa-2x" />
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Gallery/">
								<i className="fas fa-gamepad fa-2x" />
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/About">
								<i className="fas fa-sign-in-alt fa-2x" />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
