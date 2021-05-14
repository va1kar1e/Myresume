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
			<Fragment>
				<section className="section">
					<div className="content">
						<p className="title has-text-primary is-size-3-tablet is-size-5-mobile">
							Work
						</p>
					</div>
					{works ? (
						works.map((work, index) => (
							<article className="is-white media" key={index}>
								<figure
									className="media-left is-hidden-mobile"
									style={{ color: work["color"] }}
								>
									<span className="icon is-large">
										<i
											className={work["icon"] + " fa-2x"}
										></i>
									</span>
								</figure>
								<div className="media-content">
									<div className="content">
										<p className="is-size-6-tablet is-size-7-mobile">
											<strong
												className="is-capitalized"
												style={{ color: work["color"] }}
											>
												{work["role"]}
											</strong>{" "}
											<small
												className="is-uppercase has-text-weight-bold"
												style={{ color: work["color"] }}
											>
												@{work["name"]}
											</small>{" "}
											<br className="is-hidden-desktop" />
											<small>
												{" "}
												Period {work["year"]}
											</small>
											<br />
											{work["keyword"]}
										</p>
									</div>
									<article className="media">
										<div className="content">
											<p
												style={{ color: work["color"] }}
												className="has-text-weight-regular is-size-6-tablet is-size-7-mobile"
											>
												Team: {work["team"]}
											</p>
										</div>
									</article>
									<article className="media has-text-grey-darker">
										<div className="content">
											<p className="has-text-weight-regular is-size-6-tablet is-size-7-mobile">
												Responsibility
											</p>
											<ol>
												{work["archiev"].map(
													(arch, index) => (
														<li key={index}>
															<p className="has-text-weight-light is-size-6-tablet is-size-7-mobile">
																{arch}
															</p>
														</li>
													)
												)}
											</ol>
										</div>
									</article>
								</div>
							</article>
						))
					) : (
						<div className="is-loading">Loading...</div>
					)}
				</section>
			</Fragment>
		);
	}
}

export default ProfileWork;
