import React from "react";
import { Link } from "react-router-dom";

class Notfound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  componentDidMount() {
    this.setState({
      url: window.location.hostname,
    });
  }

  render() {
    var { url } = this.state;
    return (
      <div className="container">
        <div className="section is-large">
          <p className="title is-size-1-tablet is-size-2-mobile is-uppercase has-text-weight-bold has-text-primary">
            404 not found
          </p>
          <p className="subtitle is-size-3-tablet is-size-4-mobile has-text-white">
            The page you are trying to get to never existed in this reality, or
            has migrated to a parallel universe. Click this link to return to{" "}
            <strong>
              <Link to="/" className="is-primary">
                {url}
              </Link>
            </strong>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default Notfound;
