import type { Project } from "./types";
import { TAGS } from "@/data/tags";

export const alienExtraction: Project = {
  slug: "alien-extraction",
  title: "ALIEN: EXTRACTION",
  description: `
    <p>Videojuego inspirado en la saga <strong>Alien</strong>, desarrollado por el estudio ficticio <strong>Clapcom Studios</strong> utilizando un motor propio llamado <strong>Ymir Engine</strong>, programado en <strong>C++</strong>.</p>
    <p>En este proyecto fui uno de los principales programadores, encargándome del <strong>módulo completo de partículas del motor</strong>, además de trabajar en sistemas del jugador como el disparo y habilidades.</p>
    <p>🏆 <strong>Alien: Extraction</strong> fue jugado y valorado por personal de <strong>Larian Studios</strong>, quienes destacaron la dificultad y mérito de desarrollar un motor propio funcional en tan solo 4 meses.</p>
  `,
  link: "https://clapcom-studios.github.io/Website/index.html",
  github: "https://github.com/Clapcom-Studios/Alien-Extraction",
  image: "/projects/alienextraction.webp",
  youtubeVideoId: "8LsSLKn95OM",
  tags: [TAGS.CPP, TAGS.YMIR],
  detail: {
    explication: [
      "Alien: Extraction es un proyecto académico ambicioso desarrollado íntegramente sobre un motor propio (Ymir Engine) en C++, lo que implicó trabajar a bajo nivel tanto en arquitectura como en herramientas internas.",
      "El juego combina mecánicas de disparo, habilidades especiales y una ambientación inspirada en la saga Alien, apoyándose en un sistema de partículas personalizado para reforzar la atmósfera y el impacto visual.",
      "El desarrollo del motor y del juego se realizó en solo 4 meses, lo que supuso un reto técnico importante en términos de estabilidad, rendimiento y herramientas internas.",
    ],
    myRole: `
      <p>Mi rol principal fue como <strong>Programmer</strong> dentro del equipo.</p>

      <ul class="list-disc list-inside space-y-2 mt-4">
        <li><strong>Desarrollo del módulo de partículas:</strong> Diseñé e implementé completamente el sistema de partículas del motor, incluyendo arquitectura interna, scripting y herramientas para el equipo.</li>

        <li><strong>Integración de VFX:</strong> Implementé la mayoría de los efectos visuales del juego:
          <ul class="list-disc list-inside ml-6 mt-2">
            <li>VFX del jugador</li>
            <li>VFX de armas</li>
            <li>VFX de enemigos</li>
            <li>Habilidades como "Acidic Spit"</li>
          </ul>
        </li>

        <li><strong>Gameplay del jugador:</strong> Trabajé en las primeras versiones del sistema de disparo y habilidades, refinándolas progresivamente.</li>

        <li><strong>Web:</strong> Diseñé y desarrollé completamente la sección “About Us” del proyecto.</li>
      </ul>

      <p class="mt-4">
        Este proyecto me permitió profundizar en sistemas de partículas, arquitectura de motor gráfico,
        integración arte-programación y desarrollo web en un entorno de motor propio.
      </p>
    `,
    technologies: [TAGS.CPP, TAGS.YMIR],
    images: ["/projects/alien_1.webp", "/projects/alien_2.webp"],
  },
  gallery: [
    {
      type: "image",
      src: "/videos/alien/ParticleSystem.gif",
      title: "Implementación del Modulo de Partículas",
      description:
        "Sistema de partículas desarrollado íntegramente en el motor.",
    },
    {
      type: "image",
      src: "/videos/alien/AcidicSpit.gif",
      title: "VFX Habilidad - Acidic Spit",
      description: "Efectos visuales con partículas para la habilidad Acidic Spit.",
    },
    {
      type: "youtube",
      src: "8LsSLKn95OM",
      title: "Gameplay Trailer",
      description: "Trailer oficial del proyecto.",
    },
  ],
};
