const questionsArr = [
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
    },
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
  ],
];

const ranking = [];

let correctAnswer,
  wrongAnswer,
  questionN,
  pendingQuestion,
  score = 0;
let gameActive = false;
let coverActive = false;
let userName, currentLetter, time, timer, timeout, rotation, gameNumber;

const questions = document.getElementById("questions");
const check_text = document.getElementById("check-text");
const result_text = document.getElementById("result-text");
const userAnswer = document.getElementById("userAnswer");
const ranking_text = document.getElementById("ranking-text");
const rules_text = document.getElementById("rules-text");
const time_text = document.getElementById("time-text");
const return_text = document.getElementById("return-text");
const root = document.querySelector(":root");
const circle_container = document.getElementById("circle-container");
const btn_confirm = document.getElementById("btn-confirm");
const btn_pasapalabra = document.getElementById("btn-pasapalabra");
const btn_end = document.getElementById("btn-end");

//nuevo Juego
const newGame = () => {
  //preguntamos y guardamos el nombre
  btn_pasapalabra.classList.remove("ds-none");
  btn_confirm.classList.remove("ds-none");
  userAnswer.classList.remove("ds-none");
  gameActive = true;
  questionN = -1;
  rotation = 360 / 27;
  gameNumber = Math.floor(Math.random() * questionsArr.length);
  questionsArr[gameNumber].forEach((element) => (element.status = 0));
  questionsArr[gameNumber].forEach((element) => {
    let e = document.getElementById(element.letter);
    e.classList.remove("__yellow", "__red", "__green");
  });
  userName = prompt("Indique su nombre por favor");
  time = 180;
  timeout = setTimeout(timeLimit, 180000);
  timerUpdate();
  userAnswer.focus();
  btn_end.disabled = false;
  scoreUpdate();
  newQuestion();
  onresize(circle_container, function () {  
    translateValue  = circle_container.offsetHeight;      
    moveLetters()    
  });
};

// resetear todo
const reset = () => {
  check_text.textContent = "";
  userAnswer.value = "";
  questions.textContent = "";
  btn_pasapalabra.classList.add("ds-none");
  btn_confirm.classList.add("ds-none");
  userAnswer.classList.add("ds-none");
  btn_end.disabled = true;
  gameActive = false;
  clearTimeout(timeout);
  clearInterval(timer);
};

//Guardamos los resultados en local storage
const saveResults = () => {
  ranking.push({ userName: userName, points: score });
  const orderRanking = ranking.sort((a, b) => b.points - a.points);
  const showRankingOrdered = orderRanking.reduce((acc, next) => {
    return `${acc}${next.userName}: ${next.points} Puntos<br><br>`;
  }, `Ranking <br><br><br>`);
  ranking_text.innerHTML = showRankingOrdered;
};

//Visualizamos los resultaso
const showResults = () => {
  result_text.classList.remove("ds-none");
  return_text.classList.remove("ds-none");
  setTimeout(function () {
    (coverActive = true), 1000;
  });
};

//limite de tiempo
const timeLimit = () => {
  result_text.innerHTML = `¡ Se ha acabado el tiempo ! <br><br> Preguntas acertadas ${correctAnswer}, equivocadas ${wrongAnswer}, sin responder ${pendingQuestion}<br><br>Tu Puntuación ha sido de ${score}`;
  reset();
  time_text.textContent = 0;
  saveResults();
  showResults();
};

// actualizazion timer
let timerUpdate = () => {
  time--;
  timer = setInterval(function () {
    time_text.textContent = time + '"';
    time--;
  }, 1000);
};

//actualizar puntuación
const scoreUpdate = () => {
  correctAnswer = questionsArr[gameNumber].filter((x) => x.status === 2).length;
  wrongAnswer = questionsArr[gameNumber].filter((y) => y.status === 3).length;
  pendingQuestion = questionsArr[gameNumber].filter((w) => w.status < 2).length;
  score = correctAnswer - wrongAnswer;
};

//Comprobamos si ha ganado
const checkVictory = () => {
  scoreUpdate();
  if (questionsArr[gameNumber].every((element) => element.status > 1)) {
    result_text.innerHTML = `¡ Has terminado ! <br><br> Preguntas acertadas ${correctAnswer}, equivocadas ${wrongAnswer}, sin responder ${pendingQuestion}<br><br>Tu Puntuación ha sido de ${score}`;
    reset();
    saveResults();
    showResults();
  } else {
    newQuestion();
  }
};

//Comprobamos que pregunta tenemos que hacer
const newQuestion = () => {
  questionN += 1;
  userAnswer.value = "";
  userAnswer.focus();
  root.style.setProperty(
    "--pseudo-rotate",
    "rotate(" + (rotation -= 360 / 27) + "deg)"
  );
  if (questionN === questionsArr[gameNumber].length) {
    questionN = 0;
  }

  if (questionsArr[gameNumber][questionN].status < 2) {
    currentLetter = document.getElementById(
      questionsArr[gameNumber][questionN].letter
    );
    questions.textContent = questionsArr[gameNumber][questionN].question;
    moveLetters();
  } else {
    newQuestion();
  }
};

// mover letras
let translateValue;

const onresize = (dom_elem, callback) => {
  const resizeObserver = new ResizeObserver(() => callback());
  resizeObserver.observe(dom_elem);
};

const moveLetters = () => {  
  let num = 0;
  let letterPosition = 27 - questionN;
  for (let i = 0; i < questionsArr[gameNumber].length; i++) {
    let letter = document.getElementById(
      questionsArr[gameNumber][i].letter
    )
    if (letterPosition + i > 26) {
      letterPosition = 0;
      num = 0;
    }

    const initialRotation = 90;

    const rotation =
      -num * (360 / 27) - letterPosition * (360 / 27) + initialRotation;

    letter.style.transform = `rotate(${-rotation}deg) translate(${translateValue /2.57 + "px"}) rotate(${rotation}deg)`;
    letter.style.width = translateValue / 17 + "px";
    letter.style.height = translateValue / 17 + "px";
    letter.style.top = "calc(50% - " + translateValue /33 + "px)";
    letter.style.left = "calc(50% - " + translateValue /33 + "px)";

    num++;
  }
};

//Preguntamos y comprobamos la respuesta que ha dado es usuario
const checkAnswer = () => {
  texto_userAnswer = userAnswer.value.toLowerCase();
  switch (texto_userAnswer) {
    case questionsArr[gameNumber][questionN].answer:
      questionsArr[gameNumber][questionN].status = 2;
      currentLetter.classList.remove("__yellow");
      currentLetter.classList.add("__green");
      checkVictory();
      break;

    case "pasapalabra":
    case "":
      pasapalabra();
      break;

    default:
      questionsArr[gameNumber][questionN].status = 3;
      currentLetter.classList.remove("__yellow");
      currentLetter.classList.add("__red");
      check_text.innerHTML =
        "La respuesta correcta es " +
        questionsArr[gameNumber][questionN].answer;
      setTimeout(function () {
        check_text.textContent = "";
      }, 2000);
      checkVictory();
  }
};

//pasapalabra
const pasapalabra = () => {
  questionsArr[gameNumber][questionN].status = 1;
  currentLetter.classList.add("__yellow");
  newQuestion();
};

//terminar el juego con antelación
const end = () => {
  result_text.innerHTML = `¡ Gracias por participar ! <br><br> Preguntas acertadas ${correctAnswer}, equivocadas ${wrongAnswer}, sin responder ${pendingQuestion}<br><br>Tu Puntuación ha sido de ${score}`;
  reset();
  showResults();
};

// activamos la funcionalidad del teclado y del ratón
const logKey = (e) => {
  if (coverActive) {
    return_text.classList.add("ds-none");
    result_text.classList.add("ds-none");
    ranking_text.classList.add("ds-none");
    rules_text.classList.add("ds-none");
    coverActive = false;
    return;
  }

  if (gameActive && e.key === "Enter") {
    checkAnswer();
  }
};

const logClick = () => {
  if (coverActive) {
    return_text.classList.add("ds-none");
    result_text.classList.add("ds-none");
    ranking_text.classList.add("ds-none");
    rules_text.classList.add("ds-none");
    coverActive = false;
  }
};

//abrir reglas y clasificación
const openTab = (element) => {
  element.classList.remove("ds-none");
  return_text.classList.remove("ds-none");
  setTimeout(function () {
    (coverActive = true), 1000;
  });
};

document.addEventListener("click", logClick);
document.addEventListener("keydown", logKey);
btn_pasapalabra.addEventListener("click", pasapalabra);
