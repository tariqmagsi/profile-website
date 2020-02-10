import React, { Component } from "react";
import profileImage from "../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar/Nabar";
import { Link } from "react-scroll";
import fadeInDown from "react-animations/lib/fade-in-down";
import { getFromStorage, removeFromStorage } from "../../utils/storage";

export default class Home extends Component {
  state = { position: 0, flag: false };

  logout = token => {
    fetch("/security/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          removeFromStorage(process.env.REACT_APP_KEY, token);
        }
      });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    if (this.state.position >= 0) {
      this.setState({ flag: true });
    }
    const obj = getFromStorage(process.env.REACT_APP_KEY);
    if (obj && obj.token) {
      this.logout(obj.token);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    this.setState({
      position: scrolled
    });
  };
  render() {
    const styles = {
      bounce: {
        animation: "x 2s",
        animationName: Radium.keyframes(bounce, "bounce")
      },
      fadeIn: {
        animation: "x 1s",
        animationName: Radium.keyframes(fadeInDown, "fadeIn")
      }
    };
    if (this.state.flag)
      return (
        <div
          className="home"
          id="home"
          style={{
            width: this.props.flag ? "100%" : "90%",
            marginLeft: this.props.flag ? "0%" : "10%"
          }}
        >
          <Navbar />
          <StyleRoot style={styles.fadeIn}>
            <div>
              <img
                alt="Profile"
                src={profileImage}
                style={{
                  width: this.props.flag ? "270px" : "250px",
                  height: this.props.flag ? "270px" : "250px",
                  borderRadius: "50%",
                  border: "10px solid silver",
                  marginLeft: this.props.flag ? "40%" : "50%",
                  marginTop: "120px",
                  transition: "all 0.5s ease"
                }}
                className="home-image"
              />
              <br />
              <br />
              <StyleRoot>
                <div style={styles.fadeIn}>
                  <div
                    style={{
                      marginLeft: this.props.flag ? "38%" : "51%",
                      fontSize: this.props.flag ? "50px" : "40px",
                      transition: "all 0.5s ease"
                    }}
                    className="home-text"
                  >
                    <span
                      style={{
                        color: "white"
                      }}
                    >
                      TARIQ
                    </span>{" "}
                    <span style={{ color: "orange" }}>MAGSI</span>
                  </div>
                </div>
              </StyleRoot>
              <StyleRoot style={styles.fadeIn}>
                <div
                  style={{
                    fontSize: this.props.flag ? "30px" : "20px",
                    color: "white",
                    marginLeft: this.props.flag ? "45%" : "57%",
                    marginTop: "10px",
                    transition: "all 0.5s ease"
                  }}
                  className="home-text2"
                >
                  <span> I'm a </span>
                </div>
                <div
                  style={{
                    fontSize: this.props.flag ? "30px" : "20px",
                    color: "white",
                    marginLeft: this.props.flag ? "35%" : "48.5%",
                    marginTop: "10px",
                    transition: "all 0.5s ease"
                  }}
                  className="home-texts"
                >
                  <strong style={{ color: "orange" }}>
                    <Typewriter
                      options={{
                        strings: [
                          "Freelancer",
                          "Full Stack Web Developer",
                          "Full Stack Mobile App Developer"
                        ],
                        autoStart: true,
                        loop: true,
                        blink: false
                      }}
                    />
                  </strong>
                </div>
              </StyleRoot>
              <br />
              <br />
              <br />
              <div
                style={{
                  fontSize: "25px",
                  color: "white",
                  marginLeft: this.props.flag ? "48%" : "60%",
                  marginTop: "10px",
                  cursor: "pointer",
                  paddingBottom: "20px"
                }}
                className="home-arrow"
              >
                <StyleRoot>
                  <div style={styles.bounce}>
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      effect={0}
                      duration={1000}
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </Link>
                  </div>
                </StyleRoot>
              </div>
            </div>
            <div className="about-btn">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                effect={0}
                duration={1000}
              >
                <button
                  style={{
                    height: this.state.position < 10 ? "0px" : "40px",
                    visibility: this.state.position < 10 ? "hidden" : "initial",
                    width: "40px",
                    backgroundColor: "orange",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "14px",
                    position: "fixed",
                    bottom: "20px",
                    right: "30px",
                    zIndex: "1",
                    opacity: this.state.position < 10 ? "0" : "1",
                    transition: "all 0.5s ease"
                  }}
                >
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ color: "white" }}
                  />
                </button>
              </Link>
            </div>
          </StyleRoot>
        </div>
      );
    else return <div id="home" style={{ height: "100vh" }}></div>;
  }
}
