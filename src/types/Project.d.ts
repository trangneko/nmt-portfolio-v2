import type { ReactNode } from "react";

// Filter groups on the Works page
export type Category = "UI/UX" | "Web Design" | "Graphic Design" | "Coding";

// Japanese text for a project; any field left out falls back to the English one
export interface ProjectJa {
    title?: string;
    description?: string;
    role?: string;
    time?: string;
    tags?: string[];
}

export interface Project {
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