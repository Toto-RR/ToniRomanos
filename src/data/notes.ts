export interface Note {
  meta: string;
  title: string;
  body: string;
}

export const notesByLang: Record<"es" | "en", Note[]> = {
  es: [
    {
      meta: "Hardware",
      title: "Mandos propios para NeoParty",
      body: "Del modelo en Fusion 360 al firmware Arduino y la lectura de inputs en Unity.",
    },
    {
      meta: "Motores",
      title: "Un módulo de partículas en C++",
      body: "Cómo se estructura un sistema de partículas dentro de un motor hecho desde cero.",
    },
    {
      meta: "Web",
      title: "Trazabilidad de stock con Node y PostgreSQL",
      body: "Diseño de API, flujo de validación y decisiones de modelo de datos.",
    },
  ],
  en: [
    {
      meta: "Hardware",
      title: "Custom controllers for NeoParty",
      body: "From the Fusion 360 model to Arduino firmware and reading inputs in Unity.",
    },
    {
      meta: "Engines",
      title: "A particle module in C++",
      body: "How a particle system is structured inside an engine built from scratch.",
    },
    {
      meta: "Web",
      title: "Stock traceability with Node and PostgreSQL",
      body: "API design, validation flow and data-model decisions.",
    },
  ],
};
