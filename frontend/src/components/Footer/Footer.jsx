import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="footer-title">Socials</h5>
            <ul className="footer-list">
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  Credly
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chat">
                  Chat
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Contact Us</h5>
            <p>Email: info@aichatapp.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2023 AI Chat App. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
