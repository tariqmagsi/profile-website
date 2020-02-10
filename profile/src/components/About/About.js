import React, { Component } from "react";
import { Container, Row, Col } from "bootstrap-4-react";
import about from "../../images/about.jpg";
import Skills from "./Skills";
import Typewriter from "typewriter-effect";
import Radium, { StyleRoot } from "radium";
import fadeIn from "react-animations/lib/fade-in";
import { Link } from "react-scroll";
import CV from "../../CV/Tariq Hussain Magsi(CV).pdf";

export default class About extends Component {
  state = { position: 0, flag: false };
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
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
    if (this.state.position > 10) {
      this.setState({ flag: true });
    }
  };
  render() {
    const styles = {
      fadeIn: {
        animation: "x 2s",
        animationName: Radium.keyframes(fadeIn, "fadeIn")
      }
    };
    if (this.state.flag)
      return (
        <div
          className="about"
          id="about"
          style={{
            width: this.props.flag ? "100%" : "75%",
            marginLeft: this.props.flag ? "0%" : "25%"
          }}
        >
          <StyleRoot style={styles.fadeIn}>
            <Container>
              <div
                style={{
                  color: "black",
                  fontSize: "45px",
                  fontWeight: "bold",
                  borderLeft: "7px solid orange",
                  paddingLeft: "20px"
                }}
                className="about-text"
              >
                ABOUT ME
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "normal"
                  }}
                  className="about-text1"
                >
                  Main informations about me
                </div>
              </div>
              <br />

              <Row>
                <Col className="about-col">
                  <div style={{ marginTop: "145px" }}>
                    <img
                      alt="About"
                      src={about}
                      style={{
                        height: this.props.flag ? "400px" : "270px",
                        border: "7px solid black"
                      }}
                    />
                  </div>
                </Col>
                <Col>
                  <div
                    style={{ marginTop: "60px", fontSize: "1.3em" }}
                    className="about-text2"
                  >
                    I'm Tariq Magsi
                    <strong style={{ color: "orange" }}>
                      <Typewriter
                        options={{
                          strings: [
                            "Freelancer",
                            "Full Stack Web Developer",
                            "Full Stack Mobile App Developer"
                          ],
                          autoStart: true,
                          loop: true
                        }}
                      />
                    </strong>
                  </div>

                  <div
                    style={{
                      marginTop: "50px",
                      fontSize: "0.9em",
                      overflowX: "hidden"
                    }}
                    className="about-text3"
                  >
                    <p>
                      Hi! My name is{" "}
                      <strong style={{ color: "orange" }}>Tariq Magsi</strong>.
                      I am a Web and Mobile Application Developer, and I'm very
                      passionate and dedicated to my work. I have acquired the
                      skills and knowledge necessary to make your project a
                      success. I enjoy every step of the design process, from
                      discussion and collaboration to concept and execution, but
                      I find the most satisfaction in seeing the finished
                      product do everything for you that it was created to do.
                    </p>
                  </div>
                  <div style={{ marginLeft: "-30px", overflowX: "auto" }}>
                    <table>
                      <tbody>
                        <tr>
                          <th>Birthday:</th>
                          <td>16-08-1998</td>
                          <th>Age:</th>
                          <td>21</td>
                        </tr>
                        <tr>
                          <th>City:</th>
                          <td>Karachi,Pakistan</td>
                          <th>Interests:</th>
                          <td>Cricket</td>
                        </tr>
                        <tr>
                          <th>Study:</th>
                          <td>DHA Suffa University</td>
                          <th>Degree:</th>
                          <td>Bachelors in Computer Science (On Progress)</td>
                        </tr>
                        <tr>
                          <th>Website:</th>
                          <td>tariqmagsi.herokuapp.com</td>
                          <th>Mail:</th>
                          <td>tariqmagsi125@gmail.com</td>
                        </tr>
                        <tr>
                          <th>Phone:</th>
                          <td>+92-3003750521</td>
                          <th>Twitter:</th>
                          <td>@iamtariq23</td>
                        </tr>
                        <tr className="about-btn">
                          <td>
                            <a
                              href={CV}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: "none" }}
                            >
                              <button
                                style={{
                                  height: "50px",
                                  width: "140px",
                                  backgroundColor: "orange",
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  fontSize: "14px",
                                  color: "white"
                                }}
                              >
                                Download CV
                              </button>
                            </a>
                          </td>
                          <td>
                            <Link
                              activeClass="active"
                              to="contact"
                              spy={true}
                              smooth={true}
                              effect={0}
                              duration={1000}
                            >
                              <button
                                style={{
                                  height: "50px",
                                  width: "160px",
                                  backgroundColor: "orange",
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  fontSize: "14px"
                                }}
                              >
                                Send Message
                              </button>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </Container>
            <br />
            <br />
            <Skills flag={this.props.flag} />
          </StyleRoot>
        </div>
      );
    else return <div id="about" style={{ height: "100vh" }}></div>;
  }
}
