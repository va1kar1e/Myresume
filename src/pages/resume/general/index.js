import React, { Fragment } from "react";
import mydata from "@mydata";

class ResumeGeneral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general_link: "",
    };
  }

  componentDidMount() {
    this.setState({
      general_link: mydata["profile"]["resume"]["general"],
    });
  }

  download() {
    const { general_link } = this.state;
    const { type } = this.props.match.params;
    if (type === "download" && general_link !== undefined) {
      window.location.href = "/files/" + general_link;
      return null;
    }
  }

  // Create Document Component
  render() {
    this.download();
    return (
      <Fragment>
        <div className="page">
          <h1 className="has-text-dark">Resume General</h1>
          {/* <Link to="/resume/general/download">General Version</Link> */}
        </div>
      </Fragment>
    );
  }
}

export default ResumeGeneral;
