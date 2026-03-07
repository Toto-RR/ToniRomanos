import type { Project } from "./types";
import { TAGS } from "@/data/tags";

export const joinedNeoParty: Project = {
  slug: "joined-neoparty",
  title: "JOINED! NEOPARTY",
  href: "/projects/neoparty",
  description: `
    <p>Videojuego en <strong>Unity</strong> con controladores dedicados diseñados en <strong>Fusion 360</strong> y programados con <strong>Arduino IDE</strong>. Trabajo de Fin de Grado desarrollado para el grado en Diseño y Desarrollo de Videojuegos.</p>
    <p>En este proyecto <strong>me encargué de todo el desarrollo del juego</strong>, desde la programación hasta el diseño de los controladores físicos, incluyendo el modelado 3D y la integración de ambos aspectos para crear una experiencia de juego única.</p>
    <p>🏆 <strong>Joined! NeoParty</strong> tuvo la oportunidad de estar presente en un stand del <strong>SAGA 2025</strong>, una feria catalana de videojuegos, gracias al apoyo de la <strong>Xarxa Accescat</strong>. Además, tuve la oportunidad de dar una charla acerca del desarrollo del proyecto.</p>
  `,
  github: "https://github.com/Toto-RR/Joined-NeoParty",
  youtubeChannel: "https://www.youtube.com/@JoinedEntertainment",
  image: "/projects/NeoParty.webp",
  trailer: "/videos/neoparty/NeoParty_Trailer.mp4",
  tags: [TAGS.UNITY, TAGS.CSHARP, TAGS.FUSION, TAGS.ARDUINO],

  detail: {
    explication: [
      "Joined! NeoParty es un videojuego de fiesta multijugador local desarrollado en <strong>Unity</strong>, diseñado para ser jugado con <strong>controladores físicos personalizados</strong>. El juego se centra en una serie de minijuegos competitivos y cooperativos que requieren coordinación, rapidez y estrategia entre los jugadores.",

      "El desarrollo del juego implicó la creación de distintos minijuegos, cada uno con su propia mecánica y estilo visual. Además, diseñé y fabriqué los mandos físicos utilizando <strong>Fusion 360</strong> para el diseño y <strong>Arduino IDE</strong> para la programación, permitiendo una interacción más inmersiva y tangible.",

      "Gracias a este proyecto tuve la oportunidad de estar presente en el <strong>SAGA 2025</strong>, de la mano de <strong>Xarxa Accescat</strong>. En esta feria conté con un stand para mostrar el videojuego al público y también pude dar una charla abierta explicando el proceso de desarrollo.",

      "Sin duda, este ha sido el <strong>proyecto más ambicioso</strong> que he desarrollado hasta ahora y el que más se acerca a una experiencia real de creación de un videojuego indie completo, tanto por la parte técnica como por la exposición pública y la validación con jugadores."
    ],

    myRole: `
      <p>En este proyecto fui el <strong>responsable principal de todo el desarrollo</strong>.</p>
      <ul>
        <li><strong>Programación del videojuego:</strong> lógica general, minijuegos, flujo de partida e integración de sistemas.</li>
        <li><strong>Diseño de la experiencia:</strong> planteamiento de las mecánicas, estructura multijugador y enfoque party game.</li>
        <li><strong>Desarrollo del hardware:</strong> diseño, prototipado y fabricación de los controladores físicos personalizados.</li>
        <li><strong>Integración hardware-software:</strong> conexión de los mandos con el juego para conseguir una experiencia funcional y coherente.</li>
        <li><strong>Presentación pública:</strong> preparación de materiales, demo jugable y explicación del proyecto en feria.</li>
      </ul>
      <p>Fue un proyecto especialmente importante para mí porque me permitió unir <strong>desarrollo de videojuegos, diseño de producto, prototipado físico y presentación real ante jugadores</strong> dentro de una misma experiencia.</p>
    `,

    recognitions: [
      "Proyecto expuesto en un stand del SAGA 2025.",
      "Participación en feria gracias al apoyo de Xarxa Accescat.",
      "Presentación pública del proceso de desarrollo mediante una charla abierta."
    ],

    technologies: [TAGS.UNITY, TAGS.CSHARP, TAGS.FUSION, TAGS.ARDUINO],

    codeSnippets: [
      {
        title: "Ejemplo de unión entre input y acción jugable",
        language: "csharp",
        description: "Fragmento representativo del tipo de lógica que utilicé para conectar entradas del jugador con acciones dentro del juego.",
        code: `public void OnAction(InputAction.CallbackContext context)
{
    if (!context.performed) return;

    ExecutePlayerAction();
}`
      }
    ]
  },

  gallery: [
    {
      type: "image",
      src: "/videos/neoparty/stand1.jpg",
      title: "Stand en SAGA",
      description: "Espacio de exposición del proyecto durante el evento."
    },
    {
      type: "image",
      src: "/videos/neoparty/stand2.jpg",
      title: "Zona de juego",
      description: "Vista del montaje del stand y de la demo disponible para el público."
    },
    {
      type: "image",
      src: "/videos/neoparty/pres1.jpg",
      title: "Charla del proyecto",
      description: "Presentación pública explicando el desarrollo de Joined! NeoParty."
    },
    {
      type: "image",
      src: "/videos/neoparty/pres2.jpg",
      title: "Ponencia",
      description: "Otro momento de la charla y exposición del proceso de trabajo."
    },
    {
      type: "image",
      src: "/videos/neoparty/gente1.jpg",
      title: "Jugadores probando la demo",
      description: "Asistentes interactuando directamente con el videojuego."
    },
    {
      type: "image",
      src: "/videos/neoparty/gente2.jpg",
      title: "Testeo en evento",
      description: "Más pruebas del proyecto con público real."
    },
    {
      type: "video",
      src: "/videos/neoparty/NeoParty_Trailer.mp4",
      title: "Trailer oficial",
      description: "Vídeo de presentación del proyecto."
    }
  ]
};