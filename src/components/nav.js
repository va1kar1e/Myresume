import React from "react";
import { Link } from "react-router-dom";
import mydata from "@mydata";
import logo from "@images/logo.png";

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			linkedin: "",
		};
	}

	componentDidMount() {
		this.setState({
			linkedin: mydata["profile"]["link"]["linkedin"]["icon"],
			url: window.location.hostname,
		});
	}

	render() {
		var { url, linkedin } = this.state;
		return (
			<header
				className="navbar is-fixed-top has-background-dark"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item">
							<img
								src={logo}
								height="50"
								alt=""
								className="pr-2"
							/>
							<p className="title is-size-3-tablet is-size-5-mobile has-text-primary is-capitalized">
								{url}
							</p>
						</Link>
						<div
							role="button"
							className="navbar-burger burger"
							aria-label="menu"
							aria-expanded="false"
							data-target="navMenu"
							onClick={() => {
								var burger = document.querySelector(".burger");
								var nav = document.querySelector("#navMenu");
								burger.classList.toggle("is-active");
								nav.classList.toggle("is-active");
							}}
						>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</div>
					</div>
					<div className="navbar-menu" id="navMenu">
						<div className="navbar-start">
							<Link to="/" className="navbar-item has-text-white">
								Home
							</Link>
							<Link
								to="/profile"
								className="navbar-item has-text-white"
							>
								My Profile
							</Link>
							<Link
								to={"/link/resume"}
								className="navbar-item has-text-white"
								target="_blank"
								rel="noreference"
							>
								My Resume
							</Link>
							{/* <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link has-text-white is-hidden-touch">
                  More
                </div>
                <div className="navbar-dropdown">
                  <Link to="/dashboard" className="navbar-item has-text-white">
                    Dashboard
                  </Link>
                </div>
              </div> */}
						</div>
						<div className="navbar-end">
							<Link
								to="/link/linkedin"
								className="navbar-item"
								target="_blank"
								rel="noreference"
							>
								<span className="icon has-text-primary is-hidden-touch">
									<i className={linkedin}></i>
								</span>
								<span className="has-text-primary">
									Linkedin
								</span>
							</Link>
							<Link to="/contact" className="navbar-item">
								<span className="icon has-text-primary is-hidden-touch">
									<i className="fas fa-paper-plane"></i>
								</span>
								<span className="has-text-primary">
									Contact Me
								</span>
							</Link>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Nav;
