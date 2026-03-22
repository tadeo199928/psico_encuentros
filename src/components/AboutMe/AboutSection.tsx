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
            Mi nombre es Giovanna Bennici, soy esposa, madre y psicóloga, me
            gradué hace 17 años en la Universidad Central de Venezuela (UCV), en
            la mención Asesoramiento Psicológico y Orientación, motivada por el
            deseo querer ayudar a las personas a entenderse a sí mismas, buscar
            un sentido dentro de su historia y abrir el abanico de posibilidades
            según sus potencialidades.
          </p>

          <p>
            Como suele ocurrir en muchas historias, sentí que tenía un mar de
            conocimientos pero con un centímetro de profundidad, razón por la
            cual decidí no quedarme con mi formación inicial de corte humanista,
            sino que exploré diferentes enfoques que me complementaran hasta
            poder definir mi propio camino, es así como comencé trabajando en
            diversos planteles educativos con niños y adolescentes acompañando
            procesos de elección vocacional y dificultades educativas, hasta
            luego emerger en lo que me dedico actualmente desde hace
            aproximadamente 11 años que es el área clínica.
          </p>

          {/* Párrafo 3 */}
          <p>
            En ese mismo sentido trabajé en paralelo en colegios y en un
            ambulatorio, llevando a cabo mi consulta privada, cabe destacar que
            esto último desde que me gradué y bajo supervisión de mis casos
            pertinentes, todo esto con una profunda motivación de continuar mis
            formaciones mediante diversos diplomados, certificaciones,
            componente docente y un máster en terapias de tercera generación, el
            cual me permite realizar un abordaje con enfoque
            contextual-humanista, que integra la validación emocional y la
            aceptación con herramientas basadas en evidencia. Mi metodología
            combina la base humanista de la relación terapéutica con protocolos
            de tercera generación garantizando un tratamiento personalizado,
            funcional y con rigor clínico.
          </p>
          <p>
            Actualmente me dedico a trabajar con adultos y adolescentes, en
            temas principalmente de duelos, ansiedad y depresión, así como
            dificultades para establecer límites y crecimiento personal.
            Recuerda, no se trata de cambiar la historia, sino nuestra relación
            con lo que nos pasó y nos sigue ocurriendo, mirar hacia adentro y
            continuar hacia un camino enmarcado en propósitos inherentes a lo
            que necesitas y puedes alcanzar.
          </p>
          <p>
            {" "}
            <strong>Licda Giovanna Bennici - FPV 6582</strong>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSection;
