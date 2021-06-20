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
		};
		this.checkIfAuthenticated.bind(this);
		this.setAuthenticated.bind(this);
	}

	setAuthenticated() {
		console.log("setAuthenticated");
		let { isAuthenticated } = this.state;
		console.log(isAuthenticated);
		this.setState({ isAuthenticated: !isAuthenticated });
		console.log(isAuthenticated);
	}

	checkIfAuthenticated() {
		let { isAuthenticated } = this.state;

		if (isAuthenticated) {
			return (
				<Fragment>
					<section className="section is-large">
						<p className="title is-size-3-tablet is-size-5-mobile is-uppercase has-text-weight-bold has-text-primary">
							Hello User
						</p>
						<p className="buttons">
							<Logout setAuthenticated={this.setAuthenticated} />
						</p>
					</section>
					<Footer />
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<section className="section is-large">
						<p className="title is-size-3-tablet is-size-5-mobile is-uppercase has-text-weight-bold has-text-primary">
							Not Authorize
						</p>
						<p className="buttons">
							<Login setAuthenticated={this.setAuthenticated} />
						</p>
					</section>
					<Footer />
				</Fragment>
			);
		}
	}

	render() {
		let { page } = this.props.match.params;

		return (
			<div className="dashboard is-full-height">
				<div className="dashboard-panel is-small is-hidden-touch">
					<Menu />
				</div>

				<div className="dashboard-main is-scrollable">
					<Nav />
					{this.checkIfAuthenticated()}
					{/* {page ? (
						<Fragment>
							<section className="section is-large">
								<p className="title is-size-3-tablet is-size-5-mobile is-uppercase has-text-weight-bold has-text-primary">
									Main {page}
								</p>
							</section>
							<Footer />
						</Fragment>
					) : (
						<Fragment>
							<section className="section is-large">
								<p className="title is-size-3-tablet is-size-5-mobile is-uppercase has-text-weight-bold has-text-primary">
									Not Authorize
								</p>
							</section>
						</Fragment>
					)} */}
				</div>
			</div>
		);
	}
}

export default Dashboard;
