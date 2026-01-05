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
        <h2 className="about-section-title"> Un Poco Sobre Mi</h2>
        <div className="about-section-text">
          <p>
            Mi nombre es Giovanna Bennici, soy esposa, madre y psicólogo, me
            gradué hace 17 años en la Universidad Central de Venezuela (UCV), en
            la mención Asesoramiento Psicológico y Orientación, motivada por el
            deseo querer ayudar a las personas a entenderse a si mismas, buscar
            un sentido dentro de su historia y abrir el abanico de posibilidades
            según potencialidades.
          </p>

          <p>
            Como suele ocurrir en muchas historias, sentí que tenía un mar de
            conocimientos pero con un centímetro de profundidad, razón por la
            cual decidí no quedarme con mi formación inicial de corte humanista,
            sino que explore diferentes enfoques que me complementaran hasta
            poder definir mi propio camino, es así como comencé trabajando en
            diversos planteles educativos con niños y adolescentes acompañando
            procesos de elección vocacional y dificultades educativas, hasta
            luego emerger en lo me dedico actualmente desde hace aproximadamente
            11 años que es el área clínica.
          </p>

          <p>
            En ese mismo sentido trabaje en paralelo en colegios y en un
            ambulatorio, llevando a cabo mi consulta privada, cabe destacar que
            esto último desde que me gradué y bajo supervisión de mi casos
            pertinentes, todo esto con un profunda motivación de continuar mis
            formaciones mediante diversos diplomados, certificaciones,
            componente docente y actualmente el{" "}
            <strong>Máster en Terapias de Tercera Generación</strong> que me
            encuentro próxima a culminar. Para mí el ser humano no se puede
            fragmentar, tenemos una historia que puede incidir en como actuamos
            mas no tiene que ser un determinante...
          </p>

          <p>
            Actualmente me dedico a trabajar con adultos y adolescentes, en
            temas principalmente de duelos, ansiedad y depresión, así como
            dificultades para establecer límites y crecimiento personal...
          </p>
          <p> <strong>Licda Giovanna Bennici - FPV 6582</strong></p>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSection;
