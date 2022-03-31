import React from "react";
import { Row, Col } from "react-bootstrap";
import SectionHeading from "../../Shared/SectionHeading";
import Team1 from "../../assets/images/team1.png";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team3.png";
import "./style.scss";

const Team = () => {
  return (
    <div className="section-layout team-container">
      <SectionHeading text="Team" />

      <Row className="justify-content-center">
        <Col md={3}>
          <div className="team-container__card">
            <img src={Team1} alt="not found" />
            <h3>CEO</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quam dui, mauris praesent pellentesque
            </p>
          </div>
        </Col>
        <Col md={3}>
          <div className="team-container__card">
            <img src={Team2} alt="not found" />
            <h3>CEO</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quam dui, mauris praesent pellentesque
            </p>
          </div>
        </Col>
        <Col md={3}>
          <div className="team-container__card">
            <img src={Team3} alt="not found" />
            <h3>CEO</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quam dui, mauris praesent pellentesque
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
