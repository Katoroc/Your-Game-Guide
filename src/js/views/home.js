import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
import "../../styles/home.scss";
import { Tabs, Tab } from "react-bootstrap";

export const Home = () => (
	<div className="container-fluid">
		<div className="container">
			<br />
			<br />
<<<<<<< HEAD

			<ul className="nav justify-content-center">
=======
			<div className="buttons text-center">
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
				<Link
					className=" fill"
					to="/Action/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#A972CB",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
<<<<<<< HEAD
					<h4>Action</h4>
=======
					Action
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
				</Link>

				<Link
					className="pulse"
					to="/Sport/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#EF6EAE",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
<<<<<<< HEAD
					<h4>Sports</h4>
=======
					Sports
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
				</Link>

				<Link
					className="raise"
					to="/Racing/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#FFA260",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
<<<<<<< HEAD
					<h4>Racing</h4>
=======
					Racing
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
				</Link>

				<Link
					className="up"
					to="/Shooter/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#E4CB58",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
<<<<<<< HEAD
					<h4>Shooter</h4>
=======
					Shooter
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
				</Link>
				<Link
					className="offset"
					to="/Gallery/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#19BC8B",
						font: "inherit",
						lineHeight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
<<<<<<< HEAD
					<h4>All Games</h4>
				</Link>
			</ul>
		</div>

		<div className="container mt-3">
			<Tabs defaultActiveKey="Games" id="uncontrolled-tab-example">
				<br />
				<Tab eventKey="Games" title="Games">
					<div className="card-deck">
						<div className="card">
							<img
								src="https://www.jedinews.com/wp-content/uploads/2017/06/battlefront-II-logo-yoda-maul.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body" style={{ backgroundColor: "black" }}>
								<h5 className="card-title">Battle FrontII</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
						</div>
						<div className="card">
							<img
								src="https://www.playstationlifestyle.net/assets/uploads/2019/04/mortal-kombat-x-enhanced-online-beta-header.0.0-650x433.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body" style={{ backgroundColor: "black" }}>
								<h5 className="card-title">Mortal kombat</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.{" "}
								</p>
							</div>
						</div>
						<div className="card">
							<img
								src="https://www.somagnews.com/wp-content/uploads/2020/07/1596104691_578757_1596104877_noticia_normal.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body" style={{ backgroundColor: "black" }}>
								<h5 className="card-title">Dragon Ball Super</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
						</div>
					</div>
					<div className="text-center mt-5" style={{ color: "white" }}>
						<h1>Top 20 Upcoming Games of 2020 </h1>
						<br />
						<div className="auto-resizable-iframe">
							<div>
								<iframe
									frameBorder="0"
									allowFullScreen=""
									src="https://www.youtube.com/embed/CQKvhoe15M4"
								/>
							</div>
						</div>
					</div>
					<br />
					<br />
				</Tab>
				<br />
				<Tab eventKey="Consoles" title="Consoles">
					<div className="card-deck">
						<div className="card">
							<img
								src="https://nypost.com/wp-content/uploads/sites/2/2020/09/PlayStation-5-2.png"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body" style={{ backgroundColor: "black" }}>
								<h5 className="card-title">Play Station 5</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
						</div>
						<div className="card">
							<img
								src="https://cdn.vox-cdn.com/thumbor/M9GXgdGO9Cxt6N8CtXNor7UUrHo=/0x0:1200x675/1820x1213/filters:focal(504x242:696x434):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65919592/xboxseriesx.0.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body" style={{ backgroundColor: "black" }}>
								<h5 className="card-title">Xbox Series X</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.{" "}
								</p>
							</div>
						</div>
						<div className="card">
							<img
								src="https://images.nintendolife.com/83dab99c721e5/system-hero-01.original.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body" style={{ backgroundColor: "black" }}>
								<h5 className="card-title">Nintendo Switch </h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
						</div>
					</div>

					<div className="text-center mt-5" style={{ color: "white" }}>
						<h1>Play Station 5 2020</h1>
						<br />
						<div className="auto-resizable-iframe">
							<div>
								<iframe
									frameBorder="0"
									allowFullScreen=""
									src="https://www.youtube.com/embed/FVEj8K3BbVA"
								/>
							</div>
						</div>
					</div>
					<br />
					<br />
				</Tab>
			</Tabs>
		</div>
=======
					All Games
				</Link>
			</div>
		</div>
		<div className="text-center mt-5" style={{ color: "white" }}>
			<div className="wrapper">
				<h1>HOME PAGE</h1>
				<iframe
					src="https://www.youtube.com/embed/CQKvhoe15M4"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					style={{ width: "40%", height: "300px", border: "0" }}
					allowFullScreen
				/>
			</div>
			<div className="wrapper">
				<h1>HOME PAGE</h1>
				<iframe
					src="https://www.youtube.com/embed/RkC0l4iekYo"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					style={{ width: "40%", height: "300px", border: "0" }}
					allowFullScreen
				/>
			</div>
			<div className="wrapper">
				<h1>HOME PAGE</h1>
				<iframe
					src="https://www.youtube.com/embed/W78jqH6skjI?start=10"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					style={{ width: "40%", height: "300px", border: "0" }}
					allowFullScreen
				/>
			</div>
		</div>
		<br />
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
	</div>
);
