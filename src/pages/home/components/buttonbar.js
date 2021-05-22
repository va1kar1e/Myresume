// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
// import Divider from "@components/divider";
// import mydata from "@mydata";

// class HomeButtonBar extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			resume: "",
// 			linkedin: "",
// 			github: "",
// 		};
// 	}

// 	componentDidMount() {
// 		this.setState({
// 			resume: mydata["profile"]["link"]["resume"],
// 			linkedin: mydata["profile"]["link"]["linkedin"],
// 			github: mydata["profile"]["link"]["github"],
// 		});
// 	}

// 	render() {
// 		var { resume, linkedin, github } = this.state;
// 		return (
// 			<Fragment>
// 				<Divider mywidth={"10em"} />
// 				<div className="field is-grouped is-justify-content-center">
// 					<p className="control">
// 						<Link
// 							to="/link/linkedin"
// 							target="_blank"
// 							rel="noreference"
// 						>
// 							<span
// 								className="icon has-text-white is-large has-tooltip-bottom has-tooltip-primary"
// 								data-tooltip="My Linkedin"
// 							>
// 								<i className={linkedin["icon"] + " fa-2x"}></i>
// 							</span>
// 						</Link>
// 						<Link
// 							to="/link/github"
// 							target="_blank"
// 							rel="noreference"
// 						>
// 							<span
// 								className="icon has-text-white is-large has-tooltip-bottom has-tooltip-primary"
// 								data-tooltip="My Github"
// 							>
// 								<i className={github["icon"] + " fa-2x"}></i>
// 							</span>
// 						</Link>
// 						<Link
// 							to="/link/resume"
// 							target="_blank"
// 							rel="noreference"
// 						>
// 							<span
// 								className="icon has-text-white is-large has-tooltip-bottom has-tooltip-primary"
// 								data-tooltip="Download My Resume"
// 							>
// 								<i className={resume["icon"] + " fa-2x"}></i>
// 							</span>
// 						</Link>
// 						<Link to="/contact">
// 							<span
// 								className="icon has-text-white is-large has-tooltip-bottom has-tooltip-primary"
// 								data-tooltip="Contact Me"
// 							>
// 								<i className="fas fa-paper-plane fa-2x"></i>
// 							</span>
// 						</Link>
// 					</p>
// 				</div>
// 				<Divider mywidth={"10em"} />
// 			</Fragment>
// 		);
// 	}
// }

// export default HomeButtonBar;
