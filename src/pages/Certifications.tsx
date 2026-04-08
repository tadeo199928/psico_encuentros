import { certifications } from "../components/AboutMe/CertificationsData";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section className="cert-page">
      <div className="cert-page-container">
        <header className="cert-page-header">
          <h1>Certificaciones</h1>
          <p>
            Aqui puedes ver todos los certificados de formacion disponibles.
          </p>
        </header>

        <ul className="cert-list">
          {certifications.map((certification) => (
            <li key={certification.title} className="cert-item">
              <h2 className="cert-item-title">{certification.title}</h2>
              {certification.imagePath ? (
                <a
                  href={certification.imagePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-image-link"
                >
                  <img
                    src={certification.imagePath}
                    alt={`Certificado: ${certification.title}`}
                    loading="lazy"
                    className="cert-image"
                  />
                </a>
              ) : (
                <p className="cert-no-image">
                  Este certificado se comparte bajo solicitud directa.
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
