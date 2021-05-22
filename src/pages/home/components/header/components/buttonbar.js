import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Divider from "@components/divider";
import mydata from "@mydata";

class HomeButtonBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			resume: "",
			linkedin: "",
			github: "",
		};
	}

	componentDidMount() {
		this.setState({
			resume: mydata["profile"]["link"]["resume"],
			linkedin: mydata["profile"]["link"]["linkedin"],
			github: mydata["profile"]["link"]["github"],
		});
	}

	render() {
		var { resume, linkedin, github } = this.state;
		return (
			<Fragment>
				<Divider mywidth={"12em"} />
				<div className="field is-grouped is-justify-content-center">
					<p className="control">
						<a
							href={
								"https://linkedin.com/in/" +
								linkedin["username"]
							}
							target="_blank"
							rel="noreferrer"
						>
							<span
								className="icon has-text-success is-large has-tooltip-bottom has-tooltip-primary"
								data-tooltip="My Linkedin"
							>
								<i className={linkedin["icon"] + " fa-2x"}></i>
							</span>
						</a>
						<a
							href={"https://github.com/" + github["username"]}
							target="_blank"
							rel="noreferrer"
						>
							<span
								className="icon has-text-success is-large has-tooltip-bottom has-tooltip-primary"
								data-tooltip="My Github"
							>
								<i className={github["icon"] + " fa-2x"}></i>
							</span>
						</a>
					</p>
				</div>
				<Divider mywidth={"12em"} />
				{/* <div className="field is-grouped is-justify-content-center">
					<p className="control">
						<a
							className="button"
							href={resume["url"]}
							target="_blank"
							rel="noreferrer"
						>
							<span
								className="icon has-text-success is-large has-tooltip-bottom has-tooltip-primary"
								data-tooltip="Download My Resume"
							>
								<i className={resume["icon"] + " fa-2x"}></i>
							</span>
							<p className="is-size-6-desktop is-size-6-touch has-text-primary">
								Download My Resume
							</p>
						</a>
						<Link to="/contact" className="button">
							<span
								className="icon has-text-success is-large has-tooltip-bottom has-tooltip-primary"
								data-tooltip="Contact Me"
							>
								<i className="fas fa-paper-plane fa-2x"></i>
							</span>
							<p className="is-size-6-desktop is-size-6-touch has-text-primary">
								Contact Me
							</p>
						</Link>
					</p>
				</div> */}
			</Fragment>
		);
	}
}

export default HomeButtonBar;
