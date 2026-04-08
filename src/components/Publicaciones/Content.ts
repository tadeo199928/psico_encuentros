export interface Post {
  id: number;
  title: string;
  date: string;
  content: string[];
  img: string;
  link?: string;
}

export const content: Post[] = [
  {
    id: 1,
    title: "La culpa NO es un taller",
    date: "2026-04-08",
    content: [
      "¿Cuántas veces te has descubierto mirando por la ventana, arreglando el armario, o incluso en casa intentando descansar en un pequeño espacio de tiempo y aun así, en tu mente lo único que retumba es la idea de que todo lo que haces no es suficiente? ¿Cuántas veces piensas que si lo hubieses hecho distinto, pudiese haber sido mejor? O incluso, ¿cuántas veces lo único que se repite en tu cabeza es que todo esto que sucede tiene que ver con que hay algo malo en ti?",
      "Preguntas como las mencionadas engloban generalmente una sensación de culpa, la cual se puede sentir como una mochila donde se van depositando recuerdos que pueden resultar muy pesados, desagradables o incluso filosos, en los cuales poco a poco sentimos que ya no podemos cargarlos más. O incluso esta culpa puede también sentirse desde la urgencia de que, como hay algo que está mal en ti, pues se requiere sacar eso urgentemente, hay que repararlo porque de lo contrario los resultados serían aún más nefastos, y es allí la analogía de considerar que la culpa funciona como un taller mecánico, donde hay que reparar las piezas que no sirven o donde incluso aseveramos estar rotas.",
      "Y no, no somos artefactos, ni carros que requieren una reparación. No estamos rotas, estamos sobrecargadas de pensamientos, emociones, historias e incluso un contexto personal que muchas veces es invalidante. La verdad, no podemos cambiar el pasado, e incluso aquello que podamos considerar errores, pero sí verdaderamente es nuestra responsabilidad el poder mirar no solo la sensación de culpa, sino qué cosas ocurrieron antes de tu llegar allí, el examinar cuáles son los recursos que tienes en el aquí y en el ahora y cuáles pueden ser las cosas que generalmente te están confundiendo y no te permiten salir del ciclo.",
      "Al tratar la culpa como un «taller» donde solo buscamos solución rápida, terminamos parcheando el síntoma pero no la causa. Para sanar la relación con la culpa, te doy unas pequeñas orientaciones:",
      "- Identifica si la culpa es heredada: revisa los mandatos con los que has crecido. Si esto que te señalas no es tu propia voz, cuestiónalo. Muchas de las cosas que nos pesan son expectativas de nuestras madres, abuelas, de una cultura de abnegación femenina.",
      "- Diferencia responsabilidad de culpa: la responsabilidad te permite actuar y sí puede reparar, pero la culpa generalmente te paraliza y conlleva al castigo. Pregúntate: ¿esto que estoy haciendo me permite tomar acción? ¿O me estoy quedando en un bucle? ¿De qué me estoy castigando? ¿Cuál es el beneficio secundario al lograr castigarme?",
      "- Valida el derecho al placer y al descanso: es vital que practiques el autocuidado, no puedes sostener a otros si no te sostienes a ti misma. La mala noticia es que, si no te haces cargo, nadie lo hará por ti y serás responsable como tu cuerpo te lo recordará. Tienes la oportunidad para establecer, no una larga jornada de descansos y placeres, pero sí de pequeños momentos de conexión contigo que te permitan sentir aliento y recargar tu batería emocional y espiritual.",
      "Finalmente, la culpa no se va a ir porque alguien te dijo que no debes sentirla. Si fuese así, quizás no estarías leyendo esto. Se disuelve cuando empezamos a tratarnos con la misma compasión con la que tratamos a los demás. No necesitas un taller para repararte porque no estás rota. Tu valor es intrínseco y no depende de cuánto logres tachar en tu lista de pendientes.",
      "Licda Giovanna Bennici"
    ],
    img: "/img_content/puertas.jpeg",
  },
];
