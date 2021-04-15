import React from "react";

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
      <div className="container">
        <div className="section is-large">
          <p className="title is-size-1-tablet is-size-2-mobile is-uppercase has-text-weight-bold has-text-primary">
            Not Authorize - Dashboard
          </p>
        </div>
      </div>
      // <section className="hero is-fullheight">
      //   <div className="hero-head"></div>
      //   <div className="hero-body">
      //     <div className="container">
      //       <h1 className="has-text-white is-size-1">
      //         Not Authorize - Dashboard
      //       </h1>
      //     </div>
      //   </div>
      //   <div className="hero-foot"></div>
      // </section>
    );
  }
}

export default Dashboard;
