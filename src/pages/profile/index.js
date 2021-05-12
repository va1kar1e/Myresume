import React from "react";
import ProfileMenu from "./components/menu";
import ProfileBody from "./components/body";

import Nav from "@components/nav";
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
			<section className="hero is-fullheight">
				<div className="hero-head">
					<Nav />
				</div>
				<div className="hero-body hero-body-profile">
					<section className="section is-fullheight is-hidden-touch has-text-left">
						<div className="columns">
							<div className="column is-2">
								<ProfileMenu />
							</div>
							<div className="column">
								<ProfileBody />
							</div>
						</div>
					</section>
					<div className="is-fullheight is-hidden-desktop has-text-left">
						<ProfileBody />
					</div>
				</div>
			</section>
		);
	}
}

export default Profile;
