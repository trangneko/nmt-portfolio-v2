import type { ReactNode } from "react";

export interface Project {
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