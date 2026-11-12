import type { Project } from "../types/Project";
import { formatPeriod, type Lang } from "../hooks/useLang";
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

// Japanese names for the tags used in projects.ts
const tagJa: Record<string, string> = {
  Personal: "個人制作",
  Development: "開発",
  Hobby: "趣味",
  "Web Design": "Webデザイン",
  "Part-time work": "アルバイト",
  "School Work": "学校課題",
  "School work": "学校課題",
  "Team Work": "チーム制作",
  "Product Design": "プロダクトデザイン",
  "Graphic Design": "グラフィックデザイン",
  "Icon Design": "アイコンデザイン",
  Typography: "タイポグラフィ",
};

// "2 weeks in 4/2024" -> "2024年4月（2週間）"; "6/2024 - 1/2025" -> "2024年6月 - 2025年1月"
function periodJa(time: string): string {
  const m = time.match(/^(\d+) (day|week)s? in (\d{1,2}\/\d{4})$/);
  if (m) return `${formatPeriod(m[3], "ja", "")}（${m[1]}${m[2] === "day" ? "日間" : "週間"}）`;
  return formatPeriod(time, "ja", "");
}

// Text to show for the current language. Title, description and role come from
// the optional `ja` block (English fallback); tags and period are converted automatically.
export function localized(w: Work, lang: Lang) {
  if (lang === "en") return { title: w.title, description: w.description, role: w.role, time: w.time, tags: w.tags };
  const ja = w.ja;
  return {
    title: ja?.title ?? w.title,
    description: ja?.description ?? w.description,
    role: ja?.role ?? w.role,
    time: ja?.time ?? periodJa(w.time),
    tags: ja?.tags ?? w.tags?.map((x) => tagJa[x] ?? x),
  };
}
