export interface ArcadeDisc {
  id: string;
  title: string;
  tech: string;
  /** URL de la build web (itch.io, GitHub Pages...). null = solo escritorio. */
  embed: string | null;
  /** Enlace alternativo cuando no hay build web: repo, tráiler, página del proyecto. */
  link: string;
  linkLabel: string;
  /** Carátula del disco (PNG/JPG en /public/discs/). */
  cover: string;
}

export const arcadeDiscs: ArcadeDisc[] = [
  {
    id: "fluttedex",
    title: "Fluttedex",
    tech: "Flutter · Dart",
    embed: "https://pokedex-flutter.vercel.app/",
    link: "https://github.com/Toto-RR/Pokedex_Flutter",
    linkLabel: "Ver repositorio",
    cover: "/media/projects/pokedex-2024.webp",
  },
  {
    id: "nightmares",
    title: "Nightmares Of The Night",
    tech: "Unity · C# · Game jam",
    embed: null,
    link: "https://ericlr.itch.io/nightmares-of-the-night",
    linkLabel: "Ver en itch.io",
    cover: "/media/projects/nightmaresofthenight.webp",
  },
  {
    id: "citm",
    title: "CITM Fighters",
    tech: "Unity · Maya · C#",
    embed: null,
    link: "https://github.com/Toto-RR/CITM-FIGHTERS",
    linkLabel: "Ver repositorio",
    cover: "/media/projects/citmfighters.webp",
  },
  {
    id: "fsm",
    title: "Finite State Machine",
    tech: "Unity · IA · FSM",
    embed: null,
    link: "https://github.com/Toto-RR/AI-FiniteStatesMachine",
    linkLabel: "Ver repositorio",
    cover: "/media/projects/IA.webp",
  },
  {
    id: "dot",
    title: "Dragged Off Time",
    tech: "C++ · SDL2 · Box2D",
    embed: null,
    link: "https://francesctr4.github.io/Nexus-Studios/",
    linkLabel: "Ver web",
    cover: "/media/projects/DOTLogo.webp",
  },
];
