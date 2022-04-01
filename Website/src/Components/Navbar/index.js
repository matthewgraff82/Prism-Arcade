import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Button from "../../Shared/Button";
import Logo from "../../assets/images/logo.png";
import "./style.scss";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-container">
      <Navbar.Brand href="#">
        <img src={Logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav style={{ marginLeft: "auto" }}>
          <Nav.Link href="#action1">About Prism</Nav.Link>
          <Nav.Link href="#action2">NFTs</Nav.Link>
          <Nav.Link href="#action2">Roadmap</Nav.Link>
          <Nav.Link href="#action2">Team</Nav.Link>
          <Nav.Link href="#action2">F.A.Q</Nav.Link>
          <Button btnLable="Arcade city" btnType="primary" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
