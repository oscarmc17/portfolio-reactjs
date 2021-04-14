import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import coffeeimg from "../Images/coffeeshop.png";
import troysgym from "../Images/troysgym.png";
import restaurant from "../Images/restaurant.png";
import weatherapp from "../Images/WeatherApp.png";

const FirstSection = () => {
  return (
    <div>
      {/* Gray Ghost Coffee Section */}
      <Container
        fluid
        className="container-row d-flex justify-content-center align-items-center"
      >
        <Row className="p-4">
          <Col
            lg={8}
            md={12}
            className="section-row d-flex justify-content-center align-items-center"
          >
            <div>
              <img src={coffeeimg} className="coffeeimage"></img>
            </div>
          </Col>

          <Col
            lg={4}
            md={12}
            className="text-center d-flex justify-content-center align-items-center flex-column"
          >
            <h2 className="project-title project-text">Gray Ghost Coffee</h2>
            <p className="section-text">
              Created a responsive coffee shop website using HTML, CSS,
              JavaScript, SCSS/SASS, and Boostrap.
            </p>
            <a
              className="projects-btn"
              // href="https://oscarmc17.github.io/CoffeeShopWebsite/"
              target="_blank"
            >
              View Website
            </a>
          </Col>
        </Row>
      </Container>

      {/* Troy's Gym Section */}
      <Container
        fluid
        className="container-row d-flex justify-content-center align-items-center"
      >
        <Row className="p-4">
          <Col
            lg={4}
            md={12}
            className="text-center d-flex justify-content-center align-items-center flex-column"
          >
            <h2 className="project-text">Troy's Gym</h2>
            <p className="section-text">
              Created a website for a gym. This site was written from scratch
              using the latest front-end tech stack and it's fully responsive.
            </p>
            <a
              className="projects-btn"
              // href="https://oscarmc17.github.io/CoffeeShopWebsite/"
              target="_blank"
            >
              View Website
            </a>
          </Col>

          <Col
            lg={8}
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <img src={troysgym} className="coffeeimage"></img>
            </div>
          </Col>
        </Row>
      </Container>

      {/* 2 Extra Projects */}
      <Container
        fluid
        className="container-row d-flex justify-content-center align-items-center"
      >
        <Row className="p-2">
          <Col
            lg={6}
            className="project-sec text-center d-flex justify-content-center align-items-center flex-column"
          >
            <h3 className="proj-name">Le Petit Blond</h3>
            <img src={restaurant} className="coffeeimage"></img>
            <a
              className="projects-btn"
              // href="https://oscarmc17.github.io/CoffeeShopWebsite/"
              target="_blank"
            >
              View Website
            </a>
          </Col>

          <Col
            lg={6}
            className="project-sec d-flex justify-content-center align-items-center flex-column"
          >
            <h3 className="proj-name">Weather App</h3>
            <img src={weatherapp} className="coffeeimage"></img>
            <a
              className="projects-btn"
              // href="https://oscarmc17.github.io/CoffeeShopWebsite/"
              target="_blank"
            >
              View Website
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstSection;
