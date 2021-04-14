import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bighex from "../Images/bighex.jpg";

export default class BigHex extends Component {
  render() {
    return (
      <div>
        <Container fluid className="big-hex-wrapper pt-4 pb-4">
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={6} md={12} className="text-center last-hex-section">
              <img className="big-hexagon" src={bighex}></img>
            </Col>

            <Col lg={6} md={12} className="last-hex-section">
              <h2 className="hex-title">Who am I?</h2>
              <p className="description">
                I am a front-end developer with a passion for developing,
                creating, and designing websites and applications. I am based in
                Chicago, which is where I received my undergraduate degree from
                DePaul University.
              </p>
              <h4 className="bullet-heading">Skills:</h4>

              <Row>
                <Col>
                  <ul style={{ listStyle: "none" }} className="bullets">
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                  </ul>
                </Col>
                <Col>
                  <ul style={{ listStyle: "none" }} className="bullets">
                    <li>Boostrap</li>
                    <li>SQL/MySQL</li>
                    <li>Git/GitHub</li>
                    <li>Scss/Sass</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
