import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Font Awesome
import "@fortawesome/fontawesome-free/js/brands.js";
import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/fontawesome.js";

// My Router
import Router from "@router";

const AppWithRouter = () => (
	<BrowserRouter>
		<Router />;
	</BrowserRouter>
);
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));
