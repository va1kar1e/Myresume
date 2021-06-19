import React from "react";
import Contact from "@pages/contact";

class HomeMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.setState({});
	}

	render() {
		return (
			<div className="container">
				<Contact />
			</div>
		);
	}
}

export default HomeMain;
