import React from "react";
import { Row, Col } from "react-bootstrap";
import PrismCard from "../../assets/images/prism-card.png";
import Button from "../../Shared/Button";
import "./style.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Row className="align-items-center">
        <Col className="hero-section__content" md={6}>
          <h1>the prism arcade</h1>
          <p>
            The next generation, decentralized, community driven, play to earn
            gaming platform{" "}
          </p>
          <div className="hero-section__btn-container">
            <Button btnLable="Play Now" btnType="primary" />
            <Button btnLable="Discover" btnType="secondary" />
          </div>
        </Col>
        <Col md={6}>
          <img src={PrismCard} alt="prism-card" />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
