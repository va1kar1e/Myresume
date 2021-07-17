import React, { Fragment } from "react";
import mydata from "@mydata";

class ProfileRecognition extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recognition: "",
		};
	}

	componentDidMount() {
		this.setState({
			recognition: mydata["profile"]["recognition"],
		});
	}

	render() {
		var { recognition } = this.state;
		return (
			<section className="section section-profile" id="recognition">
				<div className="content">
					<h1 className="title has-text-primary is-size-3-tablet is-size-4-mobile">
						Recognition
					</h1>
				</div>

				{recognition ? (
					recognition.map((r, index) => (
						<Fragment key={index}>
							<div className="card has-background-light">
								<div className="card-content">
									<div className="media">
										<div className="media-content">
											<p className="is-size-5-tablet is-size-5-mobile has-text-primary is-uppercase has-text-weight-bold">
												{r["what"]}
											</p>
											<p className="is-size-6-tablet is-size-6-mobile has-text-grey-darker has-text-weight-semibold">
												{r["when"]}
											</p>
											<p className="is-size-6-tablet is-size-6-mobile has-text-grey-darker has-text-weight-medium">
												{r["who"]}
											</p>
										</div>
									</div>
								</div>
							</div>
							<br />
						</Fragment>
					))
				) : (
					<p>Loading...</p>
				)}
			</section>
		);
	}
}

export default ProfileRecognition;
