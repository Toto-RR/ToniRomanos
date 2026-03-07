import type { Project } from "./types";
import { TAGS } from "@/data/tags";

export const aboutUsSection: Project = {
  slug: "aboutus-section",
  title: "ALIEN: EXTRACTION – ABOUT US SECTION",
  description: `
    <p>Desarrollo completo del apartado <strong>'About Us'</strong> para la web oficial del proyecto <strong>Alien: Extraction</strong>.</p>
    <p>Esta sección presenta a los integrantes del equipo, mostrando sus roles y aportaciones dentro del proyecto mediante una estructura clara, visual y organizada.</p>
    <p>El desarrollo se realizó utilizando <strong>HTML</strong> y <strong>CSS</strong>, cuidando la maquetación, jerarquía visual y coherencia estética con el resto del sitio web.</p>
  `,
  link: "https://clapcom-studios.github.io/Website/aboutus.html",
  image: "/projects/AboutUs.webp",
  tags: [TAGS.HTML, TAGS.CSS],
  detail: {
    explication: [
      "La sección 'About Us' fue diseñada para comunicar de forma clara y profesional quiénes formaban parte del equipo de desarrollo de Alien: Extraction y qué responsabilidades tenía cada miembro.",
      "Se trabajó la estructura del contenido para que fuera fácilmente escaneable, con una jerarquía visual bien definida y una distribución equilibrada de los elementos en pantalla.",
      "El diseño mantiene coherencia con la identidad visual del proyecto, reforzando la imagen de equipo y la presentación profesional del estudio."
    ],
    myRole: `
      En este proyecto fui responsable del desarrollo completo de esta sección de la página web. Me encargué de la maquetación en HTML y del diseño visual mediante CSS, asegurando una estructura clara, responsive y alineada con la identidad del proyecto. 
      También definí la organización del contenido y la forma en la que se presentaban los roles del equipo para mejorar la claridad y la experiencia de usuario.
    `,
    technologies: [TAGS.HTML, TAGS.CSS],
    images: [
      "/projects/AboutUs.webp"
    ],
  },
};