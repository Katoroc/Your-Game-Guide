import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
<<<<<<< HEAD

import { Header } from "./component/Header";
// import { LoginForm } from "./component/LoginForm";
=======
import { Header } from "./component/Header";
import { LoginForm } from "./component/LoginForm";
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
import { Gallery } from "./views/Gallery";
import { Action } from "./views/Action";
import { Sport } from "./views/Sport";
import { Racing } from "./views/Racing";
import { Shooter } from "./views/Shooter";

<<<<<<< HEAD
// import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { About as LoginPage } from "./views/About";
=======
import { Login } from "./views/Login";
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
import injectContext from "./store/appContext";
import { GalleryProfile } from "./component/GalleryProfile";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn"));
	// console.log(sessionStorage);

	return (
		<div className="container-fluid">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
<<<<<<< HEAD
					<Navbar isAuth={loggedIn} />

					<Switch>
						<Route exact path="/">
							<Home />

							<Footer />
						</Route>

=======
					<Navbar />
					{/* <Header /> */}
					<Switch>
						<Route exact path="/">
							<Home />
							<Footer />
						</Route>
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
						<Route exact path="/Gallery">
							<Gallery />
							<Footer />
						</Route>
						<Route exact path="/Action">
							<Action />
						</Route>
						<Route exact path="/Sport">
							<Sport />
<<<<<<< HEAD
						</Route>
						<Route exact path="/Racing">
							<Racing />
						</Route>
						<Route exact path="/Shooter">
							<Shooter />
						</Route>
						<Route exact path="/GalleryProfile/:id">
							<GalleryProfile />
						</Route>
						<Route exact path="/Signup">
							<Signup />
						</Route>
						<Route exact path="/About">
							<LoginPage />
=======
						</Route>
						<Route exact path="/Racing">
							<Racing />
						</Route>
						<Route exact path="/Shooter">
							<Shooter />
						</Route>
						<Route exact path="/GalleryProfile/:id">
							{/* <Header /> */}
							<GalleryProfile />
						</Route>

						<Route exact path="/About">
							<Login />
>>>>>>> f81d901eedc7b6eac7e5949d052d2fdcaa6d0f32
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
