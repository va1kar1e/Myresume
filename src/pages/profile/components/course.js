import React from "react";
import mydata from "@mydata";

class ProfileCourse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			course: "",
		};
	}

	componentDidMount() {
		this.setState({
			course: mydata["profile"]["course"],
		});
	}

	render() {
		var { course } = this.state;
		return (
			<section className="section section-profile" id="course">
				<div className="content">
					<h1 className="title has-text-primary is-size-3-tablet is-size-4-mobile">
						Courses & Skills
					</h1>
				</div>
				<div className="tags are-medium">
					{course ? (
						course.map((c, index) => (
							<span
								key={index}
								className="tag is-light is-size-6-tablet is-size-6-mobile"
							>
								{c}
							</span>
						))
					) : (
						<p>Loading...</p>
					)}
				</div>
			</section>
		);
	}
}

export default ProfileCourse;
