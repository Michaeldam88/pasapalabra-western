let ranking = [];

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
let localSavedRanking = JSON.parse(localStorage.getItem("ranking"));

//nuevo Juego
const newGame = () => {
  btn_pasapalabra.classList.remove("ds-none");
  gameActive = true;
  questionN = -1;
  rotation = 360 / 27;
  gameNumber = Math.floor(Math.random() * questionsArr.length);
  questions.style.fontSize = "0.95rem";
  questionsArr[gameNumber].forEach((element) => (element.status = 0));
  questionsArr[gameNumber].forEach((element) => {
    let e = document.getElementById(element.letter);
    e.classList.remove("__yellow", "__red", "__green");
  });
  time = 180;
  timeout = setTimeout(timeLimit, 180000);
  timerUpdate();
  userAnswer.focus();
  btn_end.disabled = false;
  scoreUpdate();
  newQuestion();
  onresize(circle_container, function () {
    translateValue = circle_container.offsetHeight;
    moveLetters();
  });
};

//preguntamos y guardamos el nombre
const addUserName = () => {
  btn_confirm.classList.remove("ds-none");
  userAnswer.classList.remove("ds-none");
  questions.style.fontSize = "1.5rem";
  questions.textContent = "¡ Añade tu nombre !";
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
  if (localSavedRanking !== null) ranking = localSavedRanking;
  ranking.push({ userName: userName, points: score });
  const orderRanking = ranking.sort((a, b) => b.points - a.points);
  const showRankingOrdered = orderRanking.reduce((acc, next) => {
    return `${acc}${next.userName}: ${next.points} Puntos<br><br>`;
  }, `Ranking <br><br><br>`);
  ranking_text.innerHTML = showRankingOrdered;
  localStorage.setItem("ranking", JSON.stringify(ranking));
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
    let letter = document.getElementById(questionsArr[gameNumber][i].letter);
    if (letterPosition + i > 26) {
      letterPosition = 0;
      num = 0;
    }

    const initialRotation = 90;

    const rotation =
      -num * (360 / 27) - letterPosition * (360 / 27) + initialRotation;

    letter.style.transform = `rotate(${-rotation}deg) translate(${
      translateValue / 2.57 + "px"
    }) rotate(${rotation}deg)`;
    letter.style.width = translateValue / 17 + "px";
    letter.style.height = translateValue / 17 + "px";
    letter.style.top = "calc(50% - " + translateValue / 33 + "px)";
    letter.style.left = "calc(50% - " + translateValue / 33 + "px)";

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
  // si abrimos la clasificación y hay resultados en memoria, los visulizamos
  if (element.id === "ranking-text") {
    if (localSavedRanking !== null) {
      ranking_text.innerHTML = localSavedRanking.reduce(
        (acc, next) => {
          return `${acc}${next.userName}: ${next.points} Puntos<br><br>`;
        },
        `Ranking <br><br><br>`
      );
    }
  }
  return_text.classList.remove("ds-none");
  setTimeout(function () {
    (coverActive = true), 1000;
  });
};

document.addEventListener("click", logClick);
document.addEventListener("keydown", logKey);

btn_pasapalabra.addEventListener("click", pasapalabra);
btn_confirm.addEventListener("click", () => {
  if (gameActive) {
    checkAnswer();
  } else {
    userName = userAnswer.value;
    if (userName === "") {
      questions.textContent = "¡ Añade un nombre por favor !";
    } else {
      newGame();
    }
  }
});
