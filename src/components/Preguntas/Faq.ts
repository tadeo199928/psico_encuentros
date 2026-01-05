export interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
  btn_label?: string;
  btn_href?: string;
  btn_label2?: string;
  btn_href2?: string;
}

export const FAQ: FAQItem[] = [
    {
    question: "¿Tienes espacio físico?",
    answer:
      "Sí, cuento con un espacio físico donde realizo las sesiones Ubicado en Caracas. Puedes agendar una consulta para visitarlo.",
    open: false,
  },
  {
    question: "¿Que se hace en una primera consulta psicológica?",
    answer:
      "En la primera consulta psicológica se realiza una evaluación inicial para entender tus necesidades, establecer objetivos y planificar el tratamiento adecuado.",
    open: false,
  },
  {
    question: "¿En qué consiste un proceso de psicoterapia y que puedes esperar al  llevarlo a cabo conmigo?",
    answer:
      "Sí, la psicoterapia es un proceso colaborativo donde trabajamos juntos para explorar tus pensamientos, emociones y comportamientos. Puedes esperar un espacio seguro y de apoyo para abordar tus desafíos y promover el crecimiento personal.",
    open: false,
  },
  {
    question: "¿Existen normas dentro de la consulta?",
    answer:
      "Sí, existen normas como la confidencialidad, el respeto mutuo y la puntualidad para asegurar un ambiente terapéutico efectivo.",
    open: false,
  },
    {
    question: "¿Cual es la diferencia entre una consulta online o presencial?",
    answer:
      "La consulta online ofrece comodidad y accesibilidad desde cualquier lugar, mientras que la consulta presencial permite una interacción cara a cara en un espacio físico. Ambas modalidades son efectivas y se adaptan a tus necesidades.",
    open: false,
  },
      {
    question: "¿Cómo llevar a cabo la consulta online?",
    answer:
      "Para la consulta online, necesitaremos una conexión estable a internet y un dispositivo con cámara y micrófono. Utilizaremos plataformas seguras para garantizar la privacidad durante nuestras sesiones.",
    open: false,
  },
  {
    question: "¿Como puedo contactarte?",
    answer:
      "Puedes contactarme a través del formulario de contacto o enviarme un mensaje directo.",
    open: false,
    btn_label: "Contactame Via Email",
    btn_href: "/Contacto",
    btn_label2: "Contactame Via Whatsapp",
    btn_href2: "https://wa.me/584241821096?text=Hola%2C%20quisiera%20agendar%20una%20cita.",
  },
];
