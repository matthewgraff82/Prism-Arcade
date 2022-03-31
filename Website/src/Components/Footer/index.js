import React from "react";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as DiscrodIcon } from "../../assets/images/discord-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter-icon.svg";
import { ReactComponent as GameIcon } from "../../assets/images/game-icon.svg";

import "./style.scss";

const Footer = () => {
  return (
    <footer className=" footer-container">
      <Row className="justify-content-center">
        <Col>
          <ul className="fotter-container__list">
            <li>
              <a href="#">About Prism</a>
            </li>
            <li>
              <a href="#">NFTs</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">F.A.Q</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <ul className="footer-container__social-icons">
            <li>
              <DiscrodIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <GameIcon />
            </li>
          </ul>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <span className="footer-container__copy-right">
          © Copyright 2022 - Prism Arcade
        </span>
      </div>
    </footer>
  );
};

export default Footer;
