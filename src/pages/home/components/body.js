// import React from "react";
// import { Link } from "react-router-dom";
// import HomeButtonBar from "./buttonbar";

// import mydata from "@mydata";

// class HomeBody extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: "",
// 			jobtitle: "",
// 			intro: "",
// 		};
// 	}

// 	componentDidMount() {
// 		this.setState({
// 			name: mydata["profile"]["aboutme"]["name"],
// 			jobtitle: mydata["profile"]["aboutme"]["jobtitle"],
// 			intro: mydata["profile"]["aboutme"]["intro"],
// 		});
// 	}

// 	render() {
// 		var { name, jobtitle, intro } = this.state;
// 		return (
// 			<div className="container has-text-centered">
// 				<div className="content is-large">
// 					<h1 className="title is-size-1-tablet is-size-4-mobile is-uppercase has-text-primary has-text-centered has-text-weight-bold">
// 						{name}
// 					</h1>
// 					<h2 className="subtitle is-size-3-tablet is-size-5-mobile is-uppercase has-text-white has-text-centered">
// 						{jobtitle}
// 					</h2>
// 					<h2 className="is-size-4-tablet is-size-6-mobile has-text-white has-text-justified has-text-left-mobile">
// 						&emsp;&emsp;&ensp;{intro}
// 					</h2>
// 					{/* <br />
// 					<HomeButtonBar />
// 					<br /> */}
// 					{/* <div className="field is-justify-content-center button-down">
// 						<p className="control">
// 							<Link to="/" target="_blank" rel="noreference">
// 								<span className="icon has-text-white is-large">
// 									<i class="fas fa-chevron-circle-down fa-2x"></i>
// 								</span>
// 							</Link>
// 						</p>
// 					</div> */}
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default HomeBody;
