import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Games() {
	return (
		<Router>
			<Header />
			<Cards />
			<Footer />
		</Router>
	);
}

export default Games;
