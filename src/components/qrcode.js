import React from "react";
import QRCode from "qrcode.react";
import logo from "@images/logo.png";

class MyQRCode extends React.Component {
  render() {
    const { link, size } = this.props;
    var logoSize = 40;
    if (size < 200) {
      logoSize = 30;
    }

    return (
      <QRCode
        value={link}
        size={size}
        renderAs="svg"
        bgColor="#ffffff"
        fgColor="#6b6e70"
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
