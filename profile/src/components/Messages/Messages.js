import React, { Component } from "react";
import { Container } from "bootstrap-4-react";
import { getFromStorage } from "../../utils/storage";
import { withRouter } from "react-router-dom";

class Messages extends Component {
  state = { messages: [], flag: false };
  fetchData = () => {
    fetch(
      "/fjaogiofeajfioajfeioajfoidajfodsajfidosamfdsajfldksajfkdessagefjdklsajfkldss"
    )
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({ messages: json.messages });
        }
      });
  };
  componentDidMount() {
    const obj = getFromStorage(process.env.REACT_APP_KEY);
    if (!(obj && obj.token)) {
      this.props.history.push("/NotFound");
    } else {
      this.setState({ flag: true });
      this.fetchData();
    }
  }
  render() {
    if (this.state.flag) {
      return (
        <div style={{ overflowX: "auto", backgroundColor: "gray" }}>
          <h1
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            Messages
          </h1>
          <Container>
            {this.state.messages.reverse().map(message => (
              <div
                key={message._id}
                className="pa4 ma4 shadow-4"
                style={{ overflow: "auto", backgroundColor: "silver" }}
              >
                <p style={{ color: "black", fontFamily: "arial" }}>
                  <strong style={{ color: "black", fontFamily: "arial" }}>
                    Date:{" "}
                  </strong>
                  {message.date}
                  <br />
                  <strong style={{ fontFamily: "arial" }}>Name: </strong>
                  <span style={{ fontFamily: "arial" }}>{message.name}</span>
                  <br />
                  <strong style={{ fontFamily: "arial" }}>Email: </strong>
                  <span style={{ fontFamily: "arial" }}>{message.email}</span>
                  <br />
                  <br />
                  <strong style={{ fontFamily: "arial" }}>Message: </strong>
                  <br />
                  <span style={{ fontFamily: "arial" }}>{message.message}</span>
                </p>
              </div>
            ))}
          </Container>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default withRouter(Messages);
