import React, { Component } from "react";
import { Container } from "bootstrap-4-react";
import { withRouter } from "react-router-dom";
import "tachyons";
import {
  getFromStorage,
  removeFromStorage,
  setInStorage
} from "../../utils/storage";

class Login extends Component {
  state = { question: "", answer: "", error: "" };

  whenChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: "", token: "" });
  };

  verify = () => {
    fetch("/security/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: this.state.question,
        answer: this.state.answer
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage(process.env.REACT_APP_KEY, { token: json.token });
          this.setState({
            token: json.token,
            question: "",
            answer: "",
            error: ""
          });
          this.props.history.push("/Message");
        } else {
          this.setState({ error: "Question or Answer Incorrect" });
        }
      });
  };
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
  whenSubmitHandler = e => {
    e.preventDefault();

    this.verify();
  };
  componentDidMount() {
    const obj = getFromStorage(process.env.REACT_APP_KEY);
    if (obj && obj.token) {
      this.logout(obj.token);
    }
  }
  render() {
    return (
      <Container style={{ overflow: "auto", minWidth: "540px" }}>
        <div
          className="login ma4 pa4 shadow-4"
          style={{
            backgroundColor: "skyBlue",
            overflow: "auto"
          }}
        >
          <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Login</h1>
          <form onSubmit={this.whenSubmitHandler}>
            <div>
              What is your security question?
              <br />
              <br />
              <input
                type="password"
                placeholder="Question"
                className="form form-control"
                name="question"
                value={this.state.question}
                onChange={this.whenChangeHandler}
                style={{
                  width: "400px",
                  height: "40px",
                  borderRadius: "20px",
                  paddingLeft: "10px"
                }}
                required
              />
              <br />
              <strong style={{ color: "red" }}>{this.state.nameError}</strong>
            </div>
            <br />
            <br />
            <div>
              What is your security answer?
              <br />
              <br />
              <input
                type="password"
                placeholder="Answer"
                className="form form-control"
                name="answer"
                value={this.state.answer}
                onChange={this.whenChangeHandler}
                style={{
                  width: "400px",
                  height: "40px",
                  paddingLeft: "10px",
                  borderRadius: "20px"
                }}
                required
              />
              <br />
              <strong style={{ color: "red" }}>{this.state.emailError}</strong>
            </div>
            <br />
            <br />
            <span style={{ color: "red" }}>{this.state.error}</span>
            <div>
              <button
                style={{
                  height: "50px",
                  width: "400px",
                  backgroundColor: "orange",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "14px",
                  border: "none",
                  borderRadius: "10px",
                  color: "white"
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}
export default withRouter(Login);
