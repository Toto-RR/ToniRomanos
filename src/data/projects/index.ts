import type { Project } from "./types";

import { joinedNeoParty } from "./neoparty";
import { alienExtraction } from "./alienextraction";
import { pokedexFlutter } from "./pokedex_flutter";

export const PROJECTS: Project[] = [
  joinedNeoParty,
  alienExtraction,
  pokedexFlutter,
];

// Utilidad: buscar por slug (para /projects/[slug])
export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);