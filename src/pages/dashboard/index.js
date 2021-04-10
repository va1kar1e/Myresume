import React from "react";
import Nav from "@components/nav";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-head">
          <Nav />
        </div>
        <div className="hero-body">
          <div className="container">
            <p className="has-text-white">Dashboard</p>
          </div>
        </div>
        <div className="hero-foot"></div>
      </section>
    );
  }
}

export default Dashboard;
