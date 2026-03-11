/**
 * DATOS DE PÁGINAS DE PROYECTO
 *
 * Cada entrada genera una ruta /projects/[slug]
 * Edita o elimina las secciones que no necesites por proyecto:
 * - systems, process, challenges, learnings son todos opcionales
 * - Si dejas el array vacío ([]) esa sección no se renderiza
 */

export interface ProjectPage {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  year: string;
  duration: string;
  role: string;
  team: string;
  status: "Completado" | "En desarrollo" | "Prototipo";

  // Color de acento propio — cambia esto por proyecto
  accent: string;
  accentSoft: string;
  accentLight: string;

  cover: string;
  coverVideo?: string;

  tags: string[];
  description: string;

  gallery: { type: "image" | "video"; src: string; caption?: string }[];
  systems: { title: string; description: string; tags: string[] }[];
  process: { phase: string; title: string; body: string }[];
  challenges: { problem: string; solution: string; tag: string }[];
  learnings: string[];

  links: {
    github?: string;
    demo?: string;
    youtube?: string;
    itch?: string;
  };

  prev?: { title: string; slug: string };
  next?: { title: string; slug: string };
}

export const projectPages: ProjectPage[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // JOINED! NEOPARTY
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "neo-party",
    title: "Joined! NeoParty",
    subtitle: "Unity · Arduino · Alternative Hardware",
    tagline:
      "Un juego de fiesta con controladores físicos diseñados desde cero: hardware, firmware y gameplay unidos en un solo proyecto.",
    year: "2025",
    duration: "8 meses",
    role: "Gameplay Programmer · Hardware Designer",
    team: "Solo (TFG)",
    status: "Completado",

    accent: "var(--accent1)",
    accentSoft: "var(--accent1-soft)",
    accentLight: "var(--accent1-light)",

    cover: "/media/projects/NeoParty.webp",
    coverVideo: "/media/trailers/neoparty.mp4",

    tags: ["Unity", "C#", "Arduino", "Fusion 360", "Hardware", "Gameplay"],

    description: `
      <p>
        <strong>Joined! NeoParty</strong> es un videojuego de fiesta para múltiples jugadores desarrollado en Unity
        como Trabajo de Fin de Grado del grado en Diseño y Desarrollo de Videojuegos.
        Lo que lo diferencia: los controladores son físicos, diseñados en <strong>Fusion 360</strong>
        y programados desde cero con <strong>Arduino IDE</strong>.
      </p>
      <p>
        El objetivo era explorar hasta qué punto el hardware puede cambiar la experiencia de juego.
        En lugar de un mando estándar, cada jugador sostiene un controlador dedicado que responde
        a su mecánica específica — cambiando completamente la forma en que se percibe y juega cada minigame.
      </p>
      <p>
        🏆 El proyecto tuvo la oportunidad de estar presente en un stand del <strong>SAGA 2025</strong>,
        una feria catalana de videojuegos, gracias al apoyo de la Xarxa Accescat.
        También di una charla sobre el proceso de desarrollo del proyecto.
      </p>
    `,

    gallery: [
      {
        type: "video",
        src: "/media/trailers/neoparty.mp4",
        caption: "Tráiler oficial",
      },
      {
        type: "image",
        src: "/media/projects/neoparty/pres1.jpg",
        caption: "Momento de la charla",
      },
      {
        type: "image",
        src: "/media/projects/neoparty/pres2.jpg",
        caption: "Momento de la charla",
      },
      {
        type: "image",
        src: "/media/projects/neoparty/stand_close.jpg",
        caption: "Stand en SAGA 2025",
      },
      {
        type: "image",
        src: "/media/projects/neoparty/stand_2.jpg",
        caption: "Stand en SAGA 2025",
      },
      {
        type: "image",
        src: "/media/projects/neoparty/stand_people.jpg",
        caption: "Gente probando NeoParty",
      },
      {
        type: "image",
        src: "/media/projects/neoparty/stand_people2.jpg",
        caption: "Gente probando NeoParty",
      },
    ],

    systems: [
      {
        title: "Comunicación Arduino ↔ Unity",
        description:
          "Sistema de comunicación serial entre los controladores Arduino y Unity. Cada controlador envía eventos en tiempo real que Unity procesa y traduce a inputs de gameplay, con latencia mínima para no romper el game feel.",
        tags: ["C#", "Arduino IDE", "Serial Port", "Event System"],
      },
      {
        title: "Gestión de minigames",
        description:
          "Arquitectura modular que permite añadir minigames de forma independiente. Cada minigame es una escena autocontenida con su propia lógica, reglas y condición de victoria, cargada y descargada dinámicamente.",
        tags: ["ScriptableObjects", "Scene Management", "C#"],
      },
      {
        title: "Diseño de controladores",
        description:
          "Pipeline completo de hardware: modelado en Fusion 360, impresión 3D, ensamblaje de componentes electrónicos (botones, joysticks, sensores) y programación del firmware en Arduino IDE.",
        tags: ["Fusion 360", "Arduino IDE", "3D Printing"],
      },
    ],

    process: [
      {
        phase: "01 — Concepto",
        title: "La idea del hardware alternativo",
        body: "El punto de partida fue una pregunta: ¿puede el hardware cambiar fundamentalmente cómo se siente un juego? Empecé explorando referencias de juegos de fiesta con periféricos (Buzz! Juniors, 1-2-Switch) y decidí que el TFG tenía que demostrar eso de forma tangible.",
      },
      {
        phase: "02 — Prototipado hardware",
        title: "Primer controlador funcional",
        body: "Antes de tocar Unity, el reto era conseguir que un Arduino enviara datos a Unity de forma estable. El primer prototipo era una caja de cartón con un botón. Cuando funcionó la comunicación serial, supe que el proyecto era viable.",
      },
      {
        phase: "03 — Diseño de minigames",
        title: "Mecánicas adaptadas al hardware",
        body: "Cada minigame se diseñó pensando en qué podía hacer el controlador, no al revés. Eso implicó iterar mucho: algunas mecánicas que parecían obvias no eran divertidas con el hardware físico y hubo que descartarlas.",
      },
      {
        phase: "04 — SAGA 2025",
        title: "Test con público real",
        body: "Presentar el proyecto en SAGA fue el mayor test de usuario posible. Ver a gente que nunca había tocado el juego coger los controladores y entender cómo usarlos en segundos validó muchas de las decisiones de diseño.",
      },
    ],

    challenges: [
      {
        problem:
          "La comunicación serial entre Arduino y Unity introducía latencia variable que rompía el game feel en minigames de reacción rápida.",
        solution:
          "Implementé un buffer de eventos en el lado Unity y ajusté el baudrate y la frecuencia de polling hasta conseguir una latencia consistente por debajo de los 16ms — imperceptible para el jugador.",
        tag: "Hardware",
      },
      {
        problem:
          "Los controladores físicos diferían ligeramente entre unidades (tolerancias de impresión, resistencias de botones) lo que hacía que la misma acción se registrara diferente en cada mando.",
        solution:
          "Añadí una capa de calibración en el firmware de Arduino que normaliza los valores de entrada por controlador, y expuse esos parámetros al editor de Unity para ajuste fino.",
        tag: "Técnico",
      },
    ],

    learnings: [
      "Trabajar con hardware físico obliga a pensar en el fallo como algo normal: los componentes se rompen, las conexiones fallan. Diseñar con eso en mente desde el principio ahorra mucho tiempo.",
      "El game feel en juegos de party game es casi más importante que las reglas. Una mecánica mediocre con buen juice se siente bien; una mecánica brillante con mala respuesta se siente horrible.",
      "Presentar en SAGA me enseñó más sobre UX en 2 días que meses de testeo propio. El primer contacto de un jugador nuevo con el proyecto es irremplazable.",
    ],

    links: {
      github: "https://github.com/Toto-RR/Joined-NeoParty",
      youtube: "https://www.youtube.com/watch?v=VUa7hCppVwM",
    },

    next: { title: "RPG Combat System", slug: "/projects/rpg-game" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // RPG COMBAT SYSTEM
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "rpg-game",
    title: "RPG Combat System",
    subtitle: "Unity · RPG · Prototype",
    tagline:
      "Prototipo de combate por turnos inspirado en Expedition 33: sistemas de RPG clásico explorados desde la programación técnica.",
    year: "2026",
    duration: "1 Mes",
    role: "Indie Developer",
    team: "Solo",
    status: "En desarrollo",

    accent: "var(--accent3)",
    accentSoft: "var(--accent3-soft)",
    accentLight: "var(--accent3-light)",

    cover: "/media/projects/RPG_Game.png",
    coverVideo: "/media/projects/rpg/rpg_features.mp4",

    tags: ["Unity", "C#", "RPG", "VFX", "Turn-based"],

    description: `
      <p>
        Prototipo de juego de rol por turnos inspirado en <strong>Expedition 33</strong> y otros referentes del género.
        El objetivo no era hacer un juego completo, sino entender en profundidad
        cómo se construyen los sistemas que hacen que este tipo de combate se sienta satisfactorio.
      </p>
      <p>
        Más allá de la lógica de turnos, el proyecto sirvió para explorar áreas que normalmente
        quedan fuera del foco en proyectos de equipo: <strong>VFX, SFX, cinemáticas con Cinemachine</strong>
        y feedback visual que hace que cada acción tenga peso.
      </p>
      <p>
      Durante el proceso de planificación y el posterior desarrollo, siempre se tuvo en cuenta la <strong>modularidad y escalabilidad</strong> de cada
      elemento introducido en el juego, con la intención de replicar la <strong>creación de sistemas</strong> que puede tener un <strong>estudio profesional</strong>.
      </p>
      <p>
      Prácticamente <strong>TODO</strong> en este prototipo es <strong>editable y escalable</strong>, desde los diferentes ataques y habilidades hasta las cinemáticas de cada uno de ellos.
      </p>
    `,

    gallery: [
      {
        type: "video",
        src: "/media/projects/rpg/rpg_features.mp4",
        caption: "Showcase",
      },
      {
        type: "image",
        src: "/media/projects/rpg/pausemenu.png",
        caption: "Menú de Pausa",
      },
      {
        type: "image",
        src: "/media/projects/RPG_Game.png",
        caption: "UI de combate",
      },
    ],

    systems: [
      {
        title: "Turn Manager",
        description:
          "Gestor de turnos basado en una cola de prioridad con soporte para efectos de estado (veneno, aturdimiento, buffs) que modifican el orden y las acciones disponibles en cada turno.",
        tags: ["C#", "Priority Queue", "State Pattern"],
      },
      {
        title: "Sistema de habilidades",
        description:
          "Arquitectura basada en ScriptableObjects donde cada habilidad define su coste, efectos, animaciones y VFX asociados. Permite añadir nuevas habilidades sin tocar código.",
        tags: ["ScriptableObjects", "Command Pattern", "C#"],
      },
      {
        title: "Feedback visual y sonoro",
        description:
          "Cinemáticas de ataques y habilidades compuestas con Timeline, utilizando Cinemachine, VFX y SFX propios y de terceros.",
        tags: ["Timeline", "VFX", "Cinemachine", "Audio Mixer"],
      },
    ],

    process: [
      {
        phase: "01 — Referentes",
        title: "Desmontar Expedition 33",
        body: "Empecé jugando Expedition 33 con una libreta, anotando cada microdetalle del combate: cuándo vibra el mando, qué hace la cámara en cada ataque, cómo cambia la música. Ese análisis definió las prioridades del prototipo.",
      },
      {
        phase: "02 — Core loop",
        title: "El loop sin presentación",
        body: "Primero implementé toda la lógica de turnos con cubos de colores. Nada de arte, nada de efectos. Solo la mecánica desnuda para validar que funcionaba antes de añadir capas encima.",
      },
      {
        phase: "03 — Modularity",
        title: "Hacerlo 'Code Free'",
        body: "Mi idea principal era que cualquier elemento que ya existiese en el juego se pudiese crear sin abrir el editor de código. Por lo que cree herramientas dentro de Unity para lograrlo.",
      },
      {
        phase: "04 — Juice",
        title: "Hacerlo sentir bien",
        body: "Con la lógica estable, el foco pasó a VFX, SFX y cámara. Esa fase del proyecto es la que más tiempo lleva y la que más impacto tiene en cómo se percibe el combate.",
      },
    ],

    challenges: [
      {
        problem:
          "Los efectos de estado encadenados (un personaje envenado que aturde a otro en su turno de daño de veneno) creaban dependencias circulares difíciles de gestionar.",
        solution:
          "Separé la resolución de efectos en fases: primero se calculan todos los efectos del turno, luego se aplican en orden. Eso elimina las dependencias circulares y hace el sistema predecible.",
        tag: "Arquitectura",
      },
      {
        problem:
          "Hacer cinemáticas generales para cada personaje de manera que se respetasen las posiciones del atacante y del objetivo y la distancia entre ellos.",
        solution: `Creé un sistema que utiliza dos placeholder, 'caster' y 'target'. 
          Al realizar una acción, se leen los parametros de esta y se sitúan los placeholder en sus respectivos lugares, 
          se calcula la distancia entre ellos y se normaliza, luego, mediante Signals se llaman a los eventos correspondientes (MakeDamage, Heal, ApplyBuff, etc).
          <br>Por ejemplo: se ejecuta una habilidad -> sale el proyectil inicial -> cuando la distancia recorrida del proyectil es un 90% de la total -> crea una explosión en 'target'
        `,
        tag: "Arquitectura",
      },
    ],

    learnings: [
      "El feedback visual y sonoro no es polish — es una parte central del diseño de combate. Un ataque que no se siente poderoso no es un problema de arte, es un problema de diseño.",
      "Los ScriptableObjects son perfectos para datos de juego, pero hay que definir bien los límites de lo que hacen. Si empiezan a contener lógica, el sistema se complica rápido.",
      "Para un juego de gran escala, crear sistemas que permitan la rápida creación y variabilidad de elementos es crucial para poder dar variedad rápidamente",
    ],

    links: {
      github: "https://github.com/Toto-RR",
    },

    prev: { title: "Alien: Extraction", slug: "/projects/alien-extraction" },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ALIEN: EXTRACTION
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "alien-extraction",
    title: "Alien: Extraction",
    subtitle: "Ymir Engine · C++ · Team Project",
    tagline:
      "Un shooter de supervivencia construido sobre un motor propio en C++, valorado por ingenieros de Larian Studios.",
    year: "2024",
    duration: "4 meses",
    role: "Engine & Gameplay Programmer",
    team: "Clapcom Studios (equipo de X personas)",
    status: "Completado",

    accent: "var(--accent2)",
    accentSoft: "var(--accent2-soft)",
    accentLight: "var(--accent2-light)",
    cover: "/media/projects/alienextraction.webp",
    coverVideo: "/media/trailers/alienextraction.mp4",

    tags: ["C++", "Ymir Engine", "Particles", "Gameplay", "Motor propio"],

    description: `
      <p>
        Videojuego inspirado en la saga <strong>Alien</strong>, desarrollado por el estudio ficticio
        <strong>Clapcom Studios</strong> sobre un motor de juego propio llamado <strong>Ymir Engine</strong>,
        programado íntegramente en <strong>C++</strong>.
      </p>
      <p>
        Mi rol principal fue el <strong>módulo completo de partículas del motor</strong>:
        diseño de la arquitectura, implementación del emisor, sistema de pooling y los parámetros
        de configuración expuestos al editor. También trabajé en sistemas del jugador
        como el disparo y habilidades.
      </p>
      <p>
        🏆 El juego fue jugado y valorado por personal de <strong>Larian Studios</strong>,
        quienes destacaron el mérito técnico de desarrollar un motor funcional en solo 4 meses.
      </p>
    `,

    gallery: [
      {
        type: "video",
        src: "/media/trailers/alienextraction.mp4",
      },
      {
        type: "image",
        src: "/media/projects/alien/AcidicSpit.gif",
        caption: "Habilidad 'Acidic Spit'",
      },
      {
        type: "image",
        src: "/media/projects/alien/ParticleSystem.gif",
        caption: "Particle System en Ymir Engine",
      },
      {
        type: "image",
        src: "/media/projects/alien/SpitterDamage.gif",
        caption: "VFX al dañar a un 'Spitter'",
      },
    ],

    systems: [
      {
        title: "Módulo de partículas (Ymir Engine)",
        description:
          "Sistema de partículas construido desde cero en C++: emisores configurables, object pooling para evitar allocations en runtime, soporte para múltiples tipos de emitter (burst, continuous, radial) y parámetros editables desde el editor del motor.",
        tags: ["C++", "Object Pool", "Editor Integration"],
      },
      {
        title: "Sistema de disparo del jugador",
        description:
          "Mecánica de disparo con soporte para diferentes tipos de munición, raycasting para detección de impactos, feedback visual con partículas y sistema de recarga con animación sincronizada.",
        tags: ["C++", "Raycasting", "Animation Sync"],
      },
    ],

    process: [
      {
        phase: "01 — Motor primero",
        title: "Construir las herramientas antes que el juego",
        body: "Las primeras semanas fueron exclusivamente de motor: no había juego, solo había que hacer funcionar el renderer, el editor y los sistemas base. Es una forma de trabajar muy diferente a Unity y obliga a entender qué hay debajo de los motores modernos.",
      },
      {
        phase: "02 — Módulo de partículas",
        title: "De cero a sistema completo",
        body: "Empecé integrando todo en mi versión del motor, pero fue todo un reto integrarlo junto al resto de modulos. Semana a semana fui añadiendo: pooling, emisores, curvas de vida, colores, escala... El reto era que cada iteración tenía que ser estable porque otros sistemas del juego dependían de las partículas.",
      },
      {
        phase: "03 — Integración y polish",
        title: "Hacer que el juego se sienta cohesionado",
        body: "Las últimas semanas fueron de crear herramientas para que el equipo pudiese utilizar el sistema y de conectarlos: que el disparo generara las partículas correctas, que la IA respondiera bien a los eventos del jugador, que el rendimiento aguantara con todo activo.",
      },
    ],

    challenges: [
      {
        problem:
          "El sistema de partículas generaba garbage en runtime al instanciar y destruir partículas dinámicamente, causando stutters visibles en momentos de acción intensa.",
        solution:
          "Implementé un pool de partículas preasignado al inicio de la escena. Las partículas se 'reciclan' en lugar de destruirse, eliminando completamente las allocations en runtime y estabilizando el framerate.",
        tag: "Rendimiento",
      },
      {
        problem:
          "Coordinar el trabajo de varios programadores sobre el mismo motor sin romper los sistemas de los demás era caótico al principio.",
        solution:
          "Establecimos un sistema de ownership claro por módulo y usamos interfaces bien definidas para la comunicación entre sistemas. Reducir el acoplamiento fue la clave para poder trabajar en paralelo.",
        tag: "Trabajo en equipo",
      },
    ],

    learnings: [
      "Programar un motor propio, aunque sea uno simple, cambia completamente cómo ves Unity o Unreal. Entiendes por qué las cosas funcionan como funcionan.",
      "El object pooling no es una optimización prematura cuando sabes de antemano que vas a instanciar miles de objetos por segundo. Es el diseño correcto desde el principio.",
      "4 meses para un motor + juego es muy poco tiempo. La priorización constante — qué entra y qué se corta — es la habilidad más importante del equipo.",
    ],

    links: {
      github: "https://github.com/Clapcom-Studios/Alien-Extraction",
    },

    prev: { title: "Joined! NeoParty", slug: "/projects/neoparty" },
    next: { title: "RPG Game", slug: "/projects/rpg-game" },
  },
];
