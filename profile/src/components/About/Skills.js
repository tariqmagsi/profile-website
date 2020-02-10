import React, { Component } from "react";
import { Container, Row, Col } from "bootstrap-4-react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default class Skills extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#f6f7fd",
          paddingTop: "80px",
          paddingBottom: "80px"
        }}
      >
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  fontSize: "30px",
                  paddingBottom: "30px"
                }}
              >
                Some About my Abilities
              </div>
              <p>
                I make websites and web applications using HTML, CSS,
                Javascript, React.js, Redux.js for front-end and Node.js,
                Express.js for back-end and MongoDB for database. I am also a
                mobile application developor using React-Native.js for front-end
                and Node.js, Express.js for back-end and MongoDB for database.
              </p>
            </Col>
            <Col className="skills-col" style={{ marginRight: "50px" }}>
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>HTML</div>
              <div>
                <Progress percent={95} />
              </div>
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>CSS</div>
              <Progress percent={92} />
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                Javascript
              </div>
              <Progress percent={90} />
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                React.js
              </div>
              <Progress percent={85} />
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                Redux.js
              </div>
              <Progress percent={40} />
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                React-Native.js
              </div>
              <Progress percent={75} />
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                Node.js
              </div>
              <Progress percent={65} />
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                Express.js
              </div>
              <Progress percent={80} />
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                MongoDB
              </div>
              <Progress percent={80} />
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>MySQL</div>
              <Progress percent={80} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
