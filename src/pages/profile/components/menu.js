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
				<section className="section section-profile-menu" id="menu">
					<aside className="menu fixed has-text-left">
						<ul className="menu-list">
							<p className="menu-label">General</p>
							<li>
								<Link to="/">Home</Link>
							</li>
							<p className="menu-label">Profile</p>
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
											to="#project"
											scroll={(el) =>
												this.scrollWithOffset(el)
											}
										>
											Leaderships and Project
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
											to="#course"
											scroll={(el) =>
												this.scrollWithOffset(el)
											}
										>
											Courses & Skills
										</HashLink>
									</li>
									<li>
										<HashLink
											smooth
											to="#interest"
											scroll={(el) =>
												this.scrollWithOffset(el)
											}
										>
											Interests
										</HashLink>
									</li>
								</ul>
							</li>
						</ul>
					</aside>
				</section>
			</Fragment>
		);
	}
}

export default ProfileMenu;
