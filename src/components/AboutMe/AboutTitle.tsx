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
            Giovanna Bennici
          </h1>
          <img src="Gio2.png" alt="Sobre Mí"/>
        </motion.div>
  )
};

export default AboutHeader;
