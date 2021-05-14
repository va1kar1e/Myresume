import React, { Fragment } from "react";
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
			<Fragment>
				<div className="content">
					<p className="title has-text-primary is-size3-tablet is-size-5-mobile">
						Education
					</p>
				</div>
				<article className="is-white media">
					<div className="media-content">
						<div className="content">
							<p className="has-text-weight-bold is-size-5-tablet is-size-7-mobile has-text-primary">
								{general["university"]}
								<br className="is-hidden-widescreen" />
								<small className="has-text-weight-normal is-size-6-tablet has-text-dark">
									{" "}
									Period {general["period"]}
								</small>
								<br />
								<span className="has-text-weight-light is-size-6-tablet has-text-dark">
									{general["faculty"]}
								</span>
							</p>
						</div>
						<article className="media">
							<div className="content">
								<p className="is-size-6-tablet is-size-7-mobile has-text-primary is-uppercase has-text-weight-bold">
									Thesis
								</p>
								<p className="is-size-6-tablet is-size-7-mobile has-text-grey-dark is-capitalized has-text-weight-regular">
									{thesis["name"]}
								</p>
								{thesis ? (
									thesis["archievement"].map(
										(arch, index) => (
											<p
												key={index}
												className="is-size-6-tablet is-size-7-mobile has-text-grey-dark has-text-weight-regular"
											>
												&nbsp;&nbsp;
												{index + 1}. {arch}
											</p>
										)
									)
								) : (
									<p>Loading...</p>
								)}
							</div>
						</article>
						<article className="media">
							<div className="content">
								<p className="is-size-6-tablet is-size-7-mobile has-text-primary is-uppercase has-text-weight-bold">
									Extracurricular Works
								</p>
								{works ? (
									works.map((work, index) => (
										<p
											key={index}
											className="is-size-6-tablet is-size-7-mobile has-text-weight-regular"
										>
											-{" "}
											<strong
												className="is-capitalized"
												style={{ color: work["color"] }}
											>
												{work["role"]}
											</strong>{" "}
											<small
												className="is-capitalized has-text-weight-semibold"
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
						</article>
					</div>
				</article>
			</Fragment>
		);
	}
}

export default ProfileEdu;
