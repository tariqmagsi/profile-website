import React, { Component } from "react";
import Slider from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default class Start extends Component {
  state = { isOpen: true };

  render() {
    return (
      <Slider isOpen={this.state.isOpen}>
        <div></div>
      </Slider>
    );
  }
}
