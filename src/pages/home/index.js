import React, { Fragment } from "react";
import mydata from "@mydata";
import HomeNav from "./nav";
import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      jobtitle: "",
      url: "",
    };
  }

  componentDidMount() {
    this.setState({
      name: mydata["profile"]["aboutme"]["name"],
      jobtitle: mydata["profile"]["aboutme"]["jobtitle"],
      url: window.location.hostname,
    });
  }

  render() {
    var { name, jobtitle } = this.state;
    return (
      <Fragment>
        <HomeNav />
        <section className="section is-large has-background-primary">
          <h1 className="title is-size-1-tablet is-size-2-mobile is-uppercase has-text-white has-text-centered is-family-sans-serif has-text-weight-bold">
            {name}
          </h1>
          <h2 className="subtitle is-size-3-tablet is-size-4-mobile is-uppercase has-text-white-bis has-text-centered is-family-sans-serif">
            {jobtitle}
          </h2>
        </section>
        <div className="columns has-background-info">
          <div className="column">1</div>
          <div className="column">2</div>
          <div className="column">3</div>
          <div className="column">4</div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
