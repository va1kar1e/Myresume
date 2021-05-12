import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class ProfileMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.setState({});
	}

	render() {
		return (
			<Fragment>
				<aside class="menu fixed">
					<p class="title is-size-6 menu-label">Profile</p>
					<ul class="menu-list">
						<li>
							<ul>
								<li>
									<Link to="#work">Work</Link>
								</li>
								<li>
									<Link to="#education">Education</Link>
								</li>
								<li>
									<Link to="#recognition">Recognitions</Link>
								</li>
								<li>
									<Link to="#certificate">Certificates</Link>
								</li>
								<li>
									<Link to="#interestncourse">
										Interests & Courses
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
