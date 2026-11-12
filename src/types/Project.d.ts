import type { ReactNode } from "react";

// Filter groups on the Works page
export type Category = "UI/UX" | "Landing Page Design" | "Graphic Design" | "Coding";

// Japanese text for a project; any field left out falls back to the English one
export interface ProjectJa {
    title?: string;
    description?: string;
    role?: string;
    time?: string;
    tags?: string[];
}

// Long-form case study shown on the work detail page
export type CaseStudyBlock =
  | { type: "p"; text: string }
  | { type: "list" | "numbered"; items: string[] }
  | { type: "labeled"; label: string; text: string } // "Problem.", "Decision.", ...
  | { type: "image"; src?: string; caption: string }; // skipped until `src` is set

export interface CaseStudy {
  note?: string; // e.g. the NDA notice
  overview: { label: string; value: string }[];
  sections: { title: string; blocks: CaseStudyBlock[] }[];
}

export interface Project {
    // Optional URL name; defaults to one made from the title
    slug?: string;
    caseStudy?: Record<"en" | "ja", CaseStudy>;
    ja?: ProjectJa;
    categories?: Category[];
    tags?: string[];
    title: string;
    description: string;
    role?: string;
    time: string;
    image: string;
    url?: string;
    skills: string[];
    hasModal?: boolean;
    modalContent?: ReactNode;
    pdf?: string;
  }