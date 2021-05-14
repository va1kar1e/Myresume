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
			<Fragment>
				<div className="content">
					<p className="title has-text-primary is-size-3-tablet is-size-5-mobile">
						Recognitions
					</p>
				</div>

				{recognition ? (
					recognition.map((r, index) => (
						<article key={index} className="media">
							<div className="media-content">
								<p className="is-size-5-tablet is-size-6-mobile has-text-primary is-uppercase has-text-weight-bold">
									{r["what"]}
								</p>
								<p className="is-size-6-tablet is-size-7-mobile has-text-grey-dark has-text-weight-semibold">
									{r["when"]}
								</p>
								<p className="is-size-6-tablet is-size-7-mobile has-text-grey-dark has-text-weight-medium">
									{r["who"]}
								</p>
							</div>
						</article>
					))
				) : (
					<p>Loading...</p>
				)}
			</Fragment>
		);
	}
}

export default ProfileRecognition;
