import type { Project } from "./types";
import { TAGS } from "@/data/tags";

export const citmFighters: Project = {
  slug: "citm-fighters",
  title: "CITM FIGHTERS",
  description: `
    <p>Juego de lucha en vista lateral desarrollado en <strong>Unity</strong>, utilizando animaciones creadas a mano en <strong>Maya</strong>.</p>
    <p>El proyecto recrea la estructura clásica de un fighting game 1v1, implementando sistema de combate, animaciones sincronizadas y detección de impactos.</p>
  `,
  github: "https://github.com/Toto-RR/CITM-FIGHTERS",
  image: "/projects/citmfigthers.webp",
  tags: [TAGS.UNITY, TAGS.CSHARP, TAGS.MAYA],
  detail: {
    explication: [
      "CITM Fighters es un juego de lucha en vista lateral inspirado en los clásicos arcade, centrado en el combate entre dos personajes con animaciones y sistema de colisiones.",
      "El proyecto trabaja mecánicas fundamentales como movimiento lateral, ataques, detección de impactos y sincronización entre animación y lógica de combate.",
      "Se utilizaron modelos externos como base visual y se desarrollaron animaciones personalizadas en Maya para dotar al combate de mayor personalidad y fluidez."
    ],
    myRole: `
      En este proyecto trabajé en la implementación del sistema de combate dentro de Unity, incluyendo la lógica de ataques, detección de colisiones y control del personaje.
      
      También desarrollé animaciones manualmente en Maya e integré correctamente los clips dentro del Animator de Unity, asegurando coherencia entre animación y gameplay.
      
      Este proyecto me permitió profundizar en sistemas de combate, gestión de estados de animación y sincronización entre hitboxes y animaciones.
    `,
    technologies: [TAGS.UNITY, TAGS.CSHARP, TAGS.MAYA],
    images: [
      "/projects/citmfigthers.webp"
    ],
  },
};