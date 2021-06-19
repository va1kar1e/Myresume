import React from "react";
import mydata from "@mydata";

class ProfileInterest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interest: "",
		};
	}

	componentDidMount() {
		this.setState({
			interest: mydata["profile"]["interest"],
		});
	}

	render() {
		var { interest } = this.state;
		return (
			<section className="section section-profile" id="interest">
				<div className="content">
					<h1 className="title has-text-primary is-size-3-tablet is-size-4-mobile">
						Interests
					</h1>
				</div>
				<div className="tags are-medium">
					{interest ? (
						interest.map((i, index) => (
							<span
								key={index}
								className="tag is-light is-size-6-tablet is-size-6-mobile"
							>
								{i}
							</span>
						))
					) : (
						<p>Loading...</p>
					)}
				</div>
				<br />
			</section>
		);
	}
}

export default ProfileInterest;
