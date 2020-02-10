import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Start from "./Start";
import Radium, { StyleRoot } from "radium";
import { bounceInUp } from "react-animations";
import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Link } from "react-scroll";

class Menu extends Component {
  state = {
    flag: false,
    width: false,
    position: 0
  };
  whenClickHandler = () => {
    this.setState({
      flag: !this.state.flag,
      width: !this.state.width
    });
  };

  render() {
    const styles = {
      bounceInDown: {
        animation: "x 1s",
        animationName: Radium.keyframes(bounceInUp, "bounceInDown")
      }
    };
    return (
      <div>
        <div
          className="sidebar"
          style={{ width: this.state.width ? "0px" : "320px" }}
        >
          <Start />
          <StyleRoot>
            <div style={styles.bounceInDown}>
              <ul className="list-sidebar">
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
                  <span
                    style={{
                      backgroundColor: "orange",
                      marginLeft: this.state.flag ? "-80px" : "84px",
                      position: "fixed",
                      border: "none",
                      height: "40px",
                      width: "40px",
                      cursor: "pointer",
                      borderRadius: "3px"
                    }}
                    className="new"
                    title={this.state.flag ? "Turn On" : "Turn Off"}
                    onClick={this.whenClickHandler}
                  >
                    <FontAwesomeIcon
                      className="new-icon"
                      icon={this.state.flag ? faArrowRight : faArrowLeft}
                      style={{
                        fontSize: "15px",
                        color: "black"
                      }}
                    />
                  </span>
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

              <p
                style={{
                  marginLeft: "80px",
                  fontSize: "20px",
                  marginTop: "-15px"
                }}
                className="icons"
              >
                <a
                  href="https://www.facebook.com/tariq.magsi.51"
                  target="_blank"
                  rel="noopener noreferrer"
                  syle={{ textDecoration: "none", color: "white" }}
                >
                  <span title="Facebook">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "white" }}
                      className="list-sidebar-icon"
                    />
                  </span>
                </a>
                <a
                  href="https://github.com/tariqmagsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  syle={{ color: "white" }}
                >
                  <span title="Github">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "white" }}
                      className="list-sidebar-icon"
                    />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/_tariqmagsi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  syle={{ textDecoration: "none", color: "white" }}
                >
                  <span title="Instagram">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "white" }}
                      className="list-sidebar-icon"
                    />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tariq-magsi-444682132/"
                  target="_blank"
                  rel="noopener noreferrer"
                  syle={{ textDecoration: "none", color: "white" }}
                >
                  <span title="Linkedin">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: "white" }}
                      className="list-sidebar-icon"
                    />
                  </span>
                </a>
              </p>
            </div>
          </StyleRoot>
        </div>

        <Home flag={this.state.flag} />
        <About flag={this.state.flag} />
        <Services flag={this.state.flag} />
        <Portfolio flag={this.state.flag} />
        <Contact flag={this.state.flag} />
        <Footer flag={this.state.flag} />
      </div>
    );
  }
}
export default Menu;
