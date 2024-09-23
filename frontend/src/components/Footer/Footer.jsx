import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import "./Footer.scss";
import logo from "../../assets/D-2.svg";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="gy-4">
          <Col xs={12} md={4}>
            <h5 className="footer-title">Socials</h5>
            <ul className="footer-list">
              <li>
                <a
                  href="https://github.com/davest9496"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="footer-icon" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dave-ejezie-896798b9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="footer-icon" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/DuEjezie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="footer-icon" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.credly.com/users/dave-ejezie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCredly className="footer-icon" /> Credly
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <div className="footer-logo-container">
              <img src={logo} alt="Logo image" className="footer-logo" />
              <p className="footer-logo-text">
                Developed by Dave Ejezie <br />
                Design Inspired by{" "}
                <a
                  href="https://www.frontendmentor.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend Mentor
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 Portfolio Website Version 2.0.0</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
