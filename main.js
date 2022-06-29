const questions = [
    [
      {
        letter: "a",
        answer: "abducir",
        status: 0,
        question:
          "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
      },
      {
        letter: "b",
        answer: "bingo",
        status: 0,
        question:
          "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
      },
      {
        letter: "c",
        answer: "churumbel",
        status: 0,
        question: "CON LA C. Niño, crío, bebé"
      },
      {
        letter: "d",
        answer: "diarrea",
        status: 0,
        question:
          "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
      },
      {
        letter: "e",
        answer: "ectoplasma",
        status: 0,
        question:
          "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
      },
      {
        letter: "f",
        answer: "facil",
        status: 0,
        question:
          "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"
      },
      {
        letter: "g",
        answer: "galaxia",
        status: 0,
        question:
          "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"
      },
      {
        letter: "h",
        answer: "harakiri",
        status: 0,
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento"
      },
      {
        letter: "i",
        answer: "iglesia",
        status: 0,
        question: "CON LA I. Templo cristiano"
      },
      {
        letter: "j",
        answer: "jabali",
        status: 0,
        question:
          "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
      },
      {
        letter: "k",
        answer: "kamikaze",
        status: 0,
        question:
          "CON LA K. Persona que se juega la vida realizando una acción temeraria"
      },
      {
        letter: "l",
        answer: "licantropo",
        status: 0,
        question: "CON LA L. Hombre lobo"
      },
      {
        letter: "m",
        answer: "misantropo",
        status: 0,
        question:
          "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"
      },
      {
        letter: "n",
        answer: "necedad",
        status: 0,
        question: "CON LA N. Demostración de poca inteligencia"
      },
      {
        letter: "ñ",
        answer: "señal",
        status: 0,
        question:
          "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."
      },
      {
        letter: "o",
        answer: "orco",
        status: 0,
        question:
          "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
      },
      {
        letter: "p",
        answer: "protoss",
        status: 0,
        question:
          "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
      },
      {
        letter: "q",
        answer: "queso",
        status: 0,
        question:
          "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"
      },
      { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
      {
        letter: "s",
        answer: "stackoverflow",
        status: 0,
        question:
          "CON LA S. Comunidad salvadora de todo desarrollador informático"
      },
      {
        letter: "t",
        answer: "terminator",
        status: 0,
        question:
          "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
      },
      {
        letter: "u",
        answer: "unamuno",
        status: 0,
        question:
          "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
      },
      {
        letter: "v",
        answer: "vikingos",
        status: 0,
        question:
          "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
      },
      {
        letter: "w",
        answer: "sandwich",
        status: 0,
        question:
          "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
      },
      {
        letter: "x",
        answer: "botox",
        status: 0,
        question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"
      },
      {
        letter: "y",
        answer: "peyote",
        status: 0,
        question:
          "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"
      },
      {
        letter: "z",
        answer: "zen",
        status: 0,
        question:
          "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
      }
    ],
    [
      {
        letter: "a",
        answer: "alcachofa",
        status: 0,
        question:
          "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha"
      },
      {
        letter: "b",
        answer: "botiquín",
        status: 0,
        question: "CON LA B. Caja en la que se guardan medicinas"
      },
      {
        letter: "c",
        answer: "camilla",
        status: 0,
        question:
          "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos"
      },
      {
        letter: "d",
        answer: "dedicatoria",
        status: 0,
        question:
          "CON LA D. Palabras que se escriben y se dicen como regalo a alguien"
      },
      {
        letter: "e",
        answer: "empañar",
        status: 0,
        question: "CON LA E. Mancharse un cristal con el vapor de agua"
      },
      {
        letter: "f",
        answer: "fabula",
        status: 0,
        question:
          "CON LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja"
      },
      {
        letter: "g",
        answer: "guisar",
        status: 0,
        question: "CON LA G. Preparar alimentos cocinándolos con calor"
      },
      {
        letter: "h",
        answer: "hamaca",
        status: 0,
        question:
          "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama"
      },
      {
        letter: "i",
        answer: "imperdible",
        status: 0,
        question:
          "CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho"
      },
      {
        letter: "j",
        answer: "jinete",
        status: 0,
        question: "CON LA J. Persona que monta a caballo"
      },
      {
        letter: "k",
        answer: "karaoke",
        status: 0,
        question:
          "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue laletra que aparece en una pantalla"
      },
      {
        letter: "l",
        answer: "litera",
        status: 0,
        question:
          "CON LA L. Mueble formado por dos camas puestas una encima de la otra"
      },
      {
        letter: "m",
        answer: "mayonesa",
        status: 0,
        question: "CON LA M. Salsa que se hace batiendo huevo y aceite"
      },
      {
        letter: "n",
        answer: "nuca",
        status: 0,
        question:
          "CON LA N. Parte posterior de la cabeza situada encima del cuello"
      },
      {
        letter: "ñ",
        answer: "teñir",
        status: 0,
        question:
          "CONTIENE LA Ñ. Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados"
      },
      {
        letter: "o",
        answer: "orilla",
        status: 0,
        question: "CON LA O. Borde del mar, de un lago o de un río"
      },
      {
        letter: "p",
        answer: "planchar",
        status: 0,
        question: "CON LA P. Quitar las arrugar a una prenda"
      },
      {
        letter: "q",
        answer: "quitamanchas",
        status: 0,
        question:
          "CON LA Q. Producto natural o preparado que sirve para quitar manchas"
      },
      {
        letter: "r",
        answer: "racimo",
        status: 0,
        question: "CON LA R. Conjunto de uvas sostenidas en un mismo tallo."
      },
      {
        letter: "s",
        answer: "sembrar",
        status: 0,
        question: "CON LA S. Enterrar semillas en la tierra para que crezcan"
      },
      {
        letter: "t",
        answer: "taburete",
        status: 0,
        question: "CON LA T. Asiento sin respaldo"
      },
      {
        letter: "u",
        answer: "untar",
        status: 0,
        question: "CON LA U. Extender mantequilla sobre una rebanada de pan"
      },
      {
        letter: "v",
        answer: "vecino",
        status: 0,
        question:
          "CON LA V. Persona que vive en el mismo barrio o edificio que otra"
      },
      {
        letter: "w",
        answer: "wifi",
        status: 0,
        question:
          "CONTIENE LA W. Sistema de conexión inalámbrica para conectarse a internet"
      },
      {
        letter: "x",
        answer: "fenix",
        status: 0,
        question:
          "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas"
      },
      {
        letter: "y",
        answer: "yunque",
        status: 0,
        question:
          "CONTIENE LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo."
      },
      {
        letter: "z",
        answer: "zumbido",
        status: 0,
        question:
          "CON LA Z. Sonido que producen algunos insectos como la abeja o el mosquito"
      },
      {
        letter: "a",
        answer: "abducir",
        status: 0,
        question:
          "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
      }
    ]
  ];
  
  //Informamos de las reglas
  alert(
    "Reglas\nTendremos que contestar a una pregunta por cada letra del alfabeto en menos de 2 minutos.\nObtendremos un punto por cada respuesta acertada y perderemos un punto por cada respuesta erronea.\n\nPodemos escribir PASAPALABRA o teclear intro para pasar a la siguiente pregunta\n\nPodemos terminar el juego escribiendo END\nSi salimos antes de terminar la ronda no se registrará la puntuación en el ranking."
  );
  
  const ranking = [];
  let nPreg = 0;
  let aciertos,
    errores,
    pendientes = 0;
  let nombre;
  let respuesta;
  
  // valor que cambia el set de preguntas
  let sp = -1;
  
  //nuevo Juego
  const nuevoJuego = () => {
    //preguntamos y guardamos el nombre
    nombre = prompt("Indique su nombre por favor");
  
    nPreg = 0;
    sp < questions.length - 1 ? sp++ : (sp = 0);
    questions[sp].forEach((element) => (element.status = 0));
    //setTimeout(timeLimit, 120000);
    preguntar(nPreg);
  };
  
  //reiniciar
  const reiniciar = () => {
    let reiniciar = prompt("Quieres volver a jugar?\nsi/no");
    reiniciar === "si" ? nuevoJuego() : alert("¡ Gracias por Partecipar !");
  };
  
  //limite de tiempo
  const timeLimit = () => {
    alert(
      `¡ Se ha acabado el tiempo !\nPreguntas acertadas ${aciertos}, equivocadas ${errores}, sin responder ${pendientes}\nTu Puntuación ha sido de ${puntuacion}`
    );
    reiniciar();
  };
  
  //actualizar puntuación
  const actPuntos = () => {
    aciertos = questions[sp].filter((x) => x.status === 1).length;
    errores = questions[sp].filter((y) => y.status === 2).length;
    pendientes = questions[sp].filter((w) => w.status === 0).length;
    puntuacion = aciertos - errores;
  };
  
  //Comprobamos si ha ganado
  const victoria = () => {
    actPuntos();
    if (questions[sp].every((element) => element.status !== 0)) {
      alert(
        `¡ Has terminado !\nPreguntas acertadas ${aciertos}, equivocadas ${errores}, sin responder ${pendientes}\nTu Puntuación ha sido de ${puntuacion}`
      );
      ranking.push({ name: nombre, points: puntuacion });
      const rankOrdered = ranking.sort((a, b) => b.points - a.points);
      const resultado = rankOrdered.reduce((acc, next) => {
        return `${acc}${next.name}: ${next.points} Puntos\n`;
      }, "Ranking\n");
      alert(resultado);
      reiniciar();
    } else {
      preguntar(nPreg);
    }
  };
  
  //Comprobamos que pregunta tenemos que hacer
  const preguntar = (preg) => {
    if (preg === questions[sp].length - 1) {
      nPreg = 0;
    }
  
    if (questions[sp][preg].status === 0) {
      comprobar(preg);
    } else {
      nPreg += 1;
      preguntar(nPreg);
    }
  };
  
  //Preguntamos y comprobamos la respuesta que ha dado es usuario
  const comprobar = (preg) => {
    let estadoLetras = questions[sp].reduce((prev, curr) => {
      return `${prev} ${curr.letter} `;
    }, "Preguntas:\n");
  
    let estadoRespuestas = questions[sp].reduce((prev, curr) => {
      let simbulo;
      if (curr.status === 0) {
        simbulo = "-";
      } else if (curr.status === 1) {
        simbulo = "V";
      } else {
        simbulo = "X";
      }
      return `${prev} ${simbulo} `;
    }, "");
    respuesta = prompt(
      `${estadoLetras}\n${estadoRespuestas}\n\n${questions[sp][preg].question}`
    );
    respuesta =
      respuesta === null ? "end" : (respuesta = respuesta.toLowerCase());
    switch (respuesta) {
      case questions[sp][preg].answer:
        questions[sp][preg].status = 1;
        alert("Respuesta Correcta");
        nPreg += 1;
        victoria();
        break;
  
      case "pasapalabra":
      case "":
        alert("Pasamos a la siguiente");
        nPreg += 1;
        preguntar(nPreg);
        break;
  
      case "end":
        actPuntos();
        alert(
          `¡ Gracias por participar !\nPreguntas acertadas ${aciertos}, equivocadas ${errores}, sin responder ${pendientes}\nTu Puntuación ha sido de ${puntuacion}`
        );
        break;
  
      default:
        questions[sp][preg].status = 2;
        alert(
          "Respuesta Incorrecta\nLa correcta era " + questions[sp][preg].answer
        );
        nPreg += 1;
        victoria();
    }
  };
  
  nuevoJuego();