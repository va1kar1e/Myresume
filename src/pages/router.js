import React from "react";
import { Route, Switch } from "react-router-dom";

// My Pages
import Home from "@pages/home";
import Profile from "@pages/profile";
import Dashboard from "@pages/dashboard";
import NotFound from "@pages/notfound";

class Router extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/profile" component={Profile} />
				<Route path="/dashboard" component={Dashboard} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}

export default Router;
