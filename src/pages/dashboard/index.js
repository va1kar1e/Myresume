import React, { Fragment } from "react";
import Nav from "./components/nav";
import Menu from "./components/menu";
import Login from "./components/login";
import Logout from "./components/logout";
import Footer from "@components/footer";

import "bulma-dashboard/src/bulma-dashboard.sass";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false,
			name: "",
		};
		this.setAuthenticated = this.setAuthenticated.bind(this);
	}

	setAuthenticated(getName, googleId) {
		if (googleId === "103058431504099979556") {
			this.setState({
				isAuthenticated: true,
				name: getName,
			});
		} else {
			this.setState({
				isAuthenticated: false,
				name: getName,
			});
		}
	}

	render() {
		let { page } = this.props.match.params;
		let { isAuthenticated, name } = this.state;

		return (
			<div className="dashboard is-full-height">
				<div className="dashboard-panel is-small is-hidden-touch">
					<Menu />
				</div>

				<div className="dashboard-main is-scrollable">
					<Nav />
					{isAuthenticated ? (
						<Fragment>
							<section className="section is-small">
								<p className="title is-size-3-tablet is-size-5-mobile is-uppercase has-text-weight-bold has-text-primary">
									Hello : {name}
								</p>
								{page ? (
									<Fragment>
										<section className="section is-large">
											<p className="title is-size-3-tablet is-size-5-mobile is-uppercase has-text-weight-bold has-text-primary">
												Main {page}
											</p>
										</section>
									</Fragment>
								) : (
									<Fragment></Fragment>
								)}
								<p className="buttons">
									<Logout
										setAuthenticated={this.setAuthenticated}
									/>
								</p>
							</section>
						</Fragment>
					) : (
						<Fragment>
							<section className="section is-large">
								<p className="title is-size-3-tablet is-size-5-mobile is-uppercase has-text-weight-bold has-text-primary">
									Not Authorize
								</p>
								<p className="buttons">
									<Login
										setAuthenticated={this.setAuthenticated}
									/>
								</p>
							</section>
						</Fragment>
					)}
					<Footer />
				</div>
			</div>
		);
	}
}

export default Dashboard;
