import React from "react";
import { Link } from "react-router-dom";

// Add My Data
import logo from "@images/logo.png";

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
		};
	}

	componentDidMount() {
		this.setState({
			url: this.getHostname(),
		});
	}

	getHostname = () => {
		var hostname = window.location.hostname.split(".");
		if (hostname.length > 1) {
			return hostname[hostname.length - 2];
		} else {
			return hostname[hostname.length - 1];
		}
	};

	mobileOnclick = () => {
		var burger = document.querySelector(".burger");
		var nav = document.querySelector("#navMenu");
		burger.classList.toggle("is-active");
		nav.classList.toggle("is-active");
	};

	getMenuText = (text) => {
		return (
			<p className="is-size-6-desktop is-size-6-touch has-text-white-bis">
				{text}
			</p>
		);
	};

	render() {
		var { url } = this.state;
		return (
			<nav
				className="navbar is-fixed-top"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="navbar-brand has-background-grey-darker">
					<Link to="/" className="navbar-item">
						<figure className="image logoimg">
							<img
								src={logo}
								className="is-rounded"
								alt="Logo Navbar"
							/>
						</figure>
						<p className="is-size-4-desktop is-size-5-touch has-text-primary is-capitalized">
							{url}
						</p>
					</Link>
					<div
						role="button"
						className="burger navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navMenu"
						onClick={() => this.mobileOnclick()}
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</div>
				</div>
				<div
					className="navbar-menu has-background-grey-darker"
					id="navMenu"
				>
					<div className="navbar-start">
						<Link to="/" className="navbar-item">
							{this.getMenuText("Home")}
						</Link>
						<Link to="/profile" className="navbar-item">
							{this.getMenuText("My Profile")}
						</Link>
					</div>
					<div className="navbar-end"></div>
				</div>
			</nav>
		);
	}
}

export default Nav;
