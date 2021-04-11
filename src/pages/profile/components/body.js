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
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <ProfileWork />
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <ProfileEdu />
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <ProfileRecognition />
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <ProfileCert />
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <ProfileInterest />
              <ProfileCourse />
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileBody;
