import React, { Component } from "react";
import { Container, Row } from "bootstrap-4-react";
import "tachyons";
import ImagePortion from "./ImagePortion";
import Radium, { StyleRoot } from "radium";
import fadeIn from "react-animations/lib/fade-in";

export default class Portfolio extends Component {
  state = {
    array: [
      {
        link: "https://www.youtube.com/embed/l3D-d8AsX9A",
        description:
          "It is an online learning Quran where students and teacher can enroll themselves in courses and admin will make sure that whether student had paid fee or not and admin can manage all these thing and admin can decide who will be student and teacher and teacher can teach students live on this website embed with youtube.This is the demo of my project made from React,Redux,Node,Express,MongoDB in short MERN Stack website.",
        languges: "HTML, CSS, React, Redux, Node, Express, MongoDB",
        name: "TA'ALAM ALQURAN",
        websiteLink: "https://taalam-alquran.herokuapp.com"
      },
      {
        link: "https://www.youtube.com/embed/SmXJG09GFx8",
        description:
          "It is a dummy facebook mobile application made for practice and a user can login, signup in application and logout from application. Made from React Native, Node, Express",
        name: "Facebook",
        websiteLink:
          "https://github.com/tariqmagsi/Facebook-React-Native-Demo-App"
      },
      {
        link: "https://www.youtube.com/embed/nnZ7-XIz7FE",
        description:
          "It is my personal webiste that you are accessing now made from HTML, CSS, Bootstrap, React, Node, Express, MongoDB",
        name: "Tariq Magsi | Profile",
        websiteLink: "http://tariqmagsi.herokuapp.com/"
      }
    ],
    position: 0,
    flag: false,
    flag1: false
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

    if (this.state.position > 78) {
      this.setState({ flag: true });
    }
    if (this.state.position > 84) {
      this.setState({ flag1: true });
    }
  };
  render() {
    const { array } = this.state;
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
          id="portfolio"
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
                PORTFOLIO
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "normal"
                  }}
                  className="about-text1"
                >
                  Checkout my latest projects
                </div>
              </div>
              <br />
              <Row style={{ marginTop: "80px", marginBottom: "80px" }}>
                {array.map(item => (
                  <div
                    key={item.name}
                    className="portfolio-btn ma4 dib pa3 grow shadow-4"
                    style={{
                      textAlign: "center",
                      width: "350px",
                      backgroundColor: "#0d2352",
                      color: "white",
                      cursor: "pointer"
                    }}
                  >
                    <iframe
                      width="300"
                      height="215"
                      title="Ta'alam AlQuran"
                      src={item.link}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p style={{ textAlign: "center", fontSize: "12px" }}>
                      {item.description}
                      <br />
                      <br />
                      Click Below For Link:{" "}
                    </p>
                    <a
                      href={item.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        style={{
                          height: "50px",
                          width: "300px",
                          backgroundColor: "orange",
                          fontWeight: "bold",
                          cursor: "pointer"
                        }}
                      >
                        {item.name}
                      </button>
                    </a>
                  </div>
                ))}
              </Row>
              <ImagePortion flag={this.state.flag1} />
            </Container>
          </StyleRoot>
        </div>
      );
    else return <div id="portfolio" style={{ height: "100vh" }}></div>;
  }
}
