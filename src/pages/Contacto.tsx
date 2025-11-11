import ContactCard from "../components/ContactCard/ContactCard";
import ContactForm from "../components/Email/ContactEmail";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Contacto = () => (
  <div className="background">
    <div className="contact-cards">
      <ContactCard
        plataforma="Whatsapp"
        Icon={FaWhatsapp}
        description="Mi número de WhatsApp es:"
        number="123-5569889"
      />
      <ContactCard
        plataforma="Facebook"
        Icon={FaFacebook}
        description="Contactame en mi facebook"
        btnRef="#facebook"
        btnLabel="Facebook"
      />
      <ContactCard
        plataforma="Instagram"
        Icon={FaInstagram}
        description="No te pierdas mis ultimos post en instagram"
        btnRef="#instagram"
        btnLabel="Instagram"
      />
      <ContactCard
        plataforma="Tiktok"
        Icon={FaTiktok}
        description="No te pierdas mis ultimos post en Tiktok"
        btnRef="#tiktok"
        btnLabel="Tiktok"
      />
    </div>
    <ContactForm />
  </div>
);

export default Contacto;
