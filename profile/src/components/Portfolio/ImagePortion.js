import React, { Component } from "react";
import { Row, Col } from "bootstrap-4-react";
import CountUp from "react-countup";

export default class ImagePortion extends Component {
  state = {
    array: [
      {
        count: 1,
        name: "Projects Completed"
      },
      {
        count: 2000,
        name: "Lines Of Code"
      },
      {
        count: 1,
        name: "Happy Clients"
      },
      {
        count: 0,
        name: "My Awards"
      }
    ]
  };
  render() {
    return (
      <div>
        <div
          className="portfolio-image"
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "white",
            padding: "80px"
          }}
        >
          "
          <em>
            I think the biggest change, and the one we’re already starting to
            see take shape, is that globally the majority of internet usage will
            be done via a mobile device and for most people the mobile web will
            be their primary - if not their only - way of experiencing the
            internet.
          </em>
          " <br />
          <br />- Peter Rojas, Co-founder of Engadget and Gizmodo
        </div>
        <div
          style={{
            backgroundColor: "#f6f7fd",
            marginTop: "80px",
            marginBottom: "80px"
          }}
        >
          <Row>
            {this.state.array.map(item => (
              <Col
                key={item.name}
                style={{
                  borderRight:
                    item.name === "My Awards" ? "" : "1px solid gray",
                  marginTop: "80px",
                  marginBottom: "80px",
                  textAlign: "center",
                  overflowX: "auto"
                }}
              >
                {this.props.flag ? (
                  <h1 style={{ fontWeight: "bold" }}>
                    <CountUp start={0} duration={5} end={item.count} />
                  </h1>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                <p style={{ color: "gray", fontWeight: "bold" }}>{item.name}</p>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}
