import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logoMain from "../assets/imgs/logo-main.jpg";
import instagram from "../assets/imgs/instagram.png";
import linkedin from "../assets/imgs/linkedin.png";
import whatsapp from "../assets/imgs/whatsapp.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href="#home">
              <img className="logoMain" src={logoMain} alt="Logo" />
            </Navbar.Brand>
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.instagram.com/carlosdastorres">
                <img src={instagram} alt="Social Icon" />
              </a>
              <a href="https://www.linkedin.com/in/carlos-torres-1b1597170/">
                <img src={linkedin} alt="Social Icon" />
              </a>
              <a href="https://wa.me/351916596570">
                <img src={whatsapp} alt="Social Icon" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                onUpdateActiveLink("contact");
                window.location.hash = "contact";
              }}
            >
              <span>Lets Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
