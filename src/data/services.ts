// "Services" = what I do and the tools I use (no pricing).
// icon is optional: a tool without a logo file shows as a text-only chip.
export interface Tool {
  name: string;
  icon?: string;
}

interface Bilingual {
  en: string;
  ja: string;
}

export interface Service {
  title: Bilingual;
  blurb: Bilingual;
  tools: Tool[];
}

export const services: Service[] = [
  {
    title: { en: "UI/UX Design", ja: "UI/UXデザイン" },
    blurb: {
      en: "Research, wireframes and polished interfaces that feel clear and friendly.",
      ja: "リサーチやワイヤーフレームから、わかりやすくて親しみやすい画面デザインまで担当します。",
    },
    tools: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Adobe XD", icon: "adobe-xd.svg" },
    ],
  },
  {
    title: { en: "Web Development", ja: "Web開発" },
    blurb: {
      en: "Responsive front-end builds and full-stack apps, from design handoff to production.",
      ja: "デザインを受け取って公開するところまで、レスポンシブなフロントエンドからフルスタックのアプリまで作ります。",
    },
    tools: [
      { name: "HTML", icon: "html-5.svg" },
      { name: "CSS", icon: "css-3.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "React", icon: "react.svg" },
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "Vue", icon: "vue.svg" },
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "Firebase", icon: "firebase.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "VS Code", icon: "visual-studio-code.svg" },
    ],
  },
  {
    title: { en: "AI-Assisted Work", ja: "AI活用" },
    blurb: {
      en: "Prompting, AI-assisted coding and prototyping, and building AI features such as the Gemini-powered Tabipura travel planner. Every output is reviewed by a human.",
      ja: "プロンプトの工夫、AIを使ったコーディングやプロトタイピング、Gemini搭載の旅行プランナー「たびぷら」のようなAI機能の開発もしています。AIの出力は、必ず人の目で確認します。",
    },
    tools: [
      { name: "Claude", icon: "claude.svg" },
      { name: "ChatGPT", icon: "chatgpt.svg" },
      { name: "Gemini", icon: "gemini.svg" },
    ],
  },
  {
    title: { en: "Graphic Design", ja: "グラフィックデザイン" },
    blurb: {
      en: "Posters, ads, logos and social media visuals with a strong point of view.",
      ja: "ポスターや広告、ロゴ、SNS用のビジュアルなど、見る人の心に残るデザインを作ります。",
    },
    tools: [
      { name: "Photoshop", icon: "adobe-photoshop.svg" },
      { name: "Illustrator", icon: "adobe-illustrator.svg" },
      { name: "Lightroom", icon: "adobe-lightroom.svg" },
      { name: "Premiere", icon: "adobe-premiere.svg" },
    ],
  },
  {
    title: { en: "Mobile Apps", ja: "モバイルアプリ" },
    blurb: {
      en: "Cross-platform app prototypes and internal tools.",
      ja: "クロスプラットフォームのアプリのプロトタイプや、社内向けツールを作ります。",
    },
    tools: [
      { name: "Flutter", icon: "flutter.svg" },
      { name: "Dart", icon: "dart.svg" },
    ],
  },
];
