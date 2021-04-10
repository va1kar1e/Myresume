import React from "react";
import HomeNav from "./components/nav";
import HomeBody from "./components/body";
import HomeFooter from "./components/footer";
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
      <section class="hero is-primary is-fullheight">
        <div class="hero-head">
          <HomeNav />
        </div>
        <div class="hero-body">
          <HomeBody />
        </div>
        <div class="hero-foot">
          <HomeFooter />
        </div>
      </section>
    );
  }
}

export default Home;
