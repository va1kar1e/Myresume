import React from "react";
import ProfileWork from "./work";
import ProfileEdu from "./edu";
import ProfileRecognition from "./recognition";

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
      </div>
    );
  }
}

export default ProfileBody;
