export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Stock Management Platform",
    period: "2026",
    type: "Aplicación web",
    description:
      "Desarrollo de una plataforma web para la trazabilidad de stock, solicitudes y flujos internos de empresa, incluyendo frontend, backend y sistema de datos.",
    highlights: [
      "Desarrollo completo del sistema con React, Node y PostgreSQL.",
      "Diseño de API y lógica de negocio para gestión de inventario.",
      "Implementación de sistema de solicitudes y flujo de validación.",
      "Despliegue y mantenimiento de la aplicación en entorno productivo.",
    ],
  },
  {
    role: "Unity Developer",
    company: "NeurekaLAB",
    period: "2024 - 2025",
    type: "Aplicación educativa / Desarrollo 2D",
    description:
      "Desarrollo y mantenimiento de una aplicación educativa en Unity, trabajando en lógica, flujos de interfaz, carga de datos y adaptación del producto a distintos perfiles de usuario.",
    highlights: [
      "Implementación de nuevas funcionalidades y mejoras de flujo.",
      "Refactorización de sistemas para hacer el proyecto más mantenible.",
      "Trabajo con Firebase y gestión de datos.",
    ],
  },
  {
    role: "Indie Game Developer",
    company: "Personal Projects",
    period: "2023 - Actualidad",
    type: "Unity · Prototipado · Gameplay Systems",
    description:
      "Desarrollo de prototipos y proyectos personales centrados en gameplay, sistemas interactivos, mandos personalizados y experimentación técnica con Unity y hardware.",
    highlights: [
      "Diseño e implementación de mecánicas y sistemas de juego.",
      "Desarrollo de prototipos propios con enfoque iterativo.",
      "Integración de hardware y controladores personalizados en proyectos interactivos.",
    ],
  },
];
