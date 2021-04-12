import React from "react";
import { Link } from "react-router-dom";
import ResumeQRCode from "./components/qrcode";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ats_path: "resume/ats",
      general_path: "/resume/general",
    };
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    const { general_path, ats_path } = this.state;
    return (
      <section className="hero is-large">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <p className="is-size-5">General Version</p>
                    <figure className="image is-128x128">
                      <ResumeQRCode
                        link={window.location.href + general_path}
                        size={128}
                      />
                    </figure>
                  </div>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item is-size-6">
                    <span>
                      <Link to={general_path}>Web</Link>
                    </span>
                  </p>
                  <p className="card-footer-item is-size-6">
                    <span>
                      <Link to="/">Download</Link>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <p className="is-size-5">ATS Version</p>
                    <figure className="image is-128x128">
                      <ResumeQRCode
                        link={window.location.href + ats_path}
                        size={128}
                      />
                    </figure>
                  </div>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item is-size-6">
                    <span>
                      <Link to={ats_path}>Web</Link>
                    </span>
                  </p>
                  <p className="card-footer-item is-size-6">
                    <span>
                      <Link to="/">Download</Link>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
