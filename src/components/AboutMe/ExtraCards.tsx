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
        <h3 className="info-card-title">📚 Formación Académica</h3>
        <p className="info-card-text">
          Licenciado en Psicología - Universidad Nacional
          <br />
          Maestría en Psicología Clínica
          <br />
          Certificaciones en TCC y Mindfulness
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, rotate: -1 }}
        whileTap={{ scale: 0.95 }}
        className="info-card purple"
      >
        <h3 className="info-card-title">🎯 Mi Misión</h3>
        <p className="info-card-text">
          Proporcionar terapia personalizada de alta calidad, creando un espacio
          seguro donde cada persona pueda encontrar su camino hacia el bienestar
          emocional.
        </p>
      </motion.div>
    </div>
  );
};

export default ExtraCards;
