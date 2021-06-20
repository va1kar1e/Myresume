import React from "react";
import ReactCardCarousel from "react-card-carousel";
import mydata from "@mydata";

class ProfileCert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cert: undefined,
		};
	}

	componentDidMount() {
		this.setState({
			cert: mydata["profile"]["cert"],
		});
	}

	CONTAINER_STYLE() {
		return {
			position: "relative",
			height: "30vh",
			width: "100%",
			display: "flex",
			flex: 1,
			justifyContent: "center",
			alignItems: "middle",
		};
	}

	CARD_STYLE() {
		return {
			height: "100%",
			width: "100%",
			textAlign: "center",
			paddingTop: "0px",
			background: "#ffffff",
			color: "#474b4f",
			fontFamily: "sans-serif",
			fontSize: "10px",
			textTransform: "uppercase",
			borderRadius: "10px",
			boxSizing: "border-box",
		};
	}

	render() {
		var { cert } = this.state;

		return (
			<section className="section section-profile" id="certificate">
				<div className="content">
					<h1 className="title has-text-primary is-size-3-tablet is-size-4-mobile">
						Certificates
					</h1>
				</div>
				<div
					className="is-hidden-tablet"
					style={this.CONTAINER_STYLE()}
				>
					<ReactCardCarousel autoplay={true} autoplay_speed={2500}>
						{cert ? (
							cert.map((c, index) => {
								const badge = require(`@images/cert/${c["badge"]}`);
								return (
									<div
										key={index}
										style={this.CARD_STYLE()}
										className=""
									>
										<div className="card">
											<div className="card-content">
												<div className="media">
													<div className="media-content">
														<a
															href={c["id"]}
															className="is-size-5-tablet is-size-6-mobile has-text-link has-text-weight-semibold"
														>
															<figure className="image is-128x128">
																<img
																	src={
																		badge[
																			"default"
																		]
																	}
																	alt={
																		c[
																			"badge"
																		]
																	}
																/>
															</figure>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})
						) : (
							<div>Loading...</div>
						)}
					</ReactCardCarousel>
				</div>
				<div className="is-hidden-mobile">
					<div className="columns is-multiline">
						{cert ? (
							cert.map((c, index) => {
								const badge = require(`@images/cert/${c["badge"]}`);
								return (
									<div
										className="column column-profile-cert"
										key={index}
									>
										<div className="card">
											<div className="card-content">
												<div className="media">
													<div className="media-content">
														<a
															href={c["id"]}
															className="is-size-5-tablet is-size-6-mobile has-text-link has-text-weight-semibold"
														>
															<figure className="image is-128x128 card-profile-cert-image">
																<img
																	src={
																		badge[
																			"default"
																		]
																	}
																	alt={
																		c[
																			"badge"
																		]
																	}
																/>
															</figure>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})
						) : (
							<div>Loading...</div>
						)}
					</div>
				</div>
			</section>
		);
	}
}

export default ProfileCert;
