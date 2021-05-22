import React from "react";
import { Link } from "react-router-dom";
import HomeButtonBar from "./components/buttonbar";

import mydata from "@mydata";

class HomeHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			jobtitle: "",
			intro: "",
		};
	}

	componentDidMount() {
		this.setState({
			name: mydata["profile"]["aboutme"]["name"],
			jobtitle: mydata["profile"]["aboutme"]["jobtitle"],
			intro: mydata["profile"]["aboutme"]["intro"],
		});
	}

	render() {
		var { name, jobtitle, intro } = this.state;
		return (
			<div className="container">
				<h1 className="is-size-2-desktop is-size-3-touch is-uppercase has-text-primary has-text-centered has-text-weight-bold">
					{name}
				</h1>
				<h2 className="is-size-3-desktop is-size-6-touch is-uppercase has-text-light has-text-centered">
					{jobtitle}
				</h2>
				<br />
				<h2 className="is-size-4-desktop is-size-6-touch has-text-light has-text-justified has-text-centered-touch has-text-weight-normal">
					<span className="is-hidden-touch">&emsp;&emsp;&ensp;</span>
					{intro}
				</h2>
				{/* <br />
				<HomeButtonBar /> */}
				<br />
				<div className="field is-justify-content-center button-down">
					<p className="control">
						<Link to="/" target="_blank" rel="noreference">
							<span className="icon has-text-white is-large">
								<i class="fas fa-chevron-circle-down fa-2x"></i>
							</span>
						</Link>
					</p>
				</div>
			</div>
		);
	}
}

export default HomeHeader;
