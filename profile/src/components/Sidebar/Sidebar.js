import React, { Component } from "react";
import Menu from "./Menu";
import Radium, { StyleRoot } from "radium";
import fadeIn from "react-animations/lib/fade-in";

class Sidebar extends Component {
  render() {
    const styles = {
      bounceInDown: {
        animation: "x 1s",
        animationName: Radium.keyframes(fadeIn, "bounceInDown")
      }
    };
    return (
      <StyleRoot>
        <div style={styles.bounceInDown}>
          <Menu />
        </div>
      </StyleRoot>
    );
  }
}
export default Sidebar;
