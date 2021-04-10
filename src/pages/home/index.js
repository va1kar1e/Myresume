import React from "react";
import Nav from "@components/nav";
import HomeBody from "./components/body";
import Footer from "@components/footer";
import "./home.scss";

class Home extends React.Component {
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
          <HomeBody />
        </div>
        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    );
  }
}

export default Home;
