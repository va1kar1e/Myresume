import React, { Component, Fragment } from "react";

class Divider extends Component {
  render() {
    var { mywidth } = this.props;
    return (
      <Fragment>
        <hr
          class="solid"
          style={{
            border: "1px solid white",
            width: mywidth,
            margin: "0 auto",
          }}
        ></hr>
      </Fragment>
    );
  }
}

export default Divider;
