import React from "react";
import QRCode from "qrcode.react";
import logo from "@images/logo.png";

class ResumeQRCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    const { link, size } = this.props;
    return (
      <QRCode
        value={link}
        size={size}
        renderAs="svg"
        bgColor="#ffffff"
        fgColor="#222629"
        level="Q"
        imageSettings={{
          src: logo,
          x: null,
          y: null,
          height: 30,
          width: 30,
          excavate: true,
        }}
      />
    );
  }
}

export default ResumeQRCode;
