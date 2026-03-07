import type { Project } from "./types";
import { TAGS } from "@/data/tags";

export const nightmaresOfTheNight: Project = {
  slug: "nightmares-of-the-night",
  title: "NIGHTMARES OF THE NIGHT",
  description: `
    <p>Videojuego desarrollado en <strong>Unity</strong> para la <strong>7a Gran CITM Game Jam</strong> junto a 5 compañeros, con la temática <strong>'Sueños y Pesadillas'</strong>.</p>
    <p>En este proyecto fui el principal responsable del <strong>diseño</strong>, proponiendo la idea inicial de la historia y aportando elementos al <strong>gameplay</strong> para mejorar el <strong>game feel</strong> y el <strong>flujo de juego</strong>.</p>
  `,
  github: "https://github.com/ericlr1/7a-Gran-CITM-Game-Jam",
  link: "https://ericlr.itch.io/nightmares-of-the-night",
  trailer:"/videos/Nightmares_of_the_night.mp4",
  image: "/projects/nightmaresofthenight.webp",
  tags: [TAGS.UNITY, TAGS.CSHARP],
  detail: {
    explication: [
      "Nightmares of the Night es un proyecto de game jam desarrollado en Unity con un equipo de 6 personas, construido alrededor de la temática 'Sueños y Pesadillas'.",
      "El objetivo del proyecto fue crear una experiencia corta pero intensa, priorizando la claridad de la mecánica principal y un ritmo de juego que mantuviera la tensión propia del tema.",
      "Se trabajó especialmente el game feel mediante decisiones de diseño orientadas a reforzar el feedback del jugador y la sensación de progresión dentro de una experiencia de duración contenida."
    ],
    myRole: `
      Mi rol fue principalmente de Game Designer. Propuse la idea inicial de la historia y definí la dirección del diseño para que el juego tuviera un concepto claro desde el primer momento.
      Durante el desarrollo aporté mejoras al gameplay enfocadas en el game feel y en mantener un flujo de juego sólido, especialmente importante en el contexto de una game jam donde el tiempo es limitado.
      Además, colaboré con el equipo para asegurar que las decisiones de diseño se integraran correctamente en la implementación y el resultado final.
    `,
    technologies: [TAGS.UNITY, TAGS.CSHARP],
    images: [
      "/projects/nightmaresofthenight.webp"
    ],
  },
};