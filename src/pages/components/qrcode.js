import React from "react";
import QRCode from "qrcode.react";
import logo from "@images/logo.png";

class MyQRCode extends React.Component {
	render() {
		const { link, size } = this.props;
		var logoSize = 45;
		if (size === 200) {
			logoSize = 35;
		}

		return (
			<QRCode
				value={link}
				size={size}
				renderAs="svg"
				bgColor="#2d3439"
				fgColor="#f5f5f5"
				level="Q"
				imageSettings={{
					src: logo,
					x: null,
					y: null,
					height: logoSize,
					width: logoSize,
					excavate: true,
				}}
			/>
		);
	}
}

export default MyQRCode;
