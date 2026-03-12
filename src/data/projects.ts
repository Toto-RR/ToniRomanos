import { TAGS } from "./tags";

export const featuredProjects = [
  {
    slug: "neo-party",
    title: "Joined! NeoParty",
    subtitle: "Unity · Arduino · Alternative Hardware",
    description: `
      <p>Videojuego en <strong>Unity</strong> con controladores dedicados diseñados en <strong>Fusion 360</strong> y programados con <strong>Arduino IDE</strong>. Trabajo de Fin de Grado desarrollado para el grado en Diseño y Desarrollo de Videojuegos.</p>
      <br>
      <p>🏆 <strong>Joined! NeoParty</strong> tuvo la oportunidad de estar presente en un stand del <strong>SAGA 2025</strong>, una feria catalana de videojuegos, gracias al apoyo de la <strong>Xarxa Accescat</strong>. Además, tuve la oportunidad de dar una charla acerca del desarrollo del proyecto.</p>
    `,
    media: "/media/projects/NeoParty.webp",
    mediaType: "video",
    video: "/media/trailers/neoparty.mp4",
    tags: [
      TAGS.UNITY,
      TAGS.CSHARP,
      TAGS.FUSION360,
      TAGS.ARDUINO
    ],
    links: {
      github: "https://github.com/Toto-RR/Joined-NeoParty",
      demo: "",
      youtube: "https://www.youtube.com/watch?v=VUa7hCppVwM",
      itchio: "",
    },
  },

  
  {
    slug: "alien-extraction",
    title: "Alien: Extraction",
    subtitle: "Ymir Engine · C++ · Team Project",
    description: `
    <p>Videojuego inspirado en la saga <strong>Alien</strong>, desarrollado por el estudio ficticio <strong>Clapcom Studios</strong> utilizando un motor propio llamado <strong>Ymir Engine</strong>, programado en <strong>C++</strong>.</p>
    <br>
    <p>Como uno de los principales programadores, me encargué del <strong>módulo completo de partículas del motor</strong>, además de trabajar en sistemas del jugador como el disparo y habilidades.</p>
    <br>
    <p>🏆 Alien: Extraction fue jugado y valorado por personal de <strong>Larian Studios</strong>, quienes destacaron la dificultad y mérito de desarrollar un motor propio funcional en tan solo 4 meses.</p>
    `,
    media: "/media/projects/alienextraction.webp",
    mediaType: "video",
    video: "/media/trailers/alienextraction.mp4",
    tags: [
      TAGS.CPP,
      TAGS.YMIRENGINE,
    ],
    links: {
      github: "https://github.com/Clapcom-Studios/Alien-Extraction",
    },
  },
  
  {
    slug: "rpg-game",
    title: "RPG Combat System",
    subtitle: "Unity · RPG · Prototype",
    description: `
      <p>Prototipo de juego inspirado en <strong>Expedition 33</strong> y otros juegos del estilo, donde se exploran las mecánicas más típicas de los <strong>juegos con combate por turnos</strong>.</p>
      <br>
      <p>Además de los sistemas clásicos de un RPG, este proyecto permitió profundizar en áreas como <strong>VFX, SFX, cinemáticas</strong> y otros elementos muy utilizados por los referentes del género.</p>
    `,
    media: "/media/projects/RPG_Game.png",
    mediaType: "image",
    video: "",
    tags: [
      TAGS.UNITY,
      TAGS.CSHARP,
    ],
    links: {
      github: "https://github.com/Toto-RR",
    },
  },
  
];