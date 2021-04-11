import React from "react";
import { Link } from "react-router-dom";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <section className="hero is-large">
        <div className="container">
          <p className="has-text-white">Resume</p>
          <Link to="/resume/general">General Version</Link>
          <Link to="/resume/ats">ATS Version</Link>
        </div>
      </section>
    );
  }
}

export default Resume;
