import React, { Component } from "react";
import { Container, Row, Col } from "bootstrap-4-react";
import web from "../../images/web-dev.png";
import mobile from "../../images/mobile-dev.jpg";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default class Services extends Component {
  state = {
    array: [
      {
        image: web,
        heading: "Web Design and Development",
        description:
          "Web development is the work involved in developing a web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web-based internet applications, electronic businesses, and social network services..."
      },
      {
        image: mobile,
        heading: "Mobile Application Development (Android/IOS)",
        description:
          "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones..."
      }
    ],
    position: 0,
    flag: false
  };

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

    if (this.state.position > 52) {
      this.setState({ flag: true });
    }
  };
  render() {
    const styles = {
      fadeIn: {
        animation: "x 1s",
        animationName: Radium.keyframes(fadeIn, "fadeIn")
      }
    };
    if (this.state.flag)
      return (
        <div
          className="about"
          id="services"
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
                AMAZING SERVICES
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "normal"
                  }}
                  className="about-text1"
                >
                  Meet my amazing services
                </div>
              </div>
              <br />
              <Row style={{ marginTop: "80px", backgroundColor: "#f6f7fd" }}>
                {this.state.array.map(item => (
                  <Col key={item.heading}>
                    <div
                      className="ma4 dib pa3 grow shadow-4"
                      style={{
                        textAlign: "center",
                        width: this.props.flag ? "400px" : "300px",
                        cursor: "pointer"
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.heading}
                        style={{
                          height: this.props.flag ? "300px" : "200px",
                          display: "inline"
                        }}
                      />
                      <br />
                      <br />
                      <h6 style={{ fontWeight: "bold", fontSize: "15px" }}>
                        {item.heading}
                      </h6>
                      <br />
                      <p style={{ fontSize: "12px" }}>{item.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
              <br />
              <br />
            </Container>
          </StyleRoot>
        </div>
      );
    else return <div id="services" style={{ height: "100vh" }}></div>;
  }
}
