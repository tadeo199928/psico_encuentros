import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactEmail.css";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString("es-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = currentDate.toLocaleTimeString("es-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "long",
      });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: `${formattedDate} at ${formattedTime}`,
      };

      await emailjs.send(
        "service_52w4lwc",
        "template_tjzvixb",
        templateParams,
        "r8Vxm-e9PZM_iZRB5"
      );

      setStatus("✅ Mensaje enviado correctamente!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus(
        "❌ Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente por mensaje privado."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <h3>Contáctame por Email</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu Nombre Completo"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Tu Correo Electronico"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="¡Escribeme un mensaje contandome de ti!"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar Mensaje"}
        </button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;