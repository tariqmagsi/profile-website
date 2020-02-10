import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        className="footer"
        style={{
          width: this.props.flag ? "100%" : "90%",
          marginLeft: this.props.flag ? "0%" : "10%",
          backgroundColor: "#041230",
          height: "120px",
          transition: "all 0.3s ease"
        }}
      >
        <div style={{ paddingTop: "60px" }}>
          <span
            style={{
              color: "white",
              marginLeft: this.props.flag ? "7%" : "17%"
            }}
          >
            {" "}
            © Copyright 2019-2030. All Rights are Reserved.
          </span>
        </div>
      </div>
    );
  }
}
