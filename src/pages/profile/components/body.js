import React from "react";
import ProfileWork from "./work";
import ProfileEdu from "./edu";
import ProfileRecognition from "./recognition";
import ProfileCert from "./cert";
import ProfileInterest from "./interest";
import ProfileCourse from "./course";

class ProfileBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <div className="container has-text-left">
        <ProfileWork />
        <ProfileEdu />
        <ProfileRecognition />
        <ProfileCert />
        <ProfileInterest />
        <ProfileCourse />
      </div>
    );
  }
}

export default ProfileBody;
