import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.setState({});
	}

	render() {
		return (
			<aside className="menu fixed has-text-left">
				<ul className="menu-list">
					<p className="menu-label">General</p>
					<li>
						<Link to="/">Home</Link>
					</li>
					<p className="menu-label">Dashboard</p>
					<li>
						<ul>
							<li>
								<Link to="/dashboard/smarthome">
									Smart Home
								</Link>
							</li>
							<li>
								<Link to="/dashboard/generate">Generate</Link>
							</li>
						</ul>
					</li>
				</ul>
			</aside>
		);
	}
}

export default Menu;
