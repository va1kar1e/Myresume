import React from "react";
import Nav from "@components/nav";
import ProfileBody from "./components/body";
import ProfileMenu from "./components/menu";
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
					<ProfileBody />
					<ProfileMenu />
				</div>
				<div className="hero-foot"></div>
			</section>
		);
	}
}

export default Profile;
