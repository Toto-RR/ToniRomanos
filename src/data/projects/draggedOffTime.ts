import type { Project } from "./types";
import { TAGS } from "@/data/tags";

export const draggedOffTime: Project = {
  slug: "dragged-off-time",
  title: "DRAGGED OFF TIME",
  description: `
    <p><strong>Action RPG</strong> con variantes <strong>roguelike</strong> desarrollado en <strong>C++</strong> usando <strong>SDL</strong>, <strong>Box2D</strong>, <strong>Tiled</strong> y <strong>Pugixml</strong>.</p>
    <p>El juego plantea el viaje de <strong>Kleos</strong>, un estudiante universitario que acaba atrapado en un mundo virtual y debe sobrevivir recorriendo escenarios de distintas épocas para poder volver al mundo real.</p>
    <p>En el proyecto me encargué principalmente del <strong>diseño de niveles y del mapa con Tiled</strong>, además de ser uno de los principales responsables del <strong>guión, historia y lore</strong>. También realicé <strong>la web</strong> y <strong>el tráiler</strong> completos, y apoyé puntualmente en tareas de programación.</p>
  `,
  github: "https://github.com/francesctr4/Nexus-Studios",
  youtubeChannel: "https://www.youtube.com/@nexusstudios2023",
  youtubeVideoId:"s5BYYPB9cho",
  image: "/projects/DOTLogo.webp",
  tags: [TAGS.CPP, /*TAGS.SDL, TAGS.BOX2D, TAGS.TILED, TAGS.PUGIXML,*/ TAGS.HTML, TAGS.CSS],
  detail: {
    explication: [
      "Dragged Off Time es un Action RPG con estructura de progreso por escenarios, ambientado en distintas épocas y con un componente roguelike en la forma de afrontar combates y avance por mazmorras.",
      "El proyecto se desarrolló en C++ con SDL y Box2D, usando Tiled para la construcción de mapas y Pugixml para el manejo de datos. Además, se creó una web de presentación del juego y un tráiler para comunicar sus puntos fuertes.",
      "La narrativa acompaña el gameplay mediante un viaje por diferentes periodos, reforzando el sentido de exploración y descubrimiento del mundo, su trasfondo y el objetivo final del protagonista."
    ],
    myRole: `
      Mi aportación se centró en tres áreas clave: diseño de niveles, narrativa y comunicación del proyecto.
      
      - Level Design: construí el mapa y la distribución de niveles usando Tiled, trabajando el ritmo, la lectura del espacio y la coherencia entre zonas y progresión.
      - Narrativa: fui uno de los principales responsables del guión e historia, proponiendo y desarrollando ideas que acabaron formando parte del lore y la estructura narrativa final.
      - Presentación: realicé por completo la web oficial del proyecto y el tráiler, asegurando que el juego se presentara de forma clara y atractiva.
      
      Además, apoyé en partes concretas del código cuando fue necesario, colaborando con el equipo para integrar contenido y resolver necesidades puntuales.
    `,
    technologies: [TAGS.CPP, /*TAGS.SDL, TAGS.BOX2D, TAGS.TILED, TAGS.PUGIXML,*/ TAGS.HTML, TAGS.CSS],
    images: [
      "/projects/DraggedOffTime.webp",
      "/projects/DraggedOffTime_1.webp",
      "/projects/DraggedOffTime_2.webp"
    ],
  },
};