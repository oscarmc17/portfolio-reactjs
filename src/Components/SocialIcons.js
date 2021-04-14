import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div>
      <Container fluid className="social-wrapper p-2">
        <Row>
          <Col>
            <ul>
              <li className="social-list one">
                <a
                  className="social"
                  href="https://www.instagram.com/oscar.devs/"
                  target="_blank"
                >
                  <FaInstagram className="fa"/>
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <ul>
              <li className="social-list two">
                <a
                  className="social"
                  href="https://www.linkedin.com/in/oscarmc17/"
                  target="_blank"
                >
                  <FaLinkedin className="fa"/>
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <ul>
              <li className="social-list three">
                <a
                  className="social"
                  href="https://github.com/oscarmc17"
                  target="_blank"
                >
                  <FaGithub className="fa"/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
