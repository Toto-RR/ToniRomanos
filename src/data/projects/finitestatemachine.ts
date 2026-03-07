import type { Project } from "./types";
import { TAGS } from "@/data/tags";

export const finiteStateMachine: Project = { 
  slug: "finite-state-machine",
  title: "AI – FINITE STATE MACHINE",
  description: `
    <p>Proyecto de <strong>Inteligencia Artificial</strong> desarrollado en <strong>Unity</strong>, donde una IA debe esconderse mientras otra IA la busca utilizando un sistema de <strong>Máquinas de Estado Finito (FSM)</strong>.</p>
    <p>El comportamiento de los agentes está estructurado mediante estados claramente definidos y transiciones controladas por condiciones del entorno.</p>
  `,
  github: "https://github.com/Toto-RR/AI-FiniteStatesMachine",
  image: "/projects/IA.webp",
  tags: [TAGS.UNITY, TAGS.CSHARP],
  detail: {
    explication: [
      "El proyecto implementa un sistema de Máquinas de Estado Finito (FSM) para controlar el comportamiento de agentes autónomos.",
      "Una IA actúa como perseguidora mientras la otra debe analizar su entorno y cambiar de estado (patrulla, huida, ocultación, etc.) en función de estímulos y condiciones.",
      "El objetivo principal fue entender y aplicar correctamente la arquitectura basada en estados para estructurar comportamientos complejos de forma modular y escalable."
    ],
    myRole: `
      Fui responsable de diseñar e implementar la arquitectura de la Máquina de Estados en C# dentro de Unity.
      
      Definí los estados, transiciones y condiciones necesarias para que el comportamiento de las IAs fuera coherente y dinámico.
      
      Este proyecto me permitió profundizar en patrones de diseño aplicados a IA en videojuegos y estructurar código de forma limpia y mantenible.
    `,
    technologies: [TAGS.UNITY, TAGS.CSHARP],
    images: [
      "/projects/IA.webp"
    ],
  },
};