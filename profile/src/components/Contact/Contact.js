import React, { Component } from "react";
import { Container, Row, Col } from "bootstrap-4-react";
import Radium, { StyleRoot } from "radium";
import fadeIn from "react-animations/lib/fade-in";
import validator from "validator";

export default class Contact extends Component {
  state = {
    position: 0,
    flag: false,
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageSent: ""
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

    if (this.state.position > 95) {
      this.setState({ flag: true });
    }
  };
  whenChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      nameError: "",
      emailError: "",
      sentMessage: ""
    });
  };
  sendMessage = () => {
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setTimeout(
            () =>
              this.setState({
                messageSent: ""
              }),
            2000
          );

          this.setState({
            name: "",
            email: "",
            message: "",
            nameError: "",
            emailError: "",
            messageSent: "Thank you for contacting us :)"
          });
        }
      });
  };
  errorName = () => {
    for (let i = 0; i < 10; i++) {
      if (this.state.name.includes(i)) {
        this.setState({ nameError: "Name can't be a number" });
        return false;
      }
    }
    return true;
  };
  errorMail = () => {
    if (!validator.isEmail(this.state.email)) {
      this.setState({ emailError: "Invalid Email" });
      return false;
    }
    return true;
  };
  whenSubmitHandler = e => {
    e.preventDefault();
    if (this.errorName() && this.errorMail()) {
      this.sendMessage();
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
          id="contact"
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
                CONTACT ME
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "normal"
                  }}
                  className="about-text1"
                >
                  Get in touch with me
                </div>
              </div>
              <br />

              <Row>
                <Col>
                  <div
                    style={{
                      marginLeft: "-30px",
                      overflowX: "auto",
                      paddingTop: "50px"
                    }}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <th>Address:</th>
                          <td>Landhi, Karachi, Sindh, Pakistan</td>
                        </tr>
                        <tr>
                          <th>Email:</th>
                          <td>tariqmagsi125@gmail.com</td>
                        </tr>
                        <tr>
                          <th>Phone:</th>
                          <td>+92-3003750521</td>
                        </tr>
                        <tr>
                          <th>Website:</th>
                          <td>tariqmagsi.herokuapp.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col>
                  <form
                    style={{ paddingTop: "82.5px" }}
                    onSubmit={this.whenSubmitHandler}
                  >
                    <div>
                      <strong>Name:</strong>
                      <br />
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.whenChangeHandler}
                        style={{
                          width: "400px",
                          height: "40px",
                          borderTop: "none",
                          borderLeft: "none",
                          borderRight: "none",
                          borderBottom: "1px solid black",
                          paddingLeft: "5px"
                        }}
                        required
                      />
                      <br />
                      <strong style={{ color: "red" }}>
                        {this.state.nameError}
                      </strong>
                    </div>
                    <br />
                    <br />
                    <div>
                      <strong>Email:</strong>
                      <br />
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.whenChangeHandler}
                        style={{
                          width: "400px",
                          height: "40px",
                          borderTop: "none",
                          borderLeft: "none",
                          borderRight: "none",
                          borderBottom: "1px solid black",
                          paddingLeft: "5px"
                        }}
                        required
                      />
                      <br />
                      <strong style={{ color: "red" }}>
                        {this.state.emailError}
                      </strong>
                    </div>
                    <br />
                    <br />
                    <strong>Message:</strong>
                    <br />
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      name="message"
                      value={this.state.message}
                      onChange={this.whenChangeHandler}
                      style={{
                        width: "400px",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderBottom: "1px solid black",
                        paddingLeft: "5px",
                        paddingTop: "10px"
                      }}
                      required
                    />
                    <br />
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {this.state.messageSent}
                    </span>
                    <br />
                    <br />

                    <div className="about-btn">
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
                    </div>
                  </form>
                </Col>
              </Row>
            </Container>
          </StyleRoot>
          <br />
          <br />
        </div>
      );
    else return <div id="contact" style={{ height: "100vh" }}></div>;
  }
}
