import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logoMain from "../assets/imgs/logo-main.jpg";
import instagram from "../assets/imgs/instagram.png";
import linkedin from "../assets/imgs/linkedin.png";
import whatsapp from "../assets/imgs/whatsapp.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col className="footer-logo" sm={6}>
            <a href="#home">
              <img className="logoMain" src={logoMain} alt="Logo" />
            </a>
          </Col>
          <Col sm={6} className="text-center text-sm-end footer-icons">
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
            <p>Copyright © 2026. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
