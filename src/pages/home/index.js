import React, { Fragment } from "react";
import mydata from "@mydata";
import HomeNav from "./nav";
import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
    };
  }

  componentDidMount() {
    this.setState({
      name: mydata["profile"]["aboutme"]["name"],
      url: window.location.hostname,
    });
  }

  render() {
    var { name } = this.state;
    return (
      <Fragment>
        <HomeNav />
        <section className="section is-large">
          <h1 className="title">{name}</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading.
          </h2>
        </section>
        <div className="columns is-desktop">
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
