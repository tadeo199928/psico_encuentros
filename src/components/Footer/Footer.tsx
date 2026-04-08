import "./Footer.css";
import {
  FaInstagramSquare,
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

import { MdCelebration } from "react-icons/md";

const Footer = () => {
  async function handleEmailClick() {
    const email = "psicoencuentrosgb@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
    } catch (error) {
      console.error("Error al copiar el correo electrónico: ", error);
    }
  }
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Giovanna Bennici | Psico_Encuentros
        </p>
        <div className="footer-links">
          <a
            href="https://www.instagram.com/psico_encuentros/"
            target="_blank"
            rel="Instagram"
            className="footer-link"
          >
            <FaInstagramSquare />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/psico_encuentros/"
            target="_blank"
            rel="Facebook"
            className="footer-link"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a
            href="https://wa.me/584241821096?text=Hola%2C%20quisiera%20agendar%20una%20cita."
            target="_blank"
            rel="Whatsapp"
            className="footer-link"
          >
            <FaWhatsapp />
            <span>Whatsapp</span>
          </a>
          <a
            href="https://www.tiktok.com/@psico_encuentros?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="Tiktok"
            className="footer-link"
          >
            <FaTiktok />
            <span>Tiktok</span>
          </a>
          <a className="footer-link">
            <MdCelebration />
            <span>Sigueme en las redes</span>
          </a>
          <div className="copy-email-wrapper">
            <button
              type="button"
              onClick={handleEmailClick}
              className="footer-link footer-link-button"
              title="Click para copiar el email"
              aria-label="Copiar correo electronico"
            >
              <FaEnvelope /> <span>Email</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
