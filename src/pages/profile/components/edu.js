import React, { Fragment } from "react";
import mydata from "@mydata";

class ProfileEdu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			general: "",
			thesis: "",
			internship: "",
			work: "",
			project: "",
		};
	}

	componentDidMount() {
		this.setState({
			general: mydata["profile"]["education"]["general"],
			thesis: mydata["profile"]["education"]["thesis"],
			internship: mydata["profile"]["education"]["internship"],
			work: mydata["profile"]["education"]["work"],
			project: mydata["profile"]["education"]["project"],
		});
	}

	render() {
		var { general, thesis, internship, work, project } = this.state;
		return (
			<Fragment>
				<div className="content">
					<p className="title has-text-primary is-size-3-tablet is-size-4-mobile">
						Education
					</p>
				</div>
				<article className="is-white media">
					<div className="media-content">
						<div className="content">
							<h1 className="title is-size-4-tablet is-size-5-mobile has-text-primary is-uppercase">
								{general["university"]}
							</h1>
							<p className="subtitle is-size-6 has-text-grey-dark is-uppercase has-text-weight-regular">
								{general["faculty"]}
								<br />
								<small>Period: {general["period"]}</small>
							</p>
						</div>
						<article className="media">
							<div className="content">
								<p className="title is-size-5-tablet is-size-6-mobile has-text-primary is-uppercase has-text-weight-bold">
									Thesis
								</p>
								<p className="is-size-6 has-text-grey-dark is-capitalized has-text-weight-regular">
									{thesis["name"]}
								</p>
								<ol>
									{thesis ? (
										thesis["archievement"].map(
											(arch, index) => (
												<li
													key={index}
													className="is-size-6 has-text-grey-dark has-text-weight-regular"
												>
													{arch}
												</li>
											)
										)
									) : (
										<p>Loading...</p>
									)}
								</ol>
							</div>
						</article>
						<article className="media">
							<div className="content">
								<h1 className="title is-size-5-tablet is-size-6-mobile has-text-primary is-uppercase">
									Internship
								</h1>
								<p className="subtitle is-size-6 has-text-grey-dark is-uppercase has-text-weight-regular">
									{internship["university"]}
									<br />
									{internship["laboratory"]}
								</p>
								<p className="is-size-6 has-text-grey-dark is-capitalized has-text-weight-regular">
									{internship["project"]}
								</p>
								<ol>
									{internship ? (
										internship["archievement"].map(
											(arch, index) => (
												<li
													key={index}
													className="is-size-6 has-text-grey-dark has-text-weight-regular"
												>
													{arch}
												</li>
											)
										)
									) : (
										<p>Loading...</p>
									)}
								</ol>
							</div>
						</article>
						<article className="media">
							<div className="content">
								<p className="title is-size-5-tablet is-size-6-mobile has-text-primary is-uppercase">
									Work
								</p>
								{work ? (
									work.map((w, index) => (
										<section key={index}>
											<div className="content">
												<ul>
													<li>
														<p className=" is-size-6 has-text-grey-dark is-capitalized has-text-weight-regular">
															{w["where"]}
														</p>
														<ul>
															{w["do"].map(
																(
																	wdo,
																	index
																) => (
																	<li
																		key={
																			index
																		}
																		className="is-size-6 has-text-grey-dark has-text-weight-regular"
																	>
																		{
																			wdo[
																				"name"
																			]
																		}
																		<ol>
																			{wdo[
																				"archievement"
																			].map(
																				(
																					arch,
																					index
																				) => (
																					<li>
																						<p
																							key={
																								index
																							}
																							className="is-size-6 has-text-grey-dark has-text-weight-regular"
																						>
																							{
																								arch
																							}
																						</p>
																					</li>
																				)
																			)}
																		</ol>
																	</li>
																)
															)}
														</ul>
													</li>
												</ul>
											</div>
										</section>
									))
								) : (
									<p>Loading...</p>
								)}
							</div>
						</article>
						<article className="media">
							<div className="content">
								<p className="title is-size-5-tablet is-size-6-mobile has-text-primary is-uppercase">
									Project
								</p>
								{project ? (
									project.map((p, index) => (
										<ul key={index}>
											<li>
												<p className="is-size-6 has-text-grey-dark has-text-weight-regular">
													{p["name"]}
												</p>
												<ol>
													{p["archievement"].map(
														(arch, index) => (
															<li
																key={index}
																className="is-size-6 has-text-grey-dark has-text-weight-regular"
															>
																{arch}
															</li>
														)
													)}
												</ol>
											</li>
										</ul>
									))
								) : (
									<p>Loading...</p>
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
