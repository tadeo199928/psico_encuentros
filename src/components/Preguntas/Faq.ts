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
      "Sí. Cuento con dos espacios físicos donde realizo las sesiones, ubicados en San Antonio de los Altos y Los Teques respectivamente, en los Altos Mirandinos.",
    open: false,
  },
  {
    question: "¿Qué se hace en una primera consulta psicológica?",
    answer:
      "El objetivo de la primera consulta psicológica es totalmente exploratorio, donde por medio de la entrevista clínica o anamnesis se recabarán datos no solo de tu motivo de consulta sino de antecedentes previos al mismo. En esta primera consulta se te explicará la forma como se abordará tu caso, secuencia de las sesiones, se establecerá el plan terapéutico y se te informará sobre las normas de consulta.",
    open: false,
  },
  {
    question: "¿Existen normas dentro de la consulta?",
    answer:
      "Sí, para garantizar que el proceso sea efectivo es importante cumplir con tu compromiso terapéutico donde es importante la constancia a tus sesiones ya previamente establecidas y acordadas, asistir dentro de la hora y en caso de no poder acudir a tu consulta avisar con un mínimo de 24 horas de antelación para la cancelación de la misma y así evitar consecuencias negativas.",
    open: false,
  },
  {
    question: "¿Cómo sé si realmente necesito ir a terapia?",
    answer:
      "No es necesario estar en crisis para ir al psicólogo. Afortunadamente hemos avanzado en conocimiento en salud mental y no todas las personas que incluso van a terapia tienen que tener algún trastorno mental o patología, situaciones en las cuales has intentado resolver circunstancias solo y sin encontrar solución o tu propio camino, merecen la oportunidad de buscar alguna estrategia diferente como por ejemplo, el acompañamiento psicológico de un profesional especializado. Cuando sientes que estás atravesando dificultades para gestionar tus emociones, cambios importantes o si simplemente deseas un espacio de autoconocimiento para mejorar tu bienestar personal puedes asistir a terapia.",
    open: false,
  },
  {
    question: "¿Cuánto dura el proceso y con qué frecuencia nos veremos?",
    answer: "El tiempo total depende de tus objetivos y necesidades específicas. Una vez que se establece el plan terapéutico es importante mantener la continuidad para poder profundizar en los temas y observar los avances de manera sostenida, el trabajo no es solo responsabilidad del terapeuta, es un trabajo en equipo y lo que hagas suma en tus avances.",
    open: false,
  },
    {
    question: "¿Qué es más efectivo, la terapia online o la presencial?",
    answer: "La evidencia científica nos dice que la efectividad no depende del medio, sino de la calidad de nuestra relación terapéutica y de tu compromiso con el proceso. Por un lado la terapia presencial te da la oportunidad de cambiar de entorno, mientras que la terapia online aporta flexibilidad y comodidad. Es importante valorar el contexto y realidad de vida de cada paciente para lograr encontrar el formato que mejor se adapte a ti y así puedas mantener la constancia de tus sesiones sin interrupciones.",
    open: false,
  },
  {
    question: "¿Cómo llevar a cabo la consulta online?",
    answer:
      "Para la consulta online, necesitaremos una conexión estable a internet y un dispositivo con cámara y micrófono. Utilizaremos plataformas seguras para garantizar la privacidad durante nuestras sesiones.",
    open: false,
  },
  {
    question: "¿Cómo puedo contactarte?",
    answer:
      "Puedes contactarme a través del formulario de contacto o enviarme un mensaje directo.",
    open: false,
    btn_label: "Contactame Via Email",
    btn_href: "/Contacto",
    btn_label2: "Contactame Via Whatsapp",
    btn_href2:
      "https://wa.me/584241821096?text=Hola%2C%20quisiera%20agendar%20una%20cita.",
  },
];
