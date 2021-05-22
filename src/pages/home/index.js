import React from "react";
import Nav from "@components/nav";
import Footer from "@components/footer";
import HomeHeader from "./components/header/header";

// Home Style
import "./home.scss";

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<section className="hero is-fullheight">
					<div className="hero-head">
						<Nav />
					</div>
					<div className="hero-body has-background-primary home-header">
						<HomeHeader />
					</div>
					<div className="hero-foot">
						<Footer />
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
