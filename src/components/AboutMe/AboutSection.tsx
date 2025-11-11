import { motion } from "framer-motion";
import "./SobreMi.css";

const AboutSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
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
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="about-section"
      >
        <h2 className="about-section-title">Mi Enfoque</h2>
        <p className="about-section-text">
          Creo en un abordaje holístico e integrador, combinando diferentes
          técnicas terapéuticas adaptadas a las necesidades únicas de cada
          paciente. Mi objetivo es crear un espacio seguro donde puedas
          explorar, sanar y crecer.
        </p>
      </motion.div>
    </>
  );
};

export default AboutSection;
