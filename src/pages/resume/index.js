import React from "react";
import { Link } from "react-router-dom";
import ResumeQRCode from "./components/qrcode";
import logo from "@images/logo.png";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ats_path: "resume/Linkts",
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
          <div class="columns">
            <div class="column">
              <div className="card">
                <div className="card-image is-centered">
                  <figure class="image is-128x128">
                    <ResumeQRCode
                      link={window.location.href + general_path}
                      size={128}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p>General Version</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <span>
                      View on <Link to={general_path}>Web</Link>
                    </span>
                  </p>
                  <p class="card-footer-item">
                    <span>
                      <Link to="/">Download File</Link>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
            <div class="column">
              <div className="card">
                <div className="card-image is-centered">
                  <figure class="image is-128x128">
                    <ResumeQRCode
                      link={window.location.href + ats_path}
                      size={128}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p>ATS Version</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <span>
                      View on <Link to={ats_path}>Web</Link>
                    </span>
                  </p>
                  <p class="card-footer-item">
                    <span>
                      <Link to="/">Download File</Link>
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
