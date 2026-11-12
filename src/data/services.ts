// "Services" = what I do and the tools I use (no pricing). Content follows the latest resume.
// icon is optional: a tool without a logo file shows as a text-only chip.
// nameJa is optional: tool names stay in English, skill names are translated.
export interface Tool {
  name: string;
  nameJa?: string;
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
      en: "Wireframes, interfaces and prototypes that feel clear and friendly, plus design systems built on Material Design 3.",
      ja: "ワイヤーフレームから画面デザイン、プロトタイプまで、わかりやすくて親しみやすいUIを作ります。Material Design 3をベースにしたデザインシステムの構築もお任せください。",
    },
    tools: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Figma Make", icon: "figma.svg" },
      { name: "Figma agent", icon: "figma.svg" },
      { name: "Adobe XD", icon: "adobe-xd.svg" },
      { name: "Design Systems", nameJa: "デザインシステム" },
      { name: "Wireframing", nameJa: "ワイヤーフレーム作成" },
    ],
  },
  {
    title: { en: "UX Research", ja: "UXリサーチ" },
    blurb: {
      en: "Interviews, usability tests and surveys that turn what users really need into design decisions.",
      ja: "インタビューやユーザビリティテスト、アンケートで、ユーザーが本当に求めていることを見つけて、デザインに活かします。",
    },
    tools: [
      { name: "User Research", nameJa: "ユーザーリサーチ" },
      { name: "Usability Testing", nameJa: "ユーザビリティテスト" },
      { name: "Journey Mapping", nameJa: "カスタマージャーニーマップ" },
      { name: "Personas", nameJa: "ペルソナ" },
      { name: "Storyboarding", nameJa: "ストーリーボード" },
      { name: "Affinity Diagrams", nameJa: "アフィニティダイアグラム" },
      { name: "Workshopping", nameJa: "ワークショップ運営" },
      { name: "Information Architecture", nameJa: "情報設計" },
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
      { name: "STUDIO Design" },
      { name: "VS Code", icon: "visual-studio-code.svg" },
    ],
  },
  {
    title: { en: "AI-Assisted Work", ja: "AI活用" },
    blurb: {
      en: "Prototyping and design system setup with Figma Make, Figma agent and v0, coding with Claude via MCP, and AI features like the Gemini-powered Tabipura travel planner. Every output is reviewed by a human.",
      ja: "Figma Make、Figma agent、v0を使ったプロトタイプ作成やデザインシステムの立ち上げ、Claude（MCP）を使ったコーディング、Gemini搭載の旅行プランナー「たびぷら」のようなAI機能の開発もしています。AIの出力は、必ず人の目で確認します。",
    },
    tools: [
      { name: "Claude (MCP)", icon: "claude.svg" },
      { name: "ChatGPT", icon: "chatgpt.svg" },
      { name: "Gemini", icon: "gemini.svg" },
      { name: "Figma Make", icon: "figma.svg" },
      { name: "Figma agent", icon: "figma.svg" },
      { name: "v0", icon: "v0.svg" },
    ],
  },
  {
    title: { en: "Graphic Design", ja: "グラフィックデザイン" },
    blurb: {
      en: "Posters, pamphlets, ads, logos and social media visuals with a strong point of view.",
      ja: "ポスター、パンフレット、広告、ロゴ、SNS用のビジュアルなど、見る人の心に残るデザインを作ります。",
    },
    tools: [
      { name: "Photoshop", icon: "adobe-photoshop.svg" },
      { name: "Illustrator", icon: "adobe-illustrator.svg" },
      { name: "Lightroom", icon: "adobe-lightroom.svg" },
      { name: "Premiere Pro", icon: "adobe-premiere.svg" },
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
  {
    title: { en: "Team Collaboration", ja: "チームでの進行" },
    blurb: {
      en: "Working with designers, engineers and clients in teams of 3 to 10 people, and turning ideas from sales and marketing into pamphlets, posters and event materials.",
      ja: "デザイナー、エンジニア、クライアントと3〜10名のチームで協力します。営業やマーケティングのアイデアを、パンフレットやポスター、イベント資料にすることもあります。",
    },
    tools: [
      { name: "Jira", icon: "jira.svg" },
      { name: "Asana", icon: "asana.svg" },
      { name: "Slack" },
      { name: "Git", icon: "git.svg" },
    ],
  },
];
