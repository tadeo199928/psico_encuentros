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
    title: 'Hombre descubre que su mujer fuma una caja de tabaco después de 10 años de casados',
    date: '2025-11-13',
    content: [
      'Juan siempre pensó que su esposa, Marta, era la persona más saludable del mundo. Cada mañana, ella salía a \"respirar aire fresco\" al balcón, mientras él preparaba el café. Nunca sospechó nada extraño, aunque a veces el aire fresco olía a algo más peculiar.',
      'Un día, mientras buscaba sus llaves, Juan encontró una caja misteriosa detrás de los libros de recetas. Al abrirla, se topó con una colección impresionante de cajetillas de tabaco, encendedores de colores y hasta una pipa con forma de unicornio. Su primera reacción fue pensar que Marta estaba coleccionando arte moderno.',
      'Decidió enfrentarla con la evidencia. \"¿Marta, por qué hay una pipa de unicornio en la cocina?\" preguntó, tratando de sonar serio. Marta soltó una carcajada y confesó: \"Juan, llevo fumando desde antes de conocerte. Pensé que lo sabías por el olor a bosque encantado en el baño.\"',
      'La noticia corrió como pólvora entre los vecinos. El grupo de WhatsApp de la comunidad se llenó de memes y teorías conspirativas. El perro de la familia, que siempre ladraba cuando Marta salía al balcón, fue ascendido a detective oficial.',
      'Juan, aún en shock, decidió probar uno de los cigarrillos para entender el misterio. Tosió durante media hora y prometió nunca volver a hacerlo. Marta le preparó un té de hierbas y le dijo: \"Ahora entiendes por qué siempre tengo caramelos de menta.\"',
      'Al final, la pareja decidió que la honestidad era la mejor política. Juan empezó a acompañar a Marta en sus salidas al balcón, aunque solo para tomar café y contar estrellas. Los vecinos siguen esperando el próximo secreto familiar, pero Juan ya revisó todos los rincones de la casa.',
      'Moraleja: En el matrimonio, siempre hay espacio para una sorpresa y para una caja de tabaco bien escondida.'
    ],
    img: '/img_content/smoking.png',
    link: 'https://www.nytimes.com/international/',
  },
  {
    id: 2,
    title: 'Gato aprende a abrir la nevera y se convierte en chef de medianoche',
    date: '2025-10-22',
    content: [
      'Todo comenzó una noche cuando la familia escuchó ruidos extraños en la cocina. Pensaron que era el viento, pero al día siguiente, el jamón había desaparecido misteriosamente. Nadie sospechaba del gato, Pelusa, que siempre dormía plácidamente en el sofá.',
      'Pero las desapariciones continuaron. Queso, leche, incluso una tarta de cumpleaños. La familia instaló una cámara y descubrió la verdad: Pelusa había aprendido a abrir la nevera usando sus patas y una técnica digna de un ninja culinario.',
      'No solo robaba comida, sino que la combinaba en platos exóticos. Un día preparó \"sushi de salchicha con yogur\" y otro \"ensalada de atún con galletas\". La familia empezó a encontrar pequeños menús escritos con huellas de patitas.',
      'Los vecinos se enteraron y comenzaron a pedirle recetas. Pelusa abrió su propio canal de cocina en redes sociales, \"Cocina Gatuna\", donde enseñaba a otros felinos a preparar bocadillos nocturnos. Pronto, la nevera se llenó de ingredientes especiales para el chef de la casa.',
      'La fama de Pelusa creció tanto que recibió una invitación para participar en \"MasterChef Animal\". Aunque no ganó, se llevó el premio al concursante más creativo y travieso.',
      'Ahora, cada noche, la familia deja la nevera bien cerrada, pero siempre hay una sorpresa culinaria esperándolos en la mesa. Pelusa sigue innovando y nadie se atreve a dejar el jamón sin vigilancia.',
      'Moraleja: Nunca subestimes el poder gastronómico de un gato con hambre y mucha creatividad.'
    ],
    img: '/img_content/cat.png',
  },
  {
    id: 3,
    title: 'Niño inventa idioma secreto para evitar hacer la tarea',
    date: '2025-09-30',
    content: [
      'Martín, de 8 años, decidió que la mejor forma de evitar la tarea era inventar un idioma que solo él entendiera. Así nació el \"tareañol\", una mezcla de sonidos, gestos y palabras inventadas que confundía a todos, especialmente a sus profesores.',
      'Cada vez que le pedían la tarea, Martín respondía con frases como \"blop blop tarinqui\" y movimientos de manos dignos de un mago. Los profesores pensaron que era una nueva tendencia educativa y trataron de aprender el idioma, sin éxito.',
      'Sus compañeros se unieron a la moda y pronto toda la clase hablaba tareañol. Las reuniones de padres se volvieron caóticas, con adultos intentando descifrar los mensajes secretos de sus hijos. Incluso la directora pidió ayuda a un lingüista, que terminó escribiendo un libro sobre el fenómeno.',
      'Martín se convirtió en una celebridad escolar. Le pidieron que enseñara tareañol en talleres, pero él solo quería evitar la tarea de matemáticas. Los profesores, desesperados, empezaron a dejarle ejercicios en \"tareañol\", pero Martín siempre encontraba una forma de responder con más palabras inventadas.',
      'La moda llegó a internet y ahora hay tutoriales para aprender tareañol, aunque nadie sabe realmente qué significa nada. Martín sigue innovando, creando dialectos y variantes para cada asignatura.',
      'Al final, los profesores decidieron que la creatividad era más importante que la tarea. Martín recibió un diploma por \"Innovación Lingüística\" y prometió usar su idioma solo para cosas divertidas.',
      'Moraleja: Si no puedes evitar la tarea, ¡invéntate un idioma y confunde a todos!'
    ],
    img: '/img_content/kid.png',
  },
  {
    id: 4,
    title: 'Abuela se vuelve viral bailando reggaetón en la plaza',
    date: '2025-08-15',
    content: [
      'La abuela Juana siempre fue el alma de las fiestas familiares, pero nadie esperaba que se convirtiera en la reina del reggaetón. Todo comenzó cuando su nieto le enseñó unos pasos básicos para animar la reunión en la plaza del pueblo.',
      'Juana no solo aprendió los pasos, sino que los mejoró con su propio estilo. Pronto, todos los vecinos se unieron a sus bailes y la plaza se transformó en una pista de baile improvisada. Alguien grabó un video y lo subió a internet, y en cuestión de horas, Juana era viral.',
      'Recibió invitaciones para programas de televisión, entrevistas y hasta propuestas para grabar su propio tutorial de reggaetón para mayores. Los jóvenes del barrio la nombraron \"La Abuela Flow\" y le regalaron una gorra con brillos.',
      'Juana no se detuvo ahí. Organizó clases de reggaetón para adultos mayores, donde enseñaba a mover la cadera y a disfrutar la música sin importar la edad. Las clases se llenaron y hasta el alcalde se apuntó.',
      'La fama de Juana cruzó fronteras. Recibió mensajes de admiradores de otros países y hasta una invitación para bailar en un festival internacional. Su nieto, orgulloso, la acompañó en todas sus aventuras.',
      'Ahora, cada tarde, la plaza se llena de música y alegría. Juana sigue bailando, demostrando que nunca es tarde para aprender algo nuevo y divertirse.',
      'Moraleja: La edad es solo un número, ¡y el reggaetón no tiene límites!'
    ],
    img: '/img_content/vieja.png',
    link: 'https://es.wikipedia.org/wiki/Abuelo',
  },
  {
    id: 5,
    title: 'Perro aprende a usar la computadora y manda correos misteriosos',
    date: '2025-07-05',
    content: [
      'Rex, el perro de la familia, siempre fue curioso. Un día, mientras su dueño trabajaba desde casa, Rex observó atentamente cómo se usaba la computadora. Poco a poco, empezó a imitar los movimientos, presionando teclas con la nariz y la pata.',
      'Al principio, solo abría ventanas y cambiaba el fondo de pantalla. Pero pronto, los correos misteriosos empezaron a llegar. Mensajes como \"Guau Guau, necesito más galletas\" y \"El gato es el jefe secreto\" aparecían en la bandeja de entrada de toda la familia.',
      'El jefe de su dueño recibió un correo firmado por \"Rex el Magnífico\", pidiendo un aumento de croquetas. Los amigos pensaron que era una broma, pero Rex seguía enviando mensajes cada vez más elaborados, incluyendo memes de perros y consejos para cuidar el jardín.',
      'La familia instaló una cámara y descubrió que Rex había aprendido a usar el teclado viendo tutoriales en YouTube. Incluso tenía una lista de reproducción de \"Cómo escribir con patas\".',
      'Rex se volvió famoso en el barrio. Los vecinos le pedían consejos por correo y hasta le invitaron a dar una charla sobre tecnología canina. El gato de la casa, celoso, intentó aprender también, pero solo logró enviar correos en blanco.',
      'Ahora, Rex tiene su propio blog donde comparte historias y trucos para mascotas digitales. La familia nunca sabe qué mensaje aparecerá cada mañana, pero siempre empiezan el día con una sonrisa.',
      'Moraleja: Nunca subestimes la inteligencia de tu mascota ¡puede estar escribiendo correos mientras duermes!'
    ],
    img: '/img_content/dog.png',
  },
  {
    id: 6,
    title: 'Vecino instala alarma que solo suena cuando hay pizza en la puerta',
    date: '2025-06-21',
    content: [
      'En la comunidad, todos amaban la pizza, pero nadie la recibía tan rápido como Don Pepe. Un día, cansado de perderse las entregas, decidió instalar una alarma especial que solo sonaba cuando detectaba el aroma de pizza en la puerta.',
      'La alarma era tan precisa que ignoraba otros olores, como hamburguesas o empanadas. Cada vez que el repartidor llegaba, la alarma sonaba con una melodía de \"O sole mio\" y todos los vecinos sabían que había pizza fresca en el edificio.',
      'Pronto, la alarma se volvió famosa. Los vecinos empezaron a pedir pizza solo para escuchar la música y compartir el momento. Incluso el repartidor se hizo amigo de Don Pepe y le traía pizzas extra para probar el sistema.',
      'Un día, la alarma detectó una pizza falsa (hecha de cartón para una broma), y Don Pepe organizó una investigación digna de Sherlock Holmes. Al final, todos se rieron y compartieron una verdadera pizza para celebrar.',
      'La comunidad se unió tanto que crearon el \"Club de la Pizza\", con reuniones semanales y concursos de recetas. La alarma se convirtió en el símbolo de la unión vecinal y hasta el alcalde pidió una para su oficina.',
      'Ahora, cada vez que suena la alarma, todos corren a la puerta, listos para disfrutar una porción y una buena charla. Don Pepe sigue mejorando el sistema, soñando con una alarma que detecte helado y empanadas.',
      'Moraleja: Una buena pizza puede unir a todo el vecindario ¡y una alarma creativa también!'
    ],
    img: '/img_content/pizza.png',
  },
];
