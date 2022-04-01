import React from "react";
import SectionHeading from "../../Shared/SectionHeading";
import Collection from "../../assets/images/collection.png";
import Button from "../../Shared/Button";
import "./style.scss";

const TheCollection = () => {
  return (
    <div className="section-layout  ">
      <SectionHeading text="the collection" />
      <div className="collection-items">
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
        <div>
          <img src={Collection} alt="not found" />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button btnLable="Show more" btnType="primary" />
      </div>
    </div>
  );
};

export default TheCollection;
