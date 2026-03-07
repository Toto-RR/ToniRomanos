import type { Project } from "./types";
import { TAGS } from "@/data/tags";

export const pokedexFlutter: Project = {
  slug: "pokedex-flutter",
  title: "POKÉDEX",
  description: `
    <p>Aplicación desarrollada con <strong>Flutter</strong> que simula una <strong>Pokédex interactiva</strong>, consumiendo datos en tiempo real desde la <strong>PokeAPI</strong> para mostrar información detallada de cada Pokémon.</p>
    <p>En este proyecto me encargué de <strong>todo el desarrollo de la aplicación</strong>, incluyendo la programación, la estructura de pantallas, la integración con la API y el diseño de la interfaz para presentar los datos de forma visual, clara y atractiva.</p>
    <p>🏆 Gracias a esta aplicación, obtuve un <strong>9.8 de nota final</strong> en la asignatura de <strong>Desarrollo de Aplicaciones Móviles</strong>.</p>
  `,
  github: "https://github.com/Toto-RR/Pokedex_Flutter",
  link: "https://pokedex-flutter.vercel.app/",
  image: "/projects/pokedex-2024.webp",
  tags: [TAGS.FLUTTER, TAGS.DART],
  detail: {
    explication: [
      "Pokédex es una aplicación móvil desarrollada con Flutter que consume la PokeAPI para mostrar información variada sobre los Pokémon, incluyendo datos visuales, estadísticas y características principales.",
      "El proyecto fue planteado con un enfoque tanto técnico como visual, buscando una experiencia fluida de navegación y una presentación atractiva de la información, similar a una Pokédex moderna e interactiva.",
      "Además del consumo de API y la gestión de datos, el proyecto supuso un trabajo completo de estructuración de pantallas, diseño de interfaz y organización del contenido dentro de una aplicación multiplataforma.",
    ],
    myRole: `
      <p>Mi rol en este proyecto fue el de <strong>desarrollador principal</strong>, encargándome del desarrollo completo de la aplicación.</p>

      <ul class="list-disc list-inside space-y-2 mt-4">
        <li><strong>Desarrollo completo en Flutter:</strong> Implementé toda la aplicación utilizando Flutter y Dart, organizando la arquitectura general del proyecto y la navegación entre pantallas.</li>

        <li><strong>Integración con PokeAPI:</strong> Me encargué de conectar la app con la API externa para obtener y mostrar la información de los Pokémon de forma dinámica.</li>

        <li><strong>Diseño de interfaz:</strong> Diseñé una UI visualmente atractiva y clara, pensada para facilitar la consulta de datos y reforzar la identidad visual del proyecto.</li>

        <li><strong>Gestión y presentación de datos:</strong> Organicé la información obtenida desde la API para mostrarla de manera estructurada, accesible y cómoda para el usuario.</li>
      </ul>

      <p class="mt-4">
        Este proyecto me permitió reforzar conocimientos en desarrollo móvil multiplataforma,
        consumo de APIs, diseño de interfaces y estructuración de aplicaciones completas con Flutter.
      </p>
    `,
    technologies: [TAGS.FLUTTER, TAGS.DART],
    images: ["/projects/pokedex_1.webp", "/projects/pokedex_2.webp"],
  },
  gallery: [
    {
      type: "image",
      src: "/projects/pokedex_1.webp",
      title: "Listado principal de Pokémon",
      description:
        "Pantalla principal de la aplicación mostrando el catálogo de Pokémon de forma visual e interactiva.",
    },
    {
      type: "image",
      src: "/projects/pokedex_2.webp",
      title: "Detalle de Pokémon",
      description:
        "Vista detallada con información individual de cada Pokémon obtenida dinámicamente desde la API.",
    },
    {
      type: "image",
      src: "/projects/pokedex-2024.webp",
      title: "Diseño general de la aplicación",
      description:
        "Vista general del proyecto, centrada en la presentación visual y la experiencia de usuario.",
    },
  ],
};