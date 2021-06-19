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
				<ProfileWork />
				<ProfileProj />
				<ProfileEdu />
				<ProfileRecognition />
				<ProfileCert />
				<ProfileCourse />
				<ProfileInterest />
			</Fragment>
		);
	}
}

export default ProfileBody;
