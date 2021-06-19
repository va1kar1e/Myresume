import React from "react";
import ProfileMenu from "./components/menu";
import ProfileBody from "./components/body";
import Nav from "@components/nav";
import Footer from "@components/footer";

import "./profile.scss";

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.setState({});
	}

	render() {
		return (
			<div className="profile">
				<section className="hero is-fullheight">
					<div className="hero-head">
						<Nav />
					</div>
					<div className="hero-body hero-body-profile has-text-left has-background-black-bis">
						<div className="columns">
							<div className="column is-one-quarter is-hidden-touch">
								<ProfileMenu />
							</div>
							<div className="column">
								<ProfileBody />
							</div>
						</div>
					</div>
					<div className="hero-foot">
						<Footer />
					</div>
				</section>
			</div>
		);
	}
}

export default Profile;
