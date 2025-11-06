import React from "react";
import "./Footer.css";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Giovanna Bennici | Psico_Encuentros
        </p>
        <div className="footer-links">
          <a href="#" target="_blank" rel="Instagram" className="footer-link">
            <FaInstagramSquare />
            <span>Instagram</span>
          </a>
          <a href="#" target="_blank" rel="Facebook" className="footer-link">
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a href="#" target="_blank" rel="LinkedIn" className="footer-link">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="footer-link">
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
