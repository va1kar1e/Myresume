import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import './App.css';
import "./scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import MainContent from "./pages/Maincontent";

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={MainContent} />
      </Switch>
    </Router>
  );
}

export default App;
