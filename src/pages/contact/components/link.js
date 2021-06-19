import React, { Fragment } from "react";
import mydata from "@mydata";

class ContactLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			linkedin: "",
			github: "",
			resume: "",
		};
	}

	componentDidMount() {
		this.setState({
			linkedin: mydata["profile"]["link"]["linkedin"],
			github: mydata["profile"]["link"]["github"],
			resume: mydata["profile"]["link"]["resume"],
		});
	}

	render() {
		const { linkedin, github, resume } = this.state;
		return (
			<Fragment>
				<h2 className="is-size-3-desktop is-size-5-touch is-uppercase has-text-light has-text-weight-bold has-text-centered has-text-left-desktop">
					Link
				</h2>
				<br className="" />
				<div className="buttons">
					<a
						className="button is-primary is-text"
						href={"http://linkedin.com/in/" + linkedin["username"]}
						target="_blank"
						rel="noreferrer"
					>
						<span className="icon has-text-darker">
							<i className={linkedin["icon"] + " fa-2x"}></i>
						</span>
					</a>
					<a
						className="button is-primary is-text"
						href={"https://github.com/" + github["username"]}
						target="_blank"
						rel="noreferrer"
					>
						<span className="icon has-text-darker">
							<i className={github["icon"] + " fa-2x"}></i>
						</span>
					</a>
					<a
						className="button is-primary"
						href={resume["url"]}
						target="_blank"
						rel="noreferrer"
					>
						<span className="has-text-darker">
							Download My Resume
						</span>
					</a>
				</div>
			</Fragment>
		);
	}
}
export default ContactLink;
