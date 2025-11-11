import type { IconType } from "react-icons";

import "./ContactCard.css";

interface ContactCardProps {
  plataforma: string;
  Icon: IconType;
  description: string;
  number?: string;
  btnRef?: string;
  btnLabel?: string;
}


const ContactCard = ({
  plataforma,
  Icon,
  description,
  number,
  btnRef,
  btnLabel,
}: ContactCardProps) => {
  return (
      <div className="contact-card">
        <h3>{plataforma}</h3>
        <Icon size={50} />
        <p>{description}</p>
        {number && <span>{number}</span>}
        {btnRef && (
          <a
            className="contact-btn"
            href={btnRef}
            target="_blank"
            rel="noopener noreferrer"
          >
            {btnLabel}
          </a>
        )}
      </div>
  );
};

export default ContactCard;
