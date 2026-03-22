import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>Mi nombre es Giovanna</h1>

          <p>
            Soy psicóloga. Te ofrezco un espacio donde darle sentido a tu
            historia y buscar mecanismos que no necesariamente te harán feliz,
            pero sí te harán sentir bienestar.
          </p>
        </div>
        <div className="hero-right">
          <img src="gioHero.jpg" alt="Giovanna Bennici" />
        </div>
      </div>
      <div className="hero-bottom">
        <h1>Bienvenid@ a mi sitio web</h1>

        <p>
          Explora sobre mi enfoque terapéutico y cómo abordaremos las sesiones
          de psicoterapia adaptadas a tus circunstancias.
        </p>
      </div>
    </div>
  );
};

export default Hero;
