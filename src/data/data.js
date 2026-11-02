// ── Portadas de la home: fotos atmosféricas (en B/N por CSS), no capturas de UI ──
// Fundamental: foto del propio catálogo (Cloudinary del proyecto)
// Synapses, CourtVision, GRIT: Unsplash (licencia Unsplash)
import fundamentalCover from "../images/projects/fundamental/cover.webp";
import synapsesCover from "../images/projects/synapses/cover.webp";
import courtvisionCover from "../images/projects/courtvision/cover.webp";
import gritCover from "../images/projects/grit/cover.webp";

/*
 * Cada proyecto de la home. Al pulsarlo se abre la demo (si existe) o el repositorio.
 *  slug        → identificador único
 *  title       → título gigante de la home
 *  stackLabel  → texto corto de la fila STACK
 *  typeKey     → clave de traducción del tipo (LanguageContext)
 *  statusKey   → clave de traducción del estado (LanguageContext)
 *  year
 *  cover       → foto atmosférica de portada (no captura)
 *  demo, repo  → enlaces externos (demo opcional)
 *  draft: true → no se muestra
 */
export const projects = [
  {
    slug: "fundamental",
    title: "Fundamental",
    stackLabel: "Astro & Supabase",
    typeKey: "catalogoWeb",
    statusKey: "enDesarrollo", // CONFIRMAR
    year: "2026",
    cover: fundamentalCover,
    demo: "https://fundamental-gold.vercel.app",
    repo: "https://github.com/DevRodrigoPdp/Fundamental",
  },
  {
    slug: "synapses",
    title: "Synapses",
    stackLabel: "React",
    typeKey: "eCommerce",
    statusKey: "enDesarrollo",
    year: "2025",
    cover: synapsesCover,
    demo: "https://synapses-eta.vercel.app",
    repo: "https://github.com/DevRodrigoPdp/Synapses",
  },
  {
    slug: "courtvision",
    title: "CourtVision",
    stackLabel: "Kotlin & Firebase",
    typeKey: "appAndroid",
    statusKey: "completado",
    year: "2024",
    cover: courtvisionCover,
    demo: null,
    repo: "https://github.com/DevRodrigoPdp/courtvision-degree",
  },
  {
    slug: "grit",
    title: "GRIT",
    stackLabel: "Angular & Tailwind",
    typeKey: "plataformaWeb",
    statusKey: "enDesarrollo", // CONFIRMAR
    year: "2026",
    cover: gritCover,
    demo: "https://frontend-rho-two-49.vercel.app",
    repo: "https://github.com/DevRodrigoPdp/GRIT",
  },
];

/** Proyectos visibles en la web (sin borradores). */
export const publishedProjects = projects.filter((p) => !p.draft);
