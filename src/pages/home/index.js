import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import mydata from "@mydata";
import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    this.setState({ name: mydata["profile"]["aboutme"]["name"] });
  }

  render() {
    var { name } = this.state;
    return (
      <Fragment>
        <h1 class="title">Home</h1>
        <h1 class="title">{name}</h1>
      </Fragment>
    );
  }
}

export default Home;
