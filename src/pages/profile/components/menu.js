import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class ProfileMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.scrollWithOffset = this.scrollWithOffset.bind(this);
	}

	componentDidMount() {
		this.setState({});
	}

	scrollWithOffset(el) {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -100;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	}

	render() {
		return (
			<Fragment>
				<aside className="menu fixed is-hidden-touch has-text-left">
					<ul className="menu-list">
						<p class="menu-label">General</p>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/link/resume">My Resume</Link>
						</li>
						<p class="menu-label">Profile</p>
						<li>
							<ul>
								<li>
									<HashLink
										smooth
										to="#work"
										scroll={(el) =>
											this.scrollWithOffset(el)
										}
									>
										Work
									</HashLink>
								</li>
								<li>
									<HashLink
										smooth
										to="#education"
										scroll={(el) =>
											this.scrollWithOffset(el)
										}
									>
										Education
									</HashLink>
								</li>
								<li>
									<HashLink
										smooth
										to="#recognition"
										scroll={(el) =>
											this.scrollWithOffset(el)
										}
									>
										Recognitions
									</HashLink>
								</li>
								<li>
									<HashLink
										smooth
										to="#certificate"
										scroll={(el) =>
											this.scrollWithOffset(el)
										}
									>
										Certificates
									</HashLink>
								</li>
								<li>
									<HashLink
										smooth
										to="#interestncourse"
										scroll={(el) =>
											this.scrollWithOffset(el)
										}
									>
										Interests & Courses
									</HashLink>
								</li>
							</ul>
						</li>
						<p class="menu-label">Link</p>
						<li>
							<ul>
								<li>
									<Link
										to="/link/linkedin"
										target="_blank"
										rel="noreference"
									>
										Linkedin
									</Link>
								</li>
								<li>
									<Link
										to="/link/github"
										target="_blank"
										rel="noreference"
									>
										Github
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</aside>
			</Fragment>
		);
	}
}

export default ProfileMenu;
