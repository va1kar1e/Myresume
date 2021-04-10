import React from "react";
import { Link } from "react-router-dom";

class HomeFooter extends React.Component {
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
      <footer className="footer has-background-dark">
        <div className="content has-text-centered">
          <p className="has-text-primary">
            <strong>
              <Link to="/">{url}</Link>
            </strong>{" "}
            by Siwanont Sittinam. Copyright &copy; 2021, Siwanont Sittinam.
          </p>
        </div>
      </footer>
    );
  }
}

export default HomeFooter;
