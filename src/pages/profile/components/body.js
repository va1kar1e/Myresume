import React, { Fragment } from "react";
import ProfileWork from "./work";
import ProfileEdu from "./edu";
import ProfileProj from "./projects";
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
				<article className="notification" id="project">
					<ProfileProj />
				</article>
				<article className="notification" id="education">
					<ProfileEdu />
				</article>
				<article className="notification" id="recognition">
					<ProfileRecognition />
				</article>
				<article className="notification" id="certificate">
					<ProfileCert />
				</article>
				<article className="notification" id="course">
					<ProfileCourse />
				</article>
				<article className="notification" id="interest">
					<ProfileInterest />
				</article>
			</Fragment>
		);
	}
}

export default ProfileBody;
