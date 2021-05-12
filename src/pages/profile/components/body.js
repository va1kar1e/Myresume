import React, { Fragment } from "react";
import ProfileWork from "./work";
import ProfileEdu from "./edu";
import ProfileRecognition from "./recognition";
import ProfileCert from "./cert";
import ProfileInterest from "./interest";
import ProfileCourse from "./course";

class ProfileBody extends React.Component {
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
				<article className="notification" id="work">
					<ProfileWork />
				</article>
				<article className="notification" id="education">
					<ProfileEdu />
				</article>
				<article className="notification" id="recognition">
					<ProfileRecognition />
				</article>
				<div className="tile is-ancestor">
					<div className="tile is-parent">
						<article
							className="tile is-child notification"
							id="certificate"
						>
							<ProfileCert />
						</article>
					</div>
					<div className="tile is-parent">
						<article
							className="tile is-child notification"
							id="interestncourse"
						>
							<ProfileInterest />
							<ProfileCourse />
						</article>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ProfileBody;
