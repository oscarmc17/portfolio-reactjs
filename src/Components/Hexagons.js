import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hex1 from "../Images/hex1.jpeg";
import hex2 from "../Images/hex2.jpg";
import hex3 from "../Images/hex3.JPG";

export default function Hexagons() {
  return (
    <div>
      {/* 3 Hexagons */}
      <div className="p-4 divisor-wrapper d-flex justify-content-center align-items-center">
        <hr className="divisor"></hr>
      </div>
      <Container fluid className="text-center hexagon-wrapper">
        <Row className="pt-2">
          <Col lg={4} md={12} className="col-hex">
            <img className="hexagon-img" src={hex1}></img>
            <h3 className="m-2 hex-title">Responsive</h3>
            <p className="hex-text">
              I create layouts that will work on any device, from 4k screens
              down to any size phone.
            </p>
          </Col>

          <Col lg={4} md={12} className="col-hex">
            <img className="hexagon-img" src={hex2}></img>
            <h3 className="m-2 hex-title">User Focused</h3>
            <p className="hex-text">
              User focused design is my primary goal when building any website
              because I want the user to have a meticulous experience.
            </p>
          </Col>

          <Col lg={4} md={12} className="col-hex">
            <img className="hexagon-img" src={hex3}></img>
            <h3 className="m-2 hex-title">HTML / CSS</h3>
            <p className="hex-text">
              Creating a strong foundation for a website means getting the HTML
              and CSS architecture right. If you've got a design, I can create
              the front-end code for it.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
