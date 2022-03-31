import React from "react";
import SectionHeading from "../../Shared/SectionHeading";
import PolygonIcon from "../../assets/images/polygon.svg";
import "./style.scss";

const RoadMap = () => {
  return (
    <div className="section-layout road-map">
      <SectionHeading text="Road Map" />
      <div className="road-map__container">
        <div className="road-map__phase">
          <div className="road-map__phase-text">
            <h3>Phase 1</h3>
          </div>
          <div className="road-map__phase-icon">
            <img src={PolygonIcon} alt="not found" />
          </div>
        </div>
        <div className="road-map__phase">
          <div className="road-map__phase-text">
            <h3>Phase 2</h3>
          </div>
          <div className="road-map__phase-icon">
            <img src={PolygonIcon} alt="not found" />
          </div>
        </div>
        <div className="road-map__phase">
          <div className="road-map__phase-text">
            <h3>Phase 3</h3>
          </div>
          <div className="road-map__phase-icon">
            <img src={PolygonIcon} alt="not found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
