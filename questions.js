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
  [
    {
      letter: "a",
      answer: "arteria",
      status: 0,
      question:
        "CON LA A. Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo.",
    },
    {
      letter: "b",
      answer: "bitácora",
      status: 0,
      question: "CON LA B. En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula.",
    },
    {
      letter: "c",
      answer: "cicerone",
      status: 0,
      question:
        "CON LA C. Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes.",
    },
    {
      letter: "d",
      answer: "diplomacia",
      status: 0,
      question:
        "CON LA D. Actividad que realiza un país para mantener buenas relaciones con el resto de países.",
    },
    {
      letter: "e",
      answer: "equinocio",
      status: 0,
      question: "CON LA E. Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra.",
    },
    {
      letter: "f",
      answer: "fisiología",
      status: 0,
      question:
        "CON LA F. Ciencia que estudia las funciones de los órganos de los seres vivos.",
    },
    {
      letter: "g",
      answer: "glaciación",
      status: 0,
      question: "CON LA G. Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo.",
    },
    {
      letter: "h",
      answer: "hinojo",
      status: 0,
      question:
        "CON LA H. Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión.",
    },
    {
      letter: "i",
      answer: "ingenio",
      status: 0,
      question:
        "CON LA I. 	Capacidad para inventar cosas o para pensar y hablar con gracia.",
    },
    {
      letter: "j",
      answer: "jade",
      status: 0,
      question: "CON LA J. Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno.",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Piloto japonés que se lanzaba en su avión contra un barco u otro objetivo enemigo para destruirlo, aunque muriera al hacerlo.",
    },
    {
      letter: "l",
      answer: "lema",
      status: 0,
      question:
        "CON LA L. 	Frase que expresa la forma en que debe actuar una persona.",
    },
    {
      letter: "m",
      answer: "miriñaque",
      status: 0,
      question: "CON LA M. Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo.",
    },
    {
      letter: "n",
      answer: "ninfa",
      status: 0,
      question:
        "CON LA N. En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos.",
    },
    {
      letter: "ñ",
      answer: "ñandu",
      status: 0,
      question:
        "CON LA Ñ. Ave parecida al avestruz, pero más pequeña y con tres dedos en cada pie.",
    },
    {
      letter: "o",
      answer: "onomatopeya",
      status: 0,
      question: "CON LA O. Palabra que imita el sonido que hace un animal o una cosa.",
    },
    {
      letter: "p",
      answer: "pabellón",
      status: 0,
      question: "CON LA P. Edificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él.",
    },
    {
      letter: "q",
      answer: "quimera",
      status: 0,
      question:
        "CON LA Q. Cosa que, sin ser real, alguien la imagina como posible o verdadera.",
    },
    {
      letter: "r",
      answer: "rémora",
      status: 0,
      question: "CON LA R. Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes.",
    },
    {
      letter: "s",
      answer: "sotana",
      status: 0,
      question: "CON LA S. 	Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos",
    },
    {
      letter: "t",
      answer: "testamento",
      status: 0,
      question: "CON LA T. Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias.",
    },
    {
      letter: "u",
      answer: "urbanización",
      status: 0,
      question: "CON LA U. Conjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven.",
    },
    {
      letter: "v",
      answer: "vencejo",
      status: 0,
      question:
        "CON LA V. Pájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido.",
    },
    {
      letter: "w",
      answer: "whisky",
      status: 0,
      question:
        "CONTIENE LA W. Licor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales.",
    },
    {
      letter: "x",
      answer: "xilografia",
      status: 0,
      question:
        "CON LA X. Manera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo.",
    },
    {
      letter: "y",
      answer: "yak",
      status: 0,
      question:
        "CONTIENE LA Y. Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío.",
    },
    {
      letter: "z",
      answer: "zócalo",
      status: 0,
      question:
        "CON LA Z. Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación.",
    },
  ],[
    {
      letter: "a",
      answer: "ascua",
      status: 0,
      question:
        "CON LA A. Trozo de cualquier material ardiendo pero sin llama.",
    },
    {
      letter: "b",
      answer: "bilis",
      status: 0,
      question: "CON LA B. 	Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos.",
    },
    {
      letter: "c",
      answer: "cubismo",
      status: 0,
      question:
        "CON LA C. Estilo de pintura que comenzó en Francia a principios de este siglo y que se caracteriza por representar figuras y objetos mediante formas geométricas.",
    },
    {
      letter: "d",
      answer: "diéresis",
      status: 0,
      question:
        "CON LA D. Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse.",
    },
    {
      letter: "e",
      answer: "estría",
      status: 0,
      question: "CON LA E. Línea que se forma en la piel cuando ésta se ha estirado excesivamente. ",
    },
    {
      letter: "f",
      answer: "fonema",
      status: 0,
      question:
        "CON LA F. Sonido de una letra.",
    },
    {
      letter: "g",
      answer: "gaucho",
      status: 0,
      question: "CON LA G. Se dice de las personas que viven en las grandes llanuras de Argentina y Uruguay y llevan el ganado de un lado a otro.",
    },
    {
      letter: "h",
      answer: "himno",
      status: 0,
      question:
        "CON LA H. 	Poesía o composición musical en alabanza de alguien o algo, como la que se dedica a un país.",
    },
    {
      letter: "i",
      answer: "imán",
      status: 0,
      question:
        "CON LA I. 	Mineral capaz de atraer el hierro u otros metales.",
    },
    {
      letter: "j",
      answer: "jabato",
      status: 0,
      question: "CON LA J. Cría del jabalí.",
    },
    {
      letter: "k",
      answer: "kiosko",
      status: 0,
      question:
        "CON LA K. Lugar donde se venden helados y refrescon en verano.",
    },
    {
      letter: "l",
      answer: "lombriz",
      status: 0,
      question:
        "CON LA L. Gusano muy largo de color rojizo que se alimenta de sustancias que hay en la tierra.",
    },
    {
      letter: "m",
      answer: "mudéjar",
      status: 0,
      question: "CON LA M. Nombre que se daba a los musulmanes que vivían en los reinos cristianos de la península ibérica.",
    },
    {
      letter: "n",
      answer: "nogal",
      status: 0,
      question:
        "CON LA N. 	Árbol grande con la corteza lisa y de color gris cuyo fruto es la nuez.",
    },
    {
      letter: "ñ",
      answer: "ñoño",
      status: 0,
      question:
        "CON LA Ñ. Cursi o demasiado delicado.",
    },
    {
      letter: "o",
      answer: "ocre",
      status: 0,
      question: "CON LA O. Se dice del color que es una mezcla de amarillo y marrón.",
    },
    {
      letter: "p",
      answer: "protocolo",
      status: 0,
      question: "CON LA P. Conjunto de reglas o ceremonias que hay que cumplir en los actos oficiales o solemnes.",
    },
    {
      letter: "q",
      answer: "quechua",
      status: 0,
      question:
        "CON LA Q. Pueblo indio que habita en Perú y que vivía allí antes del descubrimiento de América.",
    },
    {
      letter: "r",
      answer: "repisa",
      status: 0,
      question: "CON LA R. Tabla o elemento similar que se coloca contra la pared para poner en ella objetos.",
    },
    {
      letter: "s",
      answer: "solsticio",
      status: 0,
      question: "CON LA S. Nombre de dos momentos del año que marcan el inicio del verano y el comienzo del invierno.",
    },
    {
      letter: "t",
      answer: "troposfera",
      status: 0,
      question: "CON LA T. 	Capa de la atmósfera más cercana a la superficie de la Tierra, en la que tienen lugar los fenómenos del tiempo meteorológico.",
    },
    {
      letter: "u",
      answer: "utopia",
      status: 0,
      question: "CON LA U. Algo que es bueno y que deseamos pero que es imposible o muy difícil de realizar.",
    },
    {
      letter: "v",
      answer: "visera",
      status: 0,
      question:
        "CON LA V. Parte hacia afuera que tienen las gorras por delante y que sirve para que el sol no nos haga daño en los ojos.",
    },
    {
      letter: "w",
      answer: "western",
      status: 0,
      question:
        "CONTIENE LA W. Película del oeste americano.",
    },
    {
      letter: "x",
      answer: "xenófobia",
      status: 0,
      question:
        "CON LA X. Odio o antipatía hacia los extranjeros.",
    },
    {
      letter: "y",
      answer: "yodo",
      status: 0,
      question:
        "CONTIENE LA Y. Elemento químico de color oscuro que se encuentra en el suelo en forma de sales, así como en las algas y otros animales marinos.",
    },
    {
      letter: "z",
      answer: "zarzal",
      status: 0,
      question:
        "CON LA Z. Lugar donde hay muchas zarzas.",
    },
  ]
];
