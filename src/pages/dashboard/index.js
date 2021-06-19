import React from "react";

class Dashboard extends React.Component {
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
				<div className="section is-large">
					<p className="title is-size-3-tablet is-size-5-mobile is-uppercase has-text-weight-bold has-text-primary">
						Not Authorize - Dashboard
					</p>
				</div>
			</div>
		);
	}
}

export default Dashboard;
