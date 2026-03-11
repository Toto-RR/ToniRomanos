const iconModules = import.meta.glob("../assets/icons/*.astro", {
  eager: true,
});

export const TAGS = Object.fromEntries(
  Object.entries(iconModules).map(([path, mod]) => {
    const fileName = path.split("/").pop()?.replace(".astro", "") ?? "";
    const key = fileName.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

    return [
      key,
      {
        name: (mod as any).displayName ?? fileName,
        icon: (mod as any).default,
        techStack: (mod as any).techStack ?? false,
      },
    ];
  })
);