import React, { Component } from "react";
import "./App.scss";
import "@fortawesome/fontawesome-free/js/brands.js";
import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/fontawesome.js";

import Router from "./router";

class App extends Component {
  render() {
    return <Router />;
  }
}
export default App;
