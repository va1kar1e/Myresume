import React from "react";
import HomeScrolldownButton from "./components/scrolldownbutton";

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
				<h2 className="is-size-3-desktop is-size-4-touch is-uppercase has-text-light has-text-centered">
					{jobtitle}
				</h2>
				<br />
				<h2 className="is-size-4-desktop is-size-6-touch has-text-light has-text-justified has-text-centered-touch has-text-weight-normal">
					<span className="is-hidden-touch">&emsp;&emsp;&ensp;</span>
					{intro}
				</h2>
				<br />
				<HomeScrolldownButton />
			</div>
		);
	}
}

export default HomeHeader;
