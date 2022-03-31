import React from "react";
import SectionHeading from "../../Shared/SectionHeading";
import PrismArcadeIcon from "../../assets/images/prism-arcade-icon.png";
import "./style.scss";

const About = () => {
  return (
    <section className="section-layout about-section">
      <SectionHeading text="About" />
      <p>
        What is <span className="about-section__bold">Prism Arcade?</span>{" "}
        <br />
        Prism Arcade is a next generation, decentralized, community driven, play
        to earn gaming platform where the love of gaming, collecting and
        leveling up are brought together. <br />
        <br />
        Within the Prism Arcade you will acquire{" "}
        <span className="about-section__bold"> NFT avatars,</span> play from
        various game collections, acquire in game collectibles, upgrade your
        avatar, items, and equipment so you can enter PVP arenas to compete and
        show your skill.
        <br /> <br />
        Full evolution of the project will be reached when private arcade spaces
        are built, designed and hosted by you so that anyone can join your
        personal space allowing you both to{" "}
        <span className="about-section__bold">earn</span> together.
      </p>
      <div className="d-flex justify-content-center">
        <img src={PrismArcadeIcon} alt="not found" />
      </div>
    </section>
  );
};

export default About;
