import React from "react";
import mydata from "@mydata";

class ProfileEdu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			general: "",
			thesis: "",
			works: [],
		};
	}

	componentDidMount() {
		this.setState({
			general: mydata["profile"]["education"]["general"],
			thesis: mydata["profile"]["education"]["thesis"],
			works: mydata["profile"]["education"]["work"],
		});
	}

	render() {
		var { general, thesis, works } = this.state;
		return (
			<section className="section section-profile" id="education">
				<div className="content">
					<h1 className="title has-text-primary is-size-3-tablet is-size-4-mobile">
						Education
					</h1>
				</div>
				<div className="card has-background-light">
					<div className="card-content">
						<div className="media">
							<div className="media-content">
								<p className="is-size-5-tablet is-size-6-mobile is-uppercase has-text-black-bis has-text-weight-bold">
									{general["university"]}{" "}
									<strong className="has-text-grey-darker">
										@ {general["where"]}
									</strong>
								</p>
								<p className="is-size-6-tablet is-size-6-mobile has-text-weight-normal has-text-dark">
									{general["faculty"]}
								</p>
								<small className="is-size-6-tablet is-size-6-mobile is-capitalized has-text-right">
									Period {general["period"]}
								</small>
							</div>
						</div>
						<div className="content">
							<p className="is-size-6-tablet is-size-6-mobile has-text-primary is-uppercase has-text-weight-bold">
								Thesis
							</p>
							<p className="is-size-6-tablet is-size-6-mobile has-text-grey-darker is-capitalized has-text-weight-regular">
								{thesis["name"]}
							</p>
							{thesis ? (
								thesis["archievement"].map((arch, index) => (
									<p
										key={index}
										className="is-size-6-tablet is-size-6-mobile has-text-grey-darker has-text-weight-regular"
									>
										&nbsp;&nbsp;
										{index + 1}. {arch}
									</p>
								))
							) : (
								<p>Loading...</p>
							)}
						</div>
						<div className="content">
							<p className="is-size-6-tablet is-size-6-mobile has-text-primary is-uppercase has-text-weight-bold">
								Extracurricular Works
							</p>
							{works ? (
								works.map((work, index) => (
									<p
										key={index}
										className="is-size-6-tablet is-size-6-mobile has-text-weight-regular"
									>
										-{" "}
										<strong
											className="is-capitalized"
											style={{ color: work["color"] }}
										>
											{work["role"]}
										</strong>{" "}
										<small
											className="is-capitalized has-text-weight-semibold has-text-grey-darker"
											style={{ color: work["color"] }}
										>
											@{work["name"]}
										</small>{" "}
										<br className="is-hidden-widescreen" />
										<small className="has-text-weight-regular">
											{" "}
											Period {work["year"]}
										</small>
									</p>
								))
							) : (
								<div className="is-loading">Loading...</div>
							)}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ProfileEdu;
