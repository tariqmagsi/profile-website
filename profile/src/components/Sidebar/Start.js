import React, { Component } from "react";
import tariq from "../../images/tariq.png";
import Radium, { StyleRoot } from "radium";
import bounceInDown from "react-animations/lib/bounce-in-down";
import CV from "../../CV/Tariq Hussain Magsi(CV).pdf";
import { Link } from "react-scroll";

class Start extends Component {
  render() {
    const styles = {
      bounceInDown: {
        animation: "x 1s",
        animationName: Radium.keyframes(bounceInDown, "bounceInDown")
      }
    };
    return (
      <div style={{ borderBottom: "1px solid gray" }}>
        <StyleRoot>
          <div style={styles.bounceInDown}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              effect={0}
              duration={1000}
            >
              <img
                src={tariq}
                width="200px"
                height="80px"
                style={{
                  marginLeft: "20%",
                  marginTop: "80px",
                  cursor: "pointer"
                }}
                alt="Tariq"
                title="Home"
              />
            </Link>
          </div>
        </StyleRoot>
        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "80px",
              cursor: "pointer",
              color: "white"
            }}
            title="Resume"
            className="resume"
          >
            RESUME
          </h2>
        </a>
      </div>
    );
  }
}
export default Start;
