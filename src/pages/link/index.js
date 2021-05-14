import React from "react";
import mydata from "@mydata";

class Link extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			linkedin: "",
			github: "",
			hassos: "",
			resume: "",
		};
	}

	componentDidMount() {
		this.setState({
			linkedin: mydata["profile"]["link"]["linkedin"]["username"],
			github: mydata["profile"]["link"]["github"]["username"],
			hassos: mydata["profile"]["link"]["hassos"]["url"],
			resume: mydata["profile"]["link"]["resume"]["url"],
		});
	}

	gotolink() {
		const { type } = this.props.match.params;
		const { linkedin, github, hassos, resume } = this.state;
		if (type === "github") {
			window.location.href = "https://github.com/" + github;
			return null;
		} else if (type === "linkedin") {
			window.location.href = "https://linkedin.com/in/" + linkedin;
			return null;
		} else if (type === "hassos") {
			window.location.href = hassos;
			return null;
		} else if (type === "resume") {
			window.location.href = resume;
			return null;
		} else {
			window.location.href = window.location.origin;
			return null;
		}
	}

	render() {
		return (
			<div className="container">
				<div className="section is-large">
					<p className="title is-size-3-tablet is-size-4-mobile is-uppercase has-text-weight-bold has-text-primary">
						Redirect to External Link
						{this.gotolink()}
					</p>
				</div>
			</div>
		);
	}
}
export default Link;
