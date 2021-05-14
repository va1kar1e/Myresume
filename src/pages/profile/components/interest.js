import React, { Fragment } from "react";
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
			<Fragment>
				<div className="content">
					<p className="title has-text-primary is-size-3-tablet is-size-5-mobile">
						Interests
					</p>
				</div>
				<div className="tags are-medium">
					{interest ? (
						interest.map((i, index) => (
							<span
								key={index}
								className="tag is-primary is-size-6-tablet is-size-7-mobile"
							>
								{i}
							</span>
						))
					) : (
						<p>Loading...</p>
					)}
				</div>
			</Fragment>
		);
	}
}

export default ProfileInterest;
