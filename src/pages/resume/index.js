import React from "react";
import { Link } from "react-router-dom";
import ResumeQRCode from "./components/qrcode";
// import "./resume.scss";

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
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <figure className="image is-squared">
                <ResumeQRCode
                  link={window.location.href + "link/resume"}
                  size={256}
                />
              </figure>
            </div>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item is-size-6">
              <span>
                <Link to={"/link/resume"} target="_blank" rel="noreference">
                  Download
                </Link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Resume;
