import React from "react";
import "./Footer.css";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaTiktok
  
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
          <a href="#" target="_blank" rel="Whatsapp" className="footer-link">
            <FaWhatsapp />
            <span>Whatsapp</span>
          </a>
          <a href="#" target="_blank" rel="Tiktok" className="footer-link">
            <FaTiktok />
            <span>Tiktok</span>
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
