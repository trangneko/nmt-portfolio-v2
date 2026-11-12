import type { Project } from "../types/Project";
import { devProjects, graphicDesigns, webDesigns } from "./projects";

export interface Work extends Project {
  slug: string;
  year: string;
}

const ascii = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// One entry per title (some projects are listed in two categories).
// Slugs are URL-safe; Japanese-only titles fall back to "work-<n>".
const unique: Project[] = [...webDesigns, ...devProjects, ...graphicDesigns].filter(
  (p, i, arr) => arr.findIndex((q) => q.title === p.title) === i
);

export const works: Work[] = unique.map((p, i) => {
  const base = ascii(p.title) || "work";
  return {
    ...p,
    slug: `${base}-${i + 1}`,
    year: p.time.match(/\d{4}/)?.[0] ?? "",
  };
});

export const findWork = (slug?: string) => works.find((w) => w.slug === slug);

// Landing page picks: projects with a local image (always loads) come first
export const featuredWorks = [...works]
  .sort((a, b) => Number(b.image.startsWith("/images/")) - Number(a.image.startsWith("/images/")))
  .slice(0, 3);
