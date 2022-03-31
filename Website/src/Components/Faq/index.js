import React from "react";
import SectionHeading from "../../Shared/SectionHeading";
import PolygonIcon from "../../assets/images/polygon.svg";
import "./style.scss";
import Button from "../../Shared/Button";

const FAQ = () => {
  return (
    <div className="section-layout faq-container">
      <SectionHeading text="F.a.q" />
      <div className="faq-container__phase">
        <div className="faq-container__phase-text">
          <h3>Question 1</h3>
        </div>
        <div className="faq-container__phase-icon">
          <img src={PolygonIcon} alt="not found" />
        </div>
      </div>
      <div className="faq-container__phase">
        <div className="faq-container__phase-text">
          <h3>Question 2</h3>
        </div>
        <div className="faq-container__phase-icon">
          <img src={PolygonIcon} alt="not found" />
        </div>
      </div>
      <div className="faq-container__phase">
        <div className="faq-container__phase-text">
          <h3>Question 3</h3>
        </div>
        <div className="faq-container__phase-icon">
          <img src={PolygonIcon} alt="not found" />
        </div>
      </div>
      <div className="faq-container__phase">
        <div className="faq-container__phase-text">
          <h3>Question 4</h3>
        </div>
        <div className="faq-container__phase-icon">
          <img src={PolygonIcon} alt="not found" />
        </div>
      </div>
      <div className="faq-container__phase">
        <div className="faq-container__phase-text">
          <h3>Question 5</h3>
        </div>
        <div className="faq-container__phase-icon">
          <img src={PolygonIcon} alt="not found" />
        </div>
      </div>
      <div className="faq-container__phase">
        <div className="faq-container__phase-text">
          <h3>Question 6</h3>
        </div>
        <div className="faq-container__phase-icon">
          <img src={PolygonIcon} alt="not found" />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button btnLable="Play Now" btnType="primary" />
      </div>
    </div>
  );
};

export default FAQ;
