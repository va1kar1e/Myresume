import React, { Fragment } from "react";
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
      <Fragment>
        <div className="content">
          <p className="title has-text-primary">Courses</p>
        </div>
        <div className="tags are-medium">
          {course ? (
            course.map((c, index) => (
              <span key={index} class="tag is-primary">
                {c}
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

export default ProfileCourse;
