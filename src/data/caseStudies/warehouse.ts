import type { CaseStudy } from "../../types/Project";
import type { Lang } from "../../hooks/useLang";

const IMG = "/images/works/warehouse/";

// Case study: AI-powered warehouse order and inventory verification iOS app.
// The client name and the app name (which contains it) are hidden under NDA.
export const warehouseCaseStudy: Record<Lang, CaseStudy> = {
  en: {
    note: "Client name is hidden under NDA. Screens are from the real app, with customer details replaced by sample text.",
    overview: [
      { label: "Client", value: "A Japanese warehouse and logistics company (name hidden under NDA)" },
      { label: "Product", value: "iOS app that checks physical books against order forms (注文書) and shipping labels (送り状) with Gemini" },
      { label: "Period", value: "April to June 2026" },
      { label: "My role", value: "UI/UX Designer: end-to-end flows, iOS interface design, Japanese UX copywriting, interactive prototyping" },
      { label: "Team", value: "Me, a Tech Lead, and the client's stakeholders" },
      { label: "Tools", value: "Figma, FigJam, Lovable, Gemini API" },
    ],
    sections: [
      {
        title: "Overview",
        blocks: [
          { type: "p", text: "An iOS app for Japanese warehouse operations. It uses multimodal AI (Gemini) to check physical stock (educational books) against order forms (注文書) and shipping labels (送り状)." },
          { type: "p", text: "It is built for fast on-site (\"Genba\") work. It supports two modes: real-time sequential scanning (逐次解析) and multi-order batch sorting (一括解析). In both, a person stays in control and handles the exceptions." },
        ],
      },
      {
        title: "Background",
        blocks: [
          { type: "p", text: "Before shipping, staff must check stacks of books against printed order forms and shipping labels. Doing this by hand is slow and easy to get wrong." },
          { type: "p", text: "AI scanning can help, but a busy warehouse brings its own UX problems:" },
          {
            type: "list",
            items: [
              "Uneven lighting can make photos blurry.",
              "Large batches take time to process.",
              "Operators need to see at once when the AI finds a mismatch.",
            ],
          },
          { type: "p", text: "The goal was a mobile-first experience that pairs Gemini's OCR and matching with simple human checking and sorting." },
        ],
      },
      {
        title: "Process",
        blocks: [
          {
            type: "numbered",
            items: [
              { lead: "Workflow architecture and mobile wireframes.", text: "I mapped the full flows in FigJam: login and password recovery by email code, capture modes, AI settings, scan history and the sorting workspace. A desktop-style Kanban board would be too cramped on a phone, so I designed a vertical \"Sorting Dashboard\". It has a horizontal pool of unmatched items (不明アイテム) above expandable order cards (注文一覧)." },
              { lead: "Modular AI prototyping.", text: "I split the complex multi-screen flows into small, ordered prompts in Lovable. This produced interactive React prototypes for client demos and validation." },
              { lead: "Iteration with the Tech Lead and the client.", text: "We ran several feedback sprints. I put technical needs straight into the UI: processing time for each run (for example 0.5秒), Gemini media resolution presets (低・中・高) and the AI's reason for each item (判定理由)." },
              { lead: "Visual hierarchy and Japanese localization.", text: "I refined the design from real operational feedback. Thin card outlines and many small badges became high-contrast pastel card tints, header colors that follow the worst status, and a quick item count (総数). All copy uses correct Japanese logistics terms." },
            ],
          },
          { type: "image", src: IMG + "flow-overview.jpg", caption: "FigJam: wireframes and flow charts across feedback rounds (4/21 to 5/1)" },
          { type: "image", src: IMG + "screens-overview.jpg", caption: "Figma: login and password recovery, settings, capture, history and result screens" },
          { type: "image", src: IMG + "screens-capture.jpg", caption: "App screens: login, home, camera and photo check (確認・撮り直し)" },
          { type: "image", src: IMG + "screens-result.jpg", caption: "App screens: result with worst-status header, pastel item cards and photo preview", maxWidth: 640 },
        ],
      },
      {
        title: "Challenges",
        blocks: [
          { type: "labeled", label: "Dense batch sorting on a small screen.", text: "Users needed to move many orders and unassigned books with one hand, without feeling overloaded. I added a dedicated bucket for unmatched items (不明アイテムから選択) and clear actions on each card (編集 / + 追加) for quick manual reassignment." },
          { type: "labeled", label: "Speed versus safety in the camera flow.", text: "In individual send mode (個別データ送信), the client first asked to remove the photo confirmation screen to save a tap. With the Tech Lead, I argued to keep it as a 0.5-second visual check. It saves workers from waiting about 20 seconds for an AI failure caused by a blurry photo. We also made sure the app leaves the iOS camera cleanly and stays stable." },
          { type: "labeled", label: "Less mental load and eye strain.", text: "Early versions used thin card borders and several small status tags at the top (未合致あり, 不一致あり, 送り状一致). Workers had to work out the overall status in their heads. I introduced a \"worst status wins\" header and an exception-focused layout: matched cards stay white, while mismatched and unmatched cards get a soft red or orange fill. Errors stand out at once without tiring the eyes." },
          { type: "labeled", label: "Turning technical AI settings into clear microcopy.", text: "I rewrote backend ideas, such as sequential versus batch inference (逐次解析 / 一括解析) and the Gemini token and resolution trade-off (画像解像度), as short Japanese copy that warehouse staff can scan quickly." },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            type: "list",
            items: [
              "Delivered an approved iOS design system, flow architecture and interactive prototype. The app is now used as an internal tool by the client's staff.",
              "Staff welcomed the app, and it shortens the time they spend on checking.",
              "Set up a clear human-in-the-loop check: AI explanations (判定理由), manual override (強制合致), audit remarks (備考) and a searchable history with status and speed filters (絞り込み / 並び順).",
              "Balanced technical limits and on-site speed by showing the stakeholders well-reasoned UI options and Japanese design specs.",
            ],
          },
        ],
      },
      {
        title: "What I learned",
        blocks: [
          {
            type: "list",
            items: [
              { lead: "On-site UX needs clarity more than minimalism.", text: "In a fast physical setting, cues seen at the edge of vision work much better than subtle borders: full-width status colors, total counts (総数) and pastel error fills." },
              { lead: "Explanations build trust in AI.", text: "Showing why the AI flagged an item, for example 数量が一致しません（注文: 1, 検出: 3）, next to its speed turns a black box into a tool staff can check in seconds." },
              { lead: "Working with engineering makes UX advice stronger.", text: "When a suggestion rests on real limits, such as camera memory and API latency, it is much easier to get everyone to agree on a safer, more reliable flow." },
            ],
          },
        ],
      },
    ],
  },
  ja: {
    note: "クライアント名はNDAのため非公開です。画面は実際のアプリのもので、顧客情報はサンプルの文字に置き換えています。",
    overview: [
      { label: "クライアント", value: "日本の倉庫・物流会社（名称はNDAのため非公開）" },
      { label: "プロダクト", value: "Geminiで、現物の書籍と注文書・送り状を照合するiOSアプリ" },
      { label: "期間", value: "2026年4月 - 2026年6月" },
      { label: "担当", value: "UI/UXデザイナー：エンドツーエンドのフロー設計、iOS UIデザイン、日本語UXライティング、インタラクティブなプロトタイプ" },
      { label: "チーム", value: "私、テックリード、クライアント担当者" },
      { label: "ツール", value: "Figma、FigJam、Lovable、Gemini API" },
    ],
    sections: [
      {
        title: "概要",
        blocks: [
          { type: "p", text: "日本の倉庫業務のためのiOSアプリです。マルチモーダルAI（Gemini）を使って、現物の在庫（教材の書籍）を注文書と送り状に照らして検品します。" },
          { type: "p", text: "スピードが求められる現場向けに作りました。1件ずつ解析する「逐次解析」と、複数の注文をまとめて仕分ける「一括解析」の2つのモードがあり、どちらも最後は人が確認して例外を処理します。" },
        ],
      },
      {
        title: "背景",
        blocks: [
          { type: "p", text: "出荷の前に、スタッフは積み上げた書籍を、紙の注文書と送り状に照らして確認します。手作業では時間がかかり、ミスも起こりやすい作業です。" },
          { type: "p", text: "AIによるスキャンは助けになりますが、忙しい倉庫ならではのUXの課題がありました。" },
          {
            type: "list",
            items: [
              "照明にムラがあると、写真がぼやけることがあります。",
              "大量のバッチは、処理に時間がかかります。",
              "AIが不一致を見つけたら、作業者がすぐに気づける必要があります。",
            ],
          },
          { type: "p", text: "目標は、GeminiのOCRと照合の力を、人による確認と仕分けのしやすさと組み合わせた、モバイルファーストの体験をつくることでした。" },
        ],
      },
      {
        title: "プロセス",
        blocks: [
          {
            type: "numbered",
            items: [
              { lead: "ワークフロー設計とモバイルのワイヤーフレーム。", text: "FigJamで全体のフローを整理しました。ログイン、メールコードによるパスワード再設定、撮影モード、AI設定、スキャン履歴、仕分け画面までです。デスクトップ向けのカンバンをそのまま小さな画面に入れると窮屈になるため、縦型の「仕分けダッシュボード」を設計しました。上に「不明アイテム」を横に並べ、その下に開閉できる注文カード（注文一覧）を置いています。" },
              { lead: "モジュール化したAIプロトタイピング。", text: "複雑な複数画面のフローを、順番に並べた小さなプロンプトに分けてLovableに渡しました。クライアントへのデモと検証に使える、動くReactのプロトタイプができました。" },
              { lead: "テックリードとクライアントとの改善サイクル。", text: "何度かフィードバックのスプリントを回しました。技術的な要件はUIに直接組み込みました。たとえば、実行ごとの処理時間（0.5秒など）、Geminiのメディア解像度プリセット（低・中・高）、アイテムごとのAIの判定理由です。" },
              { lead: "視覚的な階層づくりと日本語ローカライズ。", text: "現場からのフィードバックをもとに磨き込みました。細いカードの枠線と小さなバッジの羅列から、コントラストの高いパステルのカード色、最も悪い状態に合わせたヘッダー色、ひと目で分かる総数へと進化させました。文言はすべて、物流の現場で使われる用語に合わせています。" },
            ],
          },
          { type: "image", src: IMG + "flow-overview.jpg", caption: "FigJam：フィードバックのたびに更新したワイヤーフレームとフローチャート（4/21〜5/1）" },
          { type: "image", src: IMG + "screens-overview.jpg", caption: "Figma：ログイン・パスワード再設定、設定、撮影、履歴、結果の各画面" },
          { type: "image", src: IMG + "screens-capture.jpg", caption: "アプリ画面：ログイン、ホーム、カメラ、撮影内容の確認・撮り直し" },
          { type: "image", src: IMG + "screens-result.jpg", caption: "アプリ画面：最も悪い状態を示すヘッダーとパステルのアイテムカード、写真プレビュー", maxWidth: 640 },
        ],
      },
      {
        title: "課題",
        blocks: [
          { type: "labeled", label: "小さな画面での高密度な仕分け。", text: "多くの注文と未割り当ての書籍を、片手で扱えるようにしつつ、情報で圧倒しないことが必要でした。そこで、専用の「不明アイテムから選択」と、各カードの「編集」「+ 追加」ボタンを用意し、手動での振り分けを素早くできるようにしました。" },
          { type: "labeled", label: "スピードと安全性のバランス（カメラのフロー）。", text: "個別データ送信モードで、クライアントははじめ、タップ数を減らすために撮影後の確認画面をなくすことを求めていました。テックリードと一緒に、0.5秒の目視チェックとして残すことを提案しました。ぼやけた写真が原因でAIが失敗するまで約20秒待つ事態を防げるからです。あわせて、iOSのカメラを安定して終了できるようにしました。" },
          { type: "labeled", label: "認知負荷と目の疲れを減らす。", text: "初期の案では、細いカードの枠線と、画面上部の小さなステータスタグ（未合致あり、不一致あり、送り状一致）を使っていました。作業者は全体の状態を頭の中で計算する必要がありました。そこで「最も悪い状態を優先して表示する」ヘッダーと、例外に注目させるレイアウトを導入しました。合致したカードは白のまま、不一致や未合致のカードは淡い赤やオレンジで塗ります。目が疲れずに、エラーがすぐ目に入ります。" },
          { type: "labeled", label: "技術的なAI設定を、分かりやすい文言にする。", text: "逐次解析と一括解析、Geminiのトークンと画像解像度のトレードオフといったバックエンドの考え方を、倉庫のスタッフがさっと読める短い日本語にしました。" },
        ],
      },
      {
        title: "成果",
        blocks: [
          {
            type: "list",
            items: [
              "承認されたiOSのデザインシステム、フロー設計、インタラクティブなプロトタイプを納品しました。アプリはクライアントの社内ツールとして使われています。",
              "現場のスタッフに受け入れられ、検品にかかる時間の短縮につながっています。",
              "人が確認する、分かりやすい検品フローを整えました。AIの判定理由、手動での強制合致、監査用の備考、状態や速度で絞り込み・並び替えができる検索可能な履歴を備えています。",
              "筋道を立てたUIの選択肢と日本語のデザイン仕様をステークホルダーに示し、技術的な制約と現場のスピードの両立を図りました。",
            ],
          },
        ],
      },
      {
        title: "学んだこと",
        blocks: [
          {
            type: "list",
            items: [
              { lead: "現場のUXでは、ミニマルさよりも明快さが大切。", text: "動きの速い現場では、視界の端でも分かる手がかりのほうが、控えめな枠線よりずっと効果的です。たとえば、全幅のステータス色、総数、パステルのエラー色です。" },
              { lead: "説明があるとAIへの信頼が生まれる。", text: "AIがなぜ指摘したのか（例：数量が一致しません（注文: 1, 検出: 3））を処理速度とともに見せると、中身の見えないモデルが、スタッフが数秒で確認できる道具になります。" },
              { lead: "エンジニアと連携するとUXの提案が強くなる。", text: "カメラのメモリ管理やAPIの遅延といった技術的な事情に根ざした提案は、より安全で堅牢なフローについて関係者の合意を得やすくなります。" },
            ],
          },
        ],
      },
    ],
  },
};
