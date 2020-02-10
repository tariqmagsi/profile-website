import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import Radium, { StyleRoot } from "radium";
import { rollIn, merge, rollOut } from "react-animations";
import bounceInDown from "react-animations/lib/bounce-in-down";
import { Link } from "react-scroll";
import CV from "../../CV/Tariq Hussain Magsi(CV).pdf";

export default class Navbar extends Component {
  state = { flag: false };
  whenClick = () => {
    this.setState({ flag: !this.state.flag });
  };
  render() {
    const merged = merge(rollOut, rollIn);
    const styles = {
      rotate: {
        animation: "x 1s",
        animationName: Radium.keyframes(merged, "rollIn")
      },
      rotateOut: {
        animation: "x 1s",
        animationName: Radium.keyframes(rollOut, "rollOut")
      },
      bounceInDown: {
        animation: "x 1s",
        animationName: Radium.keyframes(bounceInDown, "bounceInDown")
      }
    };

    return (
      <div style={{ height: "0px" }}>
        <div
          className="navbar"
          style={{
            height: this.state.flag ? "400px" : "100px"
          }}
        >
          <div
            className="navbar-row"
            style={{
              color: "white",
              fontSize: "30px",
              paddingTop: "20px",
              paddingLeft: "30px",
              paddingBottom: "40px",
              width: "50%"
            }}
          >
            <StyleRoot style={styles.bounceInDown}>
              <span
                className="nav-txt"
                style={{ cursor: "pointer", fontSize: "4vh" }}
              >
                TARIQ
              </span>
            </StyleRoot>
          </div>
          <div
            className="navbar-row"
            style={{
              fontSize: "30px",
              color: "white",
              width: "50%",
              paddingRight: "30px",
              justifyContent: "flex-end",
              paddingTop: "20px",
              display: this.state.flag ? "none" : "flex",
              cursor: "pointer"
            }}
          >
            <StyleRoot style={styles.rotate}>
              <FontAwesomeIcon icon={faHamburger} onClick={this.whenClick} />
            </StyleRoot>
          </div>
          <div
            className="navbar-row"
            style={{
              fontSize: "30px",
              color: "white",
              paddingRight: "30px",
              justifyContent: "flex-end",
              paddingTop: "20px",
              display: this.state.flag ? "flex" : "none",
              cursor: "pointer"
            }}
          >
            <StyleRoot style={styles.rotate}>
              <span onClick={this.whenClick}> X</span>
            </StyleRoot>
          </div>

          <div className="navbar-menu navbar-row">
            <ul
              style={{
                opacity: this.state.flag ? "1" : "0",
                overflow: this.state.flag ? "show" : "hidden",
                transition: "all .5s ease .5s",
                fontSize: this.state.flag ? "18px" : "0px",
                height: this.state.flag ? "auto" : "0px",
                marginTop: "-100px"
              }}
            >
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  effect={0}
                  duration={1000}
                >
                  <span title="Home">HOME</span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  effect={0}
                  duration={1000}
                >
                  <span title="About">ABOUT</span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  effect={0}
                  duration={1000}
                >
                  <span title="Services">SERVICES</span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  effect={0}
                  duration={1000}
                >
                  <span title="Portfolio">PORTFOLIO</span>
                </Link>
              </li>
              <li>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <span title="Resume" style={{ color: "white" }}>
                    RESUME
                  </span>
                </a>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  effect={0}
                  duration={1000}
                >
                  <span title="Contact">CONTACT</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
