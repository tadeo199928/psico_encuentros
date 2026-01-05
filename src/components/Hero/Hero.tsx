import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>Mi nombre es Giovanna</h1>
          <p>
            Soy una Psicologa que te puede ayudar a entender mejor tus problemas,
            trabajo con todo.
          </p>
        </div>
        <div className="hero-right">
          <img
            src="Gio1.jpeg"
            alt="Giovanna Bennici"
          />
        </div>
      </div>
      <div className="hero-bottom">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Explora mis proyectos y aprende más sobre mí.</p>
      </div>
    </div>
  );
};

export default Hero;
