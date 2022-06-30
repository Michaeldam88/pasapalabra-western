const questions = [
  [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé",
    },
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      answer: "facil",
      status: 0,
      question:
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano",
    },
    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo",
    },
    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question:
        "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "w",
      answer: "sandwich",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question:
        "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    }
  ],
  [
    {
      letter: "a",
      answer: "alcachofa",
      status: 0,
      question:
        "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha",
    },
    {
      letter: "b",
      answer: "botiquín",
      status: 0,
      question: "CON LA B. Caja en la que se guardan medicinas",
    },
    {
      letter: "c",
      answer: "camilla",
      status: 0,
      question:
        "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos",
    },
    {
      letter: "d",
      answer: "dedicatoria",
      status: 0,
      question:
        "CON LA D. Palabras que se escriben y se dicen como regalo a alguien",
    },
    {
      letter: "e",
      answer: "empañar",
      status: 0,
      question: "CON LA E. Mancharse un cristal con el vapor de agua",
    },
    {
      letter: "f",
      answer: "fabula",
      status: 0,
      question:
        "CON LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja",
    },
    {
      letter: "g",
      answer: "guisar",
      status: 0,
      question: "CON LA G. Preparar alimentos cocinándolos con calor",
    },
    {
      letter: "h",
      answer: "hamaca",
      status: 0,
      question:
        "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama",
    },
    {
      letter: "i",
      answer: "imperdible",
      status: 0,
      question:
        "CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho",
    },
    {
      letter: "j",
      answer: "jinete",
      status: 0,
      question: "CON LA J. Persona que monta a caballo",
    },
    {
      letter: "k",
      answer: "karaoke",
      status: 0,
      question:
        "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue laletra que aparece en una pantalla",
    },
    {
      letter: "l",
      answer: "litera",
      status: 0,
      question:
        "CON LA L. Mueble formado por dos camas puestas una encima de la otra",
    },
    {
      letter: "m",
      answer: "mayonesa",
      status: 0,
      question: "CON LA M. Salsa que se hace batiendo huevo y aceite",
    },
    {
      letter: "n",
      answer: "nuca",
      status: 0,
      question:
        "CON LA N. Parte posterior de la cabeza situada encima del cuello",
    },
    {
      letter: "ñ",
      answer: "teñir",
      status: 0,
      question:
        "CONTIENE LA Ñ. Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados",
    },
    {
      letter: "o",
      answer: "orilla",
      status: 0,
      question: "CON LA O. Borde del mar, de un lago o de un río",
    },
    {
      letter: "p",
      answer: "planchar",
      status: 0,
      question: "CON LA P. Quitar las arrugar a una prenda",
    },
    {
      letter: "q",
      answer: "quitamanchas",
      status: 0,
      question:
        "CON LA Q. Producto natural o preparado que sirve para quitar manchas",
    },
    {
      letter: "r",
      answer: "racimo",
      status: 0,
      question: "CON LA R. Conjunto de uvas sostenidas en un mismo tallo.",
    },
    {
      letter: "s",
      answer: "sembrar",
      status: 0,
      question: "CON LA S. Enterrar semillas en la tierra para que crezcan",
    },
    {
      letter: "t",
      answer: "taburete",
      status: 0,
      question: "CON LA T. Asiento sin respaldo",
    },
    {
      letter: "u",
      answer: "untar",
      status: 0,
      question: "CON LA U. Extender mantequilla sobre una rebanada de pan",
    },
    {
      letter: "v",
      answer: "vecino",
      status: 0,
      question:
        "CON LA V. Persona que vive en el mismo barrio o edificio que otra",
    },
    {
      letter: "w",
      answer: "wifi",
      status: 0,
      question:
        "CONTIENE LA W. Sistema de conexión inalámbrica para conectarse a internet",
    },
    {
      letter: "x",
      answer: "fenix",
      status: 0,
      question:
        "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas",
    },
    {
      letter: "y",
      answer: "yunque",
      status: 0,
      question:
        "CONTIENE LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo.",
    },
    {
      letter: "z",
      answer: "zumbido",
      status: 0,
      question:
        "CON LA Z. Sonido que producen algunos insectos como la abeja o el mosquito",
    },
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
  ],
];

const ranking = [];
let aciertos,
  errores,
  nPreg,
  pendientes,
  puntuacion = 0;
let nombre, letter;
let preguntas = document.getElementById("preguntas");
let comprobacion = document.getElementById("comprobacion");
let resultados_text = document.getElementById("resultados-text");
let respuestas = document.getElementById("respuestas");
let clasificacion_text = document.getElementById("clasificacion-text");
const btn_confirmar = document.getElementById("btn-confirmar");
const btn_pasapalabra = document.getElementById("btn-pasapalabra");
const btn_terminar = document.getElementById("btn-terminar");
const br = document.createElement("BR");

// valor que cambia el set de preguntas
let sp = -1;

// resetear todo
const reset = () => {
  comprobacion.textContent = "";
  respuestas.value = "";
  preguntas.textContent = "";
  btn_pasapalabra.classList.add("ds-none");
  btn_confirmar.classList.add("ds-none");
  respuestas.classList.add("ds-none");
};

//nuevo Juego
const newGame = () => {
  //preguntamos y guardamos el nombre
  btn_pasapalabra.classList.remove("ds-none");
  btn_confirmar.classList.remove("ds-none");
  respuestas.classList.remove("ds-none");
  nPreg = 0;
  sp < questions.length - 1 ? sp++ : (sp = 0);
  questions[sp].forEach((element) => (element.status = 0));
  questions[sp].forEach((element) => {
    let e = document.getElementById(element.letter);
    e.classList.remove("__yellow", "__red", "__green");
  });
  setTimeout(timeLimit, 180000);
  nombre = prompt("Indique su nombre por favor");
  respuestas.focus();
  btn_terminar.disabled = false;
  preguntar();
};

//limite de tiempo
const timeLimit = () => {
  reset();
  btn_terminar.disabled = true;
  resultados_text.textContent = `¡ Se ha acabado el tiempo ! ${br} Preguntas acertadas ${aciertos}, equivocadas ${errores}, sin responder ${pendientes}${br}Tu Puntuación ha sido de ${puntuacion}`;
  resultados_text.classList.remove("ds-none");
};

//actualizar puntuación
const actPuntos = () => {
  aciertos = questions[sp].filter((x) => x.status === 2).length;
  errores = questions[sp].filter((y) => y.status === 3).length;
  pendientes = questions[sp].filter((w) => w.status < 2).length;
  puntuacion = aciertos - errores;
};

//Comprobamos si ha ganado
const victoria = () => {
  actPuntos();
  if (questions[sp].every((element) => element.status > 1)) {
    reset();
    resultados_text.textContent = `¡ Has terminado ! ${br} Preguntas acertadas ${aciertos}, equivocadas ${errores}, sin responder ${pendientes}${br}Tu Puntuación ha sido de ${puntuacion}`;
    resultados_text.classList.remove("ds-none");
    ranking.push({ name: nombre, points: puntuacion });
    const orderRanking = ranking.sort((a, b) => b.points - a.points);
    const clasificacionOrdenada = orderRanking.reduce((acc, next) => {
      return `${acc}${next.name}: ${next.points} Puntos${br}`;
    }, `Ranking${br}`);
    setTimeout(function () {
      resultados_text.classList.add("ds-none");
      clasificacion_text.classList.remove("ds-none");
      clasificacion_text.textContent = clasificacionOrdenada;
    }, 8000);
  } else {
    preguntar();
  }
};

//Comprobamos que pregunta tenemos que hacer
const preguntar = () => {
  console.log(nPreg)
  if (nPreg === questions[sp].length) {
    nPreg = 0;
  }

  if (questions[sp][nPreg].status < 2) {
    letter = document.getElementById(questions[sp][nPreg].letter);
    preguntas.textContent = questions[sp][nPreg].question;
  } else {
    nPreg += 1;
    preguntar();
  }
};

//Preguntamos y comprobamos la respuesta que ha dado es usuario
const comprobar = () => {
  texto_respuestas = respuestas.value.toLowerCase();
  switch (texto_respuestas) {
    case questions[sp][nPreg].answer:
      questions[sp][nPreg].status = 2;
      nPreg += 1;
      letter.classList.remove("__yellow");
      letter.classList.add("__green");
      respuestas.value = "";
      victoria();
      break;

    case "pasapalabra":
    case "":
      pasapalabra();
      break;

    default:
      questions[sp][nPreg].status = 3;
      letter.classList.remove("__yellow");
      letter.classList.add("__red");
      comprobacion.textContent =
        "Respuesta Incorrecta${br}La correcta era " +
        questions[sp][nPreg].answer;
      nPreg += 1;
      respuestas.value = "";
      victoria();
  }
};

//boton pasapalabra
const pasapalabra = () => {
  questions[sp][nPreg].status = 1;
  letter.classList.add("__yellow");
  nPreg += 1;
  respuestas.value = "";
  preguntar();
};

//terminar el juego con antelación
const end = () => {
  reset();
  resultados_text.textContent = `¡ Gracias por participar !${br}Preguntas acertadas ${aciertos}, equivocadas ${errores}, sin responder ${pendientes}${br}Tu Puntuación ha sido de ${puntuacion}`;
  resultados_text.classList.remove("ds-none");
  btn_terminar.disabled = true;
};

// activamos la funcionalidad del teclado
const logKey = (e) => {
  e = e.key;
  if (e === "Space") {
    pasapalabra();
  } else if (e === "Enter") {
    comprobar();
  }
};

document.addEventListener("keydown", logKey);
