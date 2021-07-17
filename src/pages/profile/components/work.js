import React, { Fragment } from "react";
import mydata from "@mydata";

class ProfileWork extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			works: "",
		};
	}

	componentDidMount() {
		this.setState({
			works: mydata["profile"]["work"],
		});
	}

	render() {
		var { works } = this.state;
		return (
			<section className="section section-profile" id="work">
				<div className="content">
					<h1 className="title has-text-primary is-size-3-tablet is-size-4-mobile">
						Work Experience
					</h1>
				</div>
				{works ? (
					works.map((work, index) => (
						<Fragment key={index}>
							<div className="card has-background-light">
								<div className="card-content">
									<div className="media">
										<div className="media-left is-hidden-mobile">
											<figure
												className="media-left"
												style={{ color: work["color"] }}
											>
												<span className="icon is-large">
													<i
														className={
															work["icon"] +
															" fa-2x"
														}
													></i>
												</span>
											</figure>
										</div>
										<div className="media-content">
											<p className="is-size-5-tablet is-size-6-mobile is-uppercase has-text-black-bis has-text-weight-bold">
												{work["role"]}
											</p>
											<p
												className="is-size-6-tablet is-size-6-mobile is-uppercase has-text-weight-bold"
												style={{
													color: work["color"],
												}}
											>
												@ {work["name"]}
											</p>
											<p className="is-size-6-tablet is-size-6-mobile has-text-dark">
												{work["keyword"]
													? work["keyword"]
													: ""}
											</p>
										</div>
									</div>

									<div className="content">
										{work["team"] ? (
											<p className="has-text-weight-normal is-size-6-tablet is-size-6-mobile has-text-dark">
												{work["team"].split(",")[0]}
												<br className="is-hidden-tablet" />
												{work["team"].split(",")[1]}
											</p>
										) : (
											""
										)}
										{work["impact"] ? (
											<p className="has-text-weight-normal is-size-6-tablet is-size-6-mobile has-text-dark has-text-justified">
												&nbsp;&nbsp;&nbsp;&nbsp;
												{work["impact"]}
											</p>
										) : (
											""
										)}
										{work["utilization"] ? (
											<p className="has-text-weight-normal is-size-6-tablet is-size-6-mobile has-text-dark has-text-justified">
												<span
													className="is-capitalized"
													style={{
														textDecoration:
															"underline",
													}}
												>
													Utilization
												</span>{" "}
												: {work["utilization"]}
											</p>
										) : (
											""
										)}
										<small className="is-size-6-tablet is-size-6-mobile is-capitalized has-text-right">
											Period {work["year"]}
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

export default ProfileWork;
