// Certificates and skills from the latest resume (EN and JA versions).
// Dates use "month/year" and are formatted per language by the About page.
interface Bilingual {
  en: string;
  ja: string;
}

export const certificates: { date: string; title: Bilingual }[] = [
  { date: "11/2024", title: { en: "Google UX Design Professional Certificate", ja: "Google UX Design Professional Certificate（Coursera）" } },
  { date: "8/2024", title: { en: "Google AI Essentials", ja: "Google AI Essentials（Coursera）" } },
  { date: "7/2024", title: { en: "JLPT N1", ja: "日本語能力試験（JLPT）N1 合格" } },
  { date: "4/2021", title: { en: "TOEIC L&R, score: 910", ja: "TOEIC Listening & Reading Test 910点" } },
  { date: "11/2020", title: { en: "TOEIC S&W, score: 290", ja: "TOEIC Speaking & Writing Test 290点" } },
  { date: "11/2018", title: { en: "MOS Specialist (Excel)", ja: "Microsoft Office Specialist（Excel）" } },
];

// Tool names stay in English in both languages
export const tools: string[] = [
  "Figma", "Figma Make", "Figma agent", "Claude (MCP)", "v0", "Gemini", "STUDIO Design",
  "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "HTML/CSS", "JavaScript",
  "React.js", "Jira", "Asana", "Slack", "Git",
];

export const skills: Bilingual[] = [
  { en: "Design Systems", ja: "デザインシステム" },
  { en: "AI-assisted Prototyping", ja: "AIを活用したプロトタイピング" },
  { en: "Wireframing", ja: "ワイヤーフレーム作成" },
  { en: "User Research", ja: "ユーザーリサーチ" },
  { en: "Usability Testing", ja: "ユーザビリティテスト" },
  { en: "Journey Mapping", ja: "カスタマージャーニーマップ" },
  { en: "Personas", ja: "ペルソナ" },
  { en: "Storyboarding", ja: "ストーリーボード" },
  { en: "Affinity Diagrams", ja: "アフィニティダイアグラム" },
  { en: "Workshopping", ja: "ワークショップ運営" },
  { en: "Information Architecture", ja: "情報設計" },
];
