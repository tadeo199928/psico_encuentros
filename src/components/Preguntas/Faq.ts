export interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
  btn_label?: string;
  btn_href?: string;
}

export const FAQ: FAQItem[] = [
  {
    question: "¿Cómo puedo saber si voy a conectar contigo?",
    answer:
      "Los precios varían según el tipo de terapia y la duración de las sesiones. Ofrezco diferentes opciones para adaptarme a tu presupuesto.",
    open: false,
  },
  {
    question: "¿Trabajas con seguros?",
    answer:
      "Algunos seguros cubren la terapia online. Te recomiendo verificar con tu proveedor de seguros sobre la cobertura específica.",
    open: false,
  },
  {
    question: "¿Es efectiva la terapia online?",
    answer:
      "Sí, múltiples estudios han demostrado que la terapia online es tan efectiva como la terapia presencial para muchas condiciones de salud mental.",
    open: false,
  },
  {
    question: "¿Cómo me conecto con un terapeuta?",
    answer:
      "Puedes contactarme a través del formulario de contacto o agendar una consulta inicial gratuita para conocernos y discutir tus necesidades.",
    open: false,
  },
  {
    question: "¿Tienes espacio físico?",
    answer:
      "Sí, cuento con un espacio físico donde realizo las sesiones. Puedes agendar una consulta para visitarlo.",
    open: false,
  },
  {
    question: "¿Como puedo contactarte?",
    answer:
      "Puedes contactarme a través del formulario de contacto o enviarme un mensaje directo.",
    open: false,
    btn_label: "Contactame",
    btn_href: "/Contacto",
  },
];
