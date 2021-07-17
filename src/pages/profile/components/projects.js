import React, { Fragment } from "react";
import mydata from "@mydata";

class ProfileProj extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: "",
		};
	}

	componentDidMount() {
		this.setState({
			projects: mydata["profile"]["projects"],
		});
	}

	render() {
		var { projects } = this.state;
		return (
			<section className="section section-profile" id="project">
				<div className="content">
					<h1 className="title has-text-primary is-size-3-tablet is-size-4-mobile">
						Leaderships and Project
					</h1>
				</div>
				{projects ? (
					projects.map((project, index) => (
						<Fragment key={index}>
							<div className="card has-background-light">
								<div className="card-content">
									<div className="media">
										<div className="media-content">
											<p className="is-size-5-tablet is-size-6-mobile is-uppercase has-text-black-bis has-text-weight-bold">
												{project["role"]}
												<strong className="is-size-6-tablet is-size-6-mobile is-capitalized has-text-weight-bold has-text-grey-darker">
													{" "}
													@ {project["name"]}
												</strong>
											</p>

											<p className="is-size-6-tablet is-size-6-mobile has-text-dark">
												{project["where"]}
											</p>
										</div>
									</div>

									<div className="content">
										{project["impact"] ? (
											<p className="has-text-weight-normal is-size-6-tablet is-size-6-mobile has-text-justified">
												&nbsp;&nbsp;&nbsp;&nbsp;
												{project["impact"]}
											</p>
										) : (
											""
										)}
										{project["utilization"] ? (
											<p className="has-text-weight-normal is-size-6-tablet is-size-6-mobile has-text-justified">
												<span
													className="is-capitalized"
													style={{
														textDecoration:
															"underline",
													}}
												>
													Utilization
												</span>{" "}
												: {project["utilization"]}
											</p>
										) : (
											""
										)}
										<small className="is-size-6-tablet is-size-6-mobile is-capitalized has-text-right">
											Period {project["year"]}
										</small>
									</div>
								</div>
							</div>
							<br />
						</Fragment>
					))
				) : (
					<div className="is-loading">Loading...</div>
				)}
			</section>
		);
	}
}

export default ProfileProj;
