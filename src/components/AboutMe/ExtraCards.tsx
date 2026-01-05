import { motion } from "framer-motion";
import "./SobreMi.css";

const ExtraCards = () => {
  return (
    <div className="info-cards">
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        className="info-card"
      >
        <h3 className="info-card-title">📚 Formación en el Area</h3>
        <p className="info-card-text">
          Licenciado en Psicología - Universidad Nacional
          <br />
           <br />
          Maestría en Psicología Clínica
          <br />
           <br />
          Certificaciones en TCC y Mindfulness
          <br />
           <br />
          Certificaciones gestion
          <br />
           <br />
          Certificaciones en Psicoterapia
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, rotate: -1 }}
        whileTap={{ scale: 0.95 }}
        className="info-card"
      >
        <h3 className="info-card-title">📖 Como puedo Agendar Una Cita</h3>
        <p className="info-card-text">
          1. Puedes escribir un correo con el formulario de la web o mensajería directa al siguiente link (solo WhatsApp):   
          <a href="https://wa.me/584241821096?text=Hola%2C%20quisiera%20agendar%20una%20cita.">
               Agenda tu cita aquí.
          </a>
          <br />
          2. Se te proporcionará toda la información relacionada con horarios,
          tarifas y políticas para la realización de las sesiones.
          <br />
          3. Una vez agendada tu cita, es importante que seas puntual y asistas
          el día y hora pautada.
          <br />
          <br />
          <strong>Importante tener en cuenta</strong>
          <br />
          - Solo se atiende con cita previa.
          <br />
          - El horario de atención es de lunes a viernes de 8 a.m. a 6 p.m. Hora
          Venezuela (GMT-4)
          <br />
          - En caso de necesitar posponer tu cita, deberás hacerlo con 24 horas
          de anticipación.
          <br />- Ante cualquier duda o inquietud sobre el proceso, consulta
          directamente conmigo a través del mismo medio.
        </p>
      </motion.div>
    </div>
  );
};

export default ExtraCards;
