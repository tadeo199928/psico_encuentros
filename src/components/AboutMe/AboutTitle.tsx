import { motion } from "framer-motion";
import "./SobreMi.css";

const AboutHeader = () => {
  return (

     <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h1 className="about-title">
            Sobre Mí
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="about-subtitle"
          >
            Psicólogo clínico con más de 10 años de experiencia ayudando a personas
            a superar sus desafíos emocionales y alcanzar su bienestar mental.
          </motion.p>
        </motion.div>
  )
};

export default AboutHeader;
