import { motion } from "framer-motion";
import { useState } from "react";
import type { AreasContent } from "./Areas";
import "./AreasFlipper.css";

interface AreasFlipperProps {
  areas: AreasContent[];
}

const AreasFlipper = ({ areas }: AreasFlipperProps) => {
  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlipped((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="skills-section">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="skills-title"
      >
        Mis Especialidades
      </motion.h2>

      <div className="skills-grid">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="skill-card"
          >
            <motion.div
              className="skill-card-inner"
              onClick={() => toggleFlip(index)}
              animate={{ rotateY: flipped.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRENTE DE LA TARJETA */}
              <div className="skill-card-front">
                <div className="skill-icon">{area.icon}</div>
                <h3 className="skill-title">{area.title}</h3>
                <p className="skill-hint">Click para más info</p>
              </div>

              {/* PARTE TRASERA DE LA TARJETA */}
              <div className="skill-card-back">
                <p className="skill-description">{area.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AreasFlipper;