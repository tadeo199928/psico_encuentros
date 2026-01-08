import ContactCard from "../components/ContactCard/ContactCard";
import ContactForm from "../components/Email/ContactEmail";
import ExtraInfoCard from "../components/ContactCard/ExtraInfoCard";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Contacto = () => (
  <div className="background">

    <ExtraInfoCard />
    <div className="contact-cards">
      <ContactCard
        plataforma="Whatsapp"
        Icon={FaWhatsapp}
        description="Mi número de WhatsApp es:"
        btnRef="https://wa.me/584241821096?text=Hola%2C%20quisiera%20agendar%20una%20cita."
        btnLabel="WhatsApp"
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
