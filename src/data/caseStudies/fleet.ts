import type { CaseStudy } from "../../types/Project";
import type { Lang } from "../../hooks/useLang";

// Case study: fleet management platform (client name hidden under NDA).
// Images live in public/images/works/fleet/. An image block without `src` is skipped.
export const fleetCaseStudy: Record<Lang, CaseStudy> = {
  en: {
    note: "Client name and branding are hidden under NDA. Screens use sample data.",
    overview: [
      { label: "Team", value: "1 PM and 2 designers in Japan, development team at Tokyo Techies' Vietnam branch" },
      { label: "Platform", value: "3 web portals (system admin, sales agency, transport company) and 1 Android driver app" },
      { label: "Tools", value: "Figma, Material Design 3, Google Sheets, Slack, Gemini, Claude" },
    ],
    sections: [
      {
        title: "Background",
        blocks: [
          { type: "p", text: "The client is a Japanese logistics company. They needed one platform to track trucks, send daily operation instructions to drivers, and record loading work in the field." },
          { type: "p", text: "The product has two very different users. Dispatchers sit in the office and need dense tables, filters, and bulk actions. Drivers are on the road, often in a hurry, and need large buttons and one clear action per screen. Both sides had to share one design system." },
        ],
      },
      {
        title: "My role",
        blocks: [
          { type: "p", text: "In Phase 1, I worked with a senior designer to deliver the MVP. I was responsible for the web platform design and an early version of the design system." },
          { type: "p", text: "After the MVP shipped, the senior designer moved to another project and I became the lead designer. Since then I have owned the design system, the UI for new features, the Japanese UI copy, and the handoff to the developers in Vietnam." },
        ],
      },
      {
        title: "Process",
        blocks: [
          { type: "image", src: "/images/works/fleet/process-en.svg", caption: "Design process" },
          {
            type: "numbered",
            items: [
              "Clarify requirements with the PM and the client.",
              "Draw the flow and wireframes, including offline, empty, and error states.",
              "Design the UI and write the Japanese copy.",
              "Hand off to the Vietnam team and answer questions during development.",
              "Test the build and report issues.",
            ],
          },
        ],
      },
      {
        title: "Challenge 1: Making location and speed tracking accurate",
        blocks: [
          { type: "labeled", label: "Problem", text: "The platform depends on correct truck location and speed. If the data is wrong, dispatchers cannot trust the map or the trip records. Early builds sometimes showed positions and speeds that did not match the real trip." },
          { type: "labeled", label: "What I did", text: "" },
          {
            type: "list",
            items: [
              "I acted as the bridge between the client in Japan and the developers in Vietnam. The client explained the expected behavior in Japanese and in business terms. I turned it into clear cases with screens, examples, and expected results, so the developers could act on it.",
              "I joined the field tests. This feature cannot be tested at a desk, because it needs a moving vehicle. I ran the app on my commute and on weekend drives, and I even drove to Narita Airport to collect data on a long highway route.",
              "I reported each test with screenshots, the route, the time, and the gap between real and recorded values, so the developers could reproduce the problem.",
            ],
          },
          { type: "image", src: "/images/works/fleet/test-route.jpg", caption: "A test drive to Narita Airport: the recorded route on the map" },
          { type: "labeled", label: "Result", text: "Location and speed now match the real trip closely enough for dispatchers to rely on." },
        ],
      },
      {
        title: "Challenge 2: Recurring operation instructions",
        blocks: [
          { type: "labeled", label: "Problem", text: "Dispatchers create instructions that repeat on many dates. When they add a stop to the whole series, some dates may fail because of a time conflict. Blocking the whole action would force them to fix every date by hand." },
          { type: "labeled", label: "Decision", text: "I designed a partial success flow. The stop is added to every valid date. A result dialog then lists the dates that failed (up to 5, then a count of the rest) with a hint to fix them one by one." },
          { type: "image", src: "/images/works/fleet/recurring-flows.jpg", caption: "Recurring instruction flows, from create and edit to the result dialogs (sample data)" },
          { type: "labeled", label: "Why", text: "Dispatchers handle many instructions a day. Saving the valid ones and pointing clearly to the failed ones costs them the least time." },
        ],
      },
      {
        title: "Challenge 3: One design system for four environments",
        blocks: [
          { type: "labeled", label: "Problem", text: "Three web portals and one mobile app were built in parallel. Without shared rules, the same status or button could look different in each place." },
          { type: "labeled", label: "Decision", text: "I maintain a design system based on Material Design 3, with shared color, type, and shape tokens. Web components are tuned for dense data. Mobile components use high contrast and touch targets of at least 48px." },
          { type: "image", src: "/images/works/fleet/web-components.jpg", caption: "Web-only components in the design system" },
          { type: "labeled", label: "Why", text: "Developers build faster with fewer questions, and users see the same patterns everywhere." },
        ],
      },
      {
        title: "Outcome",
        blocks: [{ type: "list", items: ["The platform is live in production.", "Around ten transport companies use it.", "Phase 3 is in development with more features."] }],
      },
      {
        title: "What I learned",
        blocks: [
          { type: "labeled", label: "Stepping up", text: "Moving from junior to lead taught me to make decisions, explain the reasons, and own the result." },
          { type: "labeled", label: "Working across countries", text: "Clear written specs and concrete examples matter more than long meetings when the client and developers speak different languages." },
          { type: "labeled", label: "Testing in the real world", text: "Driving with the app showed me problems that no design file could show." },
          { type: "labeled", label: "Design within limits", text: "I learned to weigh the ideal experience against development effort and propose phased options." },
        ],
      },
    ],
  },

  ja: {
    note: "クライアント名とブランドはNDAのため非公開です。画面はサンプルデータを使っています。",
    overview: [
      { label: "チーム", value: "日本のPM1名とデザイナー2名、開発はTokyo Techiesのベトナム拠点" },
      { label: "プラットフォーム", value: "Webポータル3種（システム管理者、販売代理店、運送会社）と、Androidのドライバーアプリ1つ" },
      { label: "ツール", value: "Figma、Material Design 3、Googleスプレッドシート、Slack、Gemini、Claude" },
    ],
    sections: [
      {
        title: "背景",
        blocks: [
          { type: "p", text: "クライアントは日本の物流会社です。トラックの位置を把握し、ドライバーに毎日の運行指示を送り、現場での積み込み作業を記録するために、ひとつのプラットフォームが必要でした。" },
          { type: "p", text: "このプロダクトには、使い方がまったく違う2種類のユーザーがいます。配車担当者はオフィスで作業するため、情報量の多い表、絞り込み、一括操作が必要です。ドライバーは運転中で急いでいることも多く、大きなボタンと、1画面にひとつだけの明確な操作が必要です。この両方で、ひとつのデザインシステムを共有する必要がありました。" },
        ],
      },
      {
        title: "私の役割",
        blocks: [
          { type: "p", text: "フェーズ1では、シニアデザイナーと一緒にMVPをリリースしました。私はWebプラットフォームのデザインと、デザインシステムの初期版を担当しました。" },
          { type: "p", text: "MVPのリリース後、シニアデザイナーが別のプロジェクトに移ったため、私がリードデザイナーになりました。それ以来、デザインシステム、新機能のUI、日本語のUIコピー、ベトナムの開発者への引き継ぎを担当しています。" },
        ],
      },
      {
        title: "プロセス",
        blocks: [
          { type: "image", src: "/images/works/fleet/process-ja.svg", caption: "デザインのプロセス" },
          {
            type: "numbered",
            items: [
              "PMやクライアントと一緒に、要件を整理する。",
              "フローとワイヤーフレームを描く。オフライン、データなし、エラーの状態も含める。",
              "UIをデザインし、日本語のコピーを書く。",
              "ベトナムのチームに引き継ぎ、開発中の質問に答える。",
              "ビルドをテストし、問題を報告する。",
            ],
          },
        ],
      },
      {
        title: "課題1：位置情報と速度の計測精度を高める",
        blocks: [
          { type: "labeled", label: "問題", text: "このプラットフォームは、トラックの位置と速度が正確であることが前提です。データが間違っていると、配車担当者は地図も運行記録も信用できません。初期のビルドでは、実際の走行と合わない位置や速度が表示されることがありました。" },
          { type: "labeled", label: "私の対応", text: "" },
          {
            type: "list",
            items: [
              "日本のクライアントとベトナムの開発者をつなぐ橋渡し役をしました。クライアントが日本語で、ビジネスの言葉で説明する期待動作を、画面、例、期待される結果つきの明確なケースにして、開発者がすぐに動けるようにしました。",
              "現場テストに参加しました。この機能は、机の上ではテストできず、動く車両が必要です。通勤中や週末のドライブでアプリを動かし、長い高速ルートのデータを集めるために、成田空港まで運転したこともあります。",
              "テストのたびに、スクリーンショット、ルート、時刻、実際の値と記録された値の差を添えて報告し、開発者が問題を再現できるようにしました。",
            ],
          },
          { type: "image", src: "/images/works/fleet/test-route.jpg", caption: "成田空港までのテスト走行：地図に記録されたルート" },
          { type: "labeled", label: "結果", text: "位置と速度は、配車担当者が頼れる程度に、実際の走行とほぼ一致するようになりました。" },
        ],
      },
      {
        title: "課題2：繰り返しの運行指示",
        blocks: [
          { type: "labeled", label: "問題", text: "配車担当者は、多くの日付に繰り返される運行指示を作ります。シリーズ全体に立ち寄り先を追加すると、時間の重複で失敗する日付が出ることがあります。操作全体をブロックすると、すべての日付を手作業で直すことになってしまいます。" },
          { type: "labeled", label: "判断", text: "「一部成功」のフローを設計しました。立ち寄り先は、有効なすべての日付に追加されます。そのあと結果ダイアログで、失敗した日付を（最大5件、残りは件数で）一覧にし、ひとつずつ直すためのヒントを表示します。" },
          { type: "image", src: "/images/works/fleet/recurring-flows.jpg", caption: "繰り返し運行指示のフロー：作成、編集から結果ダイアログまで（サンプルデータ）" },
          { type: "labeled", label: "理由", text: "配車担当者は、1日に多くの運行指示を扱います。有効なものは保存し、失敗したものをはっきり示すのが、いちばん手間がかかりません。" },
        ],
      },
      {
        title: "課題3：4つの環境をひとつのデザインシステムで",
        blocks: [
          { type: "labeled", label: "問題", text: "3つのWebポータルとモバイルアプリを、並行して開発していました。共通のルールがないと、同じステータスやボタンが、場所ごとに違って見えてしまいます。" },
          { type: "labeled", label: "判断", text: "Material Design 3をベースにしたデザインシステムを管理しています。色、文字、形のトークンは共通です。Webのコンポーネントは情報量の多いデータ向けに調整し、モバイルのコンポーネントは高コントラストで、タッチターゲットは48px以上にしています。" },
          { type: "image", src: "/images/works/fleet/web-components.jpg", caption: "デザインシステムのWeb専用コンポーネント" },
          { type: "labeled", label: "理由", text: "開発者は質問が少なく、速く作れます。ユーザーは、どの画面でも同じ操作パターンを使えます。" },
        ],
      },
      {
        title: "成果",
        blocks: [{ type: "list", items: ["プラットフォームは本番稼働中です。", "約10社の運送会社が利用しています。", "フェーズ3では、さらに多くの機能を開発中です。"] }],
      },
      {
        title: "学んだこと",
        blocks: [
          { type: "labeled", label: "リードへの成長", text: "ジュニアからリードになって、決断し、理由を説明し、結果に責任を持つことを学びました。" },
          { type: "labeled", label: "国をまたぐ協働", text: "クライアントと開発者の言語が違うときは、長い会議よりも、わかりやすい文書と具体的な例のほうが大切です。" },
          { type: "labeled", label: "実環境でのテスト", text: "アプリを使って実際に運転してみると、デザインファイルでは見えない問題が見つかりました。" },
          { type: "labeled", label: "制約の中でのデザイン", text: "理想の体験と開発の工数を比べて、段階的な案を提案することを学びました。" },
        ],
      },
    ],
  },
};
