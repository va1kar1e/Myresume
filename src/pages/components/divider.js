import React, { Component } from "react";

class Divider extends Component {
	render() {
		var { mywidth } = this.props;
		return (
			<hr
				className="solid"
				style={{
					border: "1px solid white",
					width: mywidth,
					margin: "12px auto 10px auto",
				}}
			></hr>
		);
	}
}

export default Divider;
