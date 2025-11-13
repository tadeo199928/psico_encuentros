import { motion } from "framer-motion";
import "./SobreMi.css";

const AboutSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="about-section"
      >
        <h2 className="about-section-title">Mi Historia</h2>
        <p className="about-section-text">
          Desde joven sentí una profunda vocación por entender la mente humana y
          ayudar a las personas. Me gradué en la Universidad Nacional y desde
          entonces he dedicado mi carrera a especializarme en diversas áreas de
          la psicología clínica.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="about-section"
      >
        <h2 className="about-section-title">Mi Metodo de Trabajo</h2>
        <p className="about-section-text">
          Nada mas efectivo que una buena lavada de cerebro, especializada en
          electrocutar tu cerebro para limpiar el brainrod totalmente, y que
          dejes de ver tiktok todo el dia
        </p>
      </motion.div>
    </>
  );
};

export default AboutSection;
