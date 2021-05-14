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
			<Fragment>
				<div className="content">
					<p className="title has-text-primary is-size-3-tablet is-size-5-mobile">
						Leaderships and Project
					</p>
				</div>
				{projects ? (
					projects.map((work, index) => (
						<article className="is-white media" key={index}>
							<div className="media-content">
								<div className="content">
									<p className="is-size-6-tablet is-size-7-mobile">
										<strong className="is-capitalized has-text-primary">
											{work["role"]}
										</strong>{" "}
										<small className="is-uppercase has-text-weight-bold has-text-primary">
											@{work["name"]}
										</small>{" "}
										<br className="is-hidden-widescreen" />
										<small className="has-text-weight-normal">
											{" "}
											Period {work["year"]}
										</small>
										<br />
										{work["where"]}
									</p>
									{work["impact"] ? (
										<p className="has-text-weight-normal is-size-6-tablet is-size-7-mobile has-text-justified">
											&nbsp;&nbsp;&nbsp;&nbsp;
											{work["impact"]}
										</p>
									) : (
										""
									)}
									{work["utilization"] ? (
										<p className="has-text-weight-normal is-size-6-tablet is-size-7-mobile has-text-justified">
											<span
												className="is-capitalized"
												style={{
													textDecoration: "underline",
												}}
											>
												Utilization
											</span>{" "}
											: {work["utilization"]}
										</p>
									) : (
										""
									)}
								</div>
							</div>
						</article>
					))
				) : (
					<div className="is-loading">Loading...</div>
				)}
			</Fragment>
		);
	}
}

export default ProfileProj;
