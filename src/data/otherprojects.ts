import Link from "../assets/icons/Link.astro";
import { TAGS } from "./tags";

export const otherProjects = [
  {
    title: "Nightmares Of The Night",
    description: `
    <p>Videojuego desarrollado en <strong>Unity</strong> para la <strong>7a Gran CITM Game Jam</strong> junto a 5 compañeros, con la temática <strong>'Sueños y Pesadillas'</strong>.</p>
    <p>En este proyecto fui el principal responsable del <strong>diseño</strong>, proponiendo la idea inicial de la historia y aportando elementos al <strong>gameplay</strong> para mejorar el <strong>game feel</strong> y el <strong>flujo de juego</strong>.</p>
    `,
    image: "/media/projects/nightmaresofthenight.webp",
    tags: [TAGS.UNITY, TAGS.CSHARP],
    links: {
      github: "https://github.com/ericlr1/7a-Gran-CITM-Game-Jam/",
      itchio: "https://ericlr.itch.io/nightmares-of-the-night",
    },
  },
  {
    title: "Dragged Off Time",
    description: `
    <p><strong>Action RPG</strong> con variantes <strong>roguelike</strong> desarrollado en <strong>C++</strong> usando <strong>SDL</strong>, <strong>Box2D</strong>, <strong>Tiled</strong> y <strong>Pugixml</strong>.</p>
    <p>En el proyecto me encargué principalmente del <strong>diseño de niveles y del mapa con Tiled</strong>, además de ser uno de los principales responsables del <strong>guión, historia y lore</strong>. También realicé <strong>la web</strong> y <strong>el tráiler</strong> completos, y apoyé puntualmente en tareas de programación.</p>
  `,
    image: "/media/projects/DOTLogo.webp",
    tags: [TAGS.CPP, TAGS.SDL, TAGS.HTML, TAGS.CSS],
    links: {
      web: "https://francesctr4.github.io/Nexus-Studios/",
      github: "https://github.com/francesctr4/Nexus-Studios",
      youtube: "https://www.youtube.com/watch?v=s5BYYPB9cho",
    },
  },
  {
    title: "Fluttedex",
    description: `
    <p>Aplicación desarrollada con <strong>Flutter</strong> que simula una <strong>Pokédex interactiva</strong>, consumiendo datos desde la <strong>PokeAPI</strong> para mostrar información detallada de cada Pokémon.</p>
    <p>En este proyecto me encargué de <strong>todo el desarrollo de la aplicación</strong>, desde el frontend hasta el backend.</p>
  `,
    image: "/media/projects/pokedex-2024.webp",
    tags: [TAGS.FLUTTER, TAGS.DART],
    links: {
      web: "https://pokedex-flutter.vercel.app/",
      github: "https://github.com/Toto-RR/Pokedex_Flutter",
    },
  },
  {
    title: "CITM Fighters",
    description: `<p><strong>Juego de combate con vista lateral</strong> para dos jugadores dónde el primero en golpear gana la ronda.</p>
      <p>En este proyecto me encargué de toda la lógica del combate, pero el foco residía en <strong>crear todas las animaciones necesarias para el gameplay</strong>.</p>
      `,
    image: "/media/projects/citmfighters.webp",
    tags: [TAGS.UNITY, TAGS.MAYA, TAGS.CSHARP],
    links: {
      github:"https://github.com/Toto-RR/CITM-FIGHTERS",
    },
  },
  {
    title: "Finite State Machine",
    description: `
    <p>Proyecto de <strong>Inteligencia Artificial</strong> desarrollado en <strong>Unity</strong>, donde una IA debe esconderse mientras otra IA la busca utilizando un sistema de <strong>Máquinas de Estado Finito (FSM)</strong>.</p>
    <p>El comportamiento de los agentes está estructurado mediante estados claramente definidos y transiciones controladas por condiciones del entorno.</p>
  `,
    image: "/media/projects/IA.webp",
    tags: [TAGS.UNITY, TAGS.CSHARP],
    links: { github: "https://github.com/Toto-RR/AI-FiniteStatesMachine" },
  },
];
