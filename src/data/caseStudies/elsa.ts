import type { CaseStudy } from "../../types/Project";
import type { Lang } from "../../hooks/useLang";

const IMG = "/images/works/elsa/";

// Case study: ELSA web redesign and conversion copywriting.
// Screenshots are taken from the live site (elsaspeak.com).
export const elsaCaseStudy: Record<Lang, CaseStudy> = {
  en: {
    overview: [
      { label: "Client", value: "ELSA, an AI-powered English speaking coach" },
      { label: "Scope", value: "About 20 web pages in 3 months. This case study covers three of them: the Assessment Test landing page, the ELSA Shop storefront and the Speech Analyzer product page" },
      { label: "Team", value: "1 project manager, 2 senior designers and 2 junior designers" },
      { label: "My role", value: "UI/UX Designer and Conversion Copywriter" },
      { label: "Period", value: "October to December 2025 (final submission in January 2026, after a long client feedback period)" },
      { label: "Tools", value: "Figma" },
      { label: "Live site", value: "elsaspeak.com/en" },
    ],
    sections: [
      {
        title: "Overview",
        blocks: [
          { type: "p", text: "A multi-page web redesign and conversion copywriting project for ELSA, an AI-powered English speaking coach. The three pages here are the Assessment Test landing page, the ELSA Shop and the Speech Analyzer product page." },
          { type: "p", text: "The work turned dense, feature-heavy layouts into clear user journeys. Each page shows the product's value with real UI first, then asks the user to act." },
        ],
      },
      {
        title: "Context: a handover and a fresh start",
        blocks: [
          { type: "p", text: "ELSA first worked with another vendor, but progress was slow: it took about 3 months to finish one page, the home page. ELSA then moved the project to our company and asked us to deliver the remaining 20 or so pages in 3 months." },
          { type: "p", text: "ELSA was also rebranding. Its landing pages had been made one language at a time, and the style and the content were very different from page to page, as if each language had been made by a different vendor. ELSA wanted to bring them together into one website that can switch between 7 languages." },
          { type: "p", text: "When we started, I found that ELSA had no design system. To keep the pace, we built one from scratch, based on ELSA's existing visual style, so that every page and every designer used the same parts." },
          {
            type: "list",
            items: [
              { lead: "Team.", text: "One project manager, two senior designers and two junior designers, working on the pages in parallel." },
              { lead: "Shared foundation.", text: "Colors, type, buttons, cards and gradients were defined once in Figma and reused across all pages." },
              { lead: "Clear status.", text: "Each page in the Figma file had a version number and a status mark, so the team and the developers always knew what was ready for development." },
            ],
          },
          { type: "image", src: IMG + "figma-pages.jpg", caption: "The Figma file: one page per web page, with a version number and a status mark (green check means ready for development). Colleague names are hidden.", maxWidth: 420 },
        ],
      },
      {
        title: "Background",
        blocks: [
          { type: "p", text: "Before the redesign, the landing pages in each language were not consistent in style or in content. ELSA's web ecosystem had also grown across assessment tools, e-commerce bundles (ELSA Pro, ELSA AI and ELSA Speech Analyzer) and standalone speech diagnostics. Several problems showed up across the landing pages:" },
          {
            type: "list",
            items: [
              { lead: "Inconsistent languages.", text: "The same product looked and sounded different in each language, so the brand did not feel like one company." },
              { lead: "Disjointed user flows.", text: "On the Assessment Test page, the interactive tool was buried below broad marketing claims, and the sections did not flow into each other." },
              { lead: "Flat shop merchandising.", text: "In the ELSA Shop, the premium bundles blended into the dark background, with no strong hierarchy or main device image." },
              { lead: "Too much copy.", text: "Early drafts of the Speech Analyzer page used long paragraphs instead of letting the product UI show what it can do. Trust badges also looked like clickable buttons." },
            ],
          },
          { type: "p", text: "The goal was one \"utility-first\" and \"executive\" design language across desktop and mobile, where real product insights do the heavy lifting." },
        ],
      },
      {
        title: "Process",
        blocks: [
          { type: "h", text: "1. Utility-first restructuring: Assessment Test landing page" },
          {
            type: "list",
            items: [
              { lead: "Reordered the story.", text: "I moved the interactive assessment right under the hero. Next came two conversion CTAs, accuracy proof points, a 4-step learning breakdown and detailed feedback previews." },
              { lead: "Smoother copy handoffs.", text: "I rewrote the headlines and step descriptions so the last step of \"Smart Learning in 4 Simple Steps\" leads naturally into \"Instant Actionable Feedback\"." },
              { lead: "An outcome-led hero.", text: "I replaced generic multi-device graphics with the 5-axis proficiency pentagon UI. It shows the CEFR level and scores for Pronunciation, Fluency, Intonation, Grammar and Vocabulary, next to short copy about a free test." },
            ],
          },
          { type: "image", src: IMG + "assessment-hero.jpg", caption: "Live page: Assessment Test hero with the proficiency pentagon" },
          { type: "image", src: IMG + "assessment-test.jpg", caption: "Live page: the interactive test sits directly under the hero" },

          { type: "h", text: "2. High-impact e-commerce packaging: ELSA Shop and ELSA Premium" },
          {
            type: "list",
            items: [
              { lead: "Separation and depth.", text: "I turned flat feature lists into dedicated \"impact containers\" with indigo-to-violet gradients, glowing borders and layered device mockups, inspired by modern tech and retail stores." },
              { lead: "Scannable benefit cards.", text: "I reduced a 9-point feature list (9,000+ lessons, AI roleplay, personalized learning paths, real-time speech feedback and more) into cards with clear icons, bold titles and short descriptions." },
            ],
          },
          { type: "image", src: IMG + "shop-premium.jpg", caption: "Live page: ELSA Premium container" },
          { type: "image", src: IMG + "shop-professional.jpg", caption: "Live page: ELSA Professional container" },

          { type: "h", text: "3. Executive product storytelling: Speech Analyzer" },
          {
            type: "list",
            items: [
              { lead: "An annotated product hero.", text: "The hero says \"Your next presentation, but clearer and more confident\". It sits next to a dark-mode product preview with the Overall Speaking Score ring, five score tiles and short callouts such as \"Top mistakes\", \"Exactly how to fix /r/ and /z/\" and \"Predicted IELTS and TOEFL scores\"." },
              { lead: "Better trust signals.", text: "Stacked rectangular trust boxes (\"Private and secure\", \"Used by professionals worldwide\", \"Works with any accent\") became a connected, wreath-style visual, so people would not mistake proof points for buttons." },
              { lead: "\"Show, don't tell\" columns.", text: "I trimmed the body copy in the \"What You Get\" grid (Know Your Level, Know What's Wrong, Know How to Fix It) and designed small UI mockups: CEFR benchmarks, phoneme error breakdowns (/t/, /l/, /v/) and video tutorial cards." },
              { lead: "A loop that works on mobile.", text: "I adapted the 4-step \"How It Works\" cycle (Record, Analyze, Practice, Improve) into a vertical loop for phones, with a return path. Real-world scenarios (Meetings and Presentations, IELTS/TOEFL Speaking Prep, Daily Conversations, Job Interview) follow Task-Based Language Teaching." },
            ],
          },
          { type: "image", src: IMG + "speech-hero.jpg", caption: "Live page: Speech Analyzer hero" },
          { type: "image", src: IMG + "speech-what-you-get.jpg", caption: "Live page: \"What You Get\" with three UI previews" },
          { type: "image", src: IMG + "speech-score-breakdown.jpg", caption: "Live page: score breakdown with phoneme-level feedback" },
          { type: "image", src: IMG + "speech-mobile.jpg", caption: "Live page on mobile: hero, \"What You Get\" and the score breakdown" },
        ],
      },
      {
        title: "Challenges",
        blocks: [
          { type: "labeled", label: "Proof versus action.", text: "Early layouts put trust statements in full-width bordered boxes that competed with the main CTA. A connected, circular motif removed the confusion and kept the polish." },
          { type: "labeled", label: "Condensing phonetic data.", text: "Speech Analyzer gives detailed feedback, from IELTS, TOEFL, CEFR and PTE predictions to tips for single sounds. Cutting copy while keeping the mockups readable needed careful visual editing." },
          { type: "labeled", label: "Keeping the loop on mobile.", text: "A horizontal 4-node loop had to fit a narrow screen without losing the idea of continuous improvement. I had to rethink the connector paths." },
          { type: "labeled", label: "Speed with quality.", text: "With about 20 pages in 3 months and a new design system to build, the team had to share parts early and review often, so that pages made by different people still felt like one product." },
          { type: "labeled", label: "Aligning stakeholders.", text: "I balanced feedback from product and design stakeholders at ELSA, and flagged dependencies, such as keeping the pricing tables as they were until the page redirect decisions were confirmed." },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            type: "list",
            items: [
              "The pages were built in about 3 months (10/2025 to 12/2025) and are live on elsaspeak.com. The final submission was in January 2026, after a long client feedback period.",
              "A shared design and copy system across the assessment, shop and Speech Analyzer funnels, which supports ELSA's position for professional and academic learners.",
              "Walls of text were replaced by annotated UI previews and clean 3-column breakdowns, so the product value reads in seconds.",
              "Responsive layouts, including mobile mockups and the vertical loop, keep the story clear on every screen size.",
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
              { lead: "Let annotated product UI carry the pitch.", text: "For data-rich AI tools, a well-chosen preview with sharp micro-annotations persuades more than long paragraphs." },
              { lead: "Visual affordance shapes behavior.", text: "Boxes, borders and badges look clickable. Trust signals must look different from buttons to keep the conversion path clear." },
              { lead: "Copy and layout are inseparable.", text: "A landing page flows well when headlines, transition copy and focal visuals are designed together, not in separate phases." },
              { lead: "A design system is the fastest way to scale a team.", text: "Building shared parts first let five people deliver about 20 pages in 3 months." },
            ],
          },
        ],
      },
    ],
  },
  ja: {
    overview: [
      { label: "クライアント", value: "ELSA（AI英語スピーキングコーチ）" },
      { label: "範囲", value: "約3か月で、全20ページほどを制作。このケーススタディでは、そのうち3ページ（アセスメントテストのランディングページ、ELSA Shop、Speech Analyzerの製品ページ）を紹介します" },
      { label: "チーム", value: "プロジェクトマネージャー1名、シニアデザイナー2名、ジュニアデザイナー2名" },
      { label: "担当", value: "UI/UXデザイナー、コンバージョン向けコピーライター" },
      { label: "期間", value: "2025年10月〜12月（クライアントのフィードバックが長引いたため、最終提出は2026年1月）" },
      { label: "ツール", value: "Figma" },
      { label: "公開サイト", value: "elsaspeak.com/en" },
    ],
    sections: [
      {
        title: "概要",
        blocks: [
          { type: "p", text: "AI英語スピーキングコーチ「ELSA」の、複数ページにわたるWebサイトのリデザインと、コンバージョンのためのコピーライティングのプロジェクトです。ここで紹介するのは、アセスメントテストのランディングページ、ELSA Shop、Speech Analyzerの製品ページの3つです。" },
          { type: "p", text: "情報が多く機能中心だったレイアウトを、分かりやすいユーザーの流れに整えました。どのページも、まず実際のUIで製品の価値を見せてから、行動を促します。" },
        ],
      },
      {
        title: "背景：引き継ぎと、ゼロからのスタート",
        blocks: [
          { type: "p", text: "ELSAは、はじめは別のベンダーと進めていましたが、進み方が遅く、ホームページ1ページの完成に約3か月かかっていました。そこでELSAはプロジェクトを私たちの会社に移し、残りの約20ページを3か月で仕上げることを依頼しました。" },
          { type: "p", text: "ELSAはリブランディングも進めていました。それまでのランディングページは言語ごとにつくられていて、ページによってスタイルも内容もばらばらで、言語ごとに別のベンダーがつくったように見える状態でした。ELSAは、これらを1つにまとめ、7言語に切り替えられるWebサイトにしたいと考えていました。" },
          { type: "p", text: "着手してすぐに、ELSAにはデザインシステムがないことが分かりました。スピードを保つため、ELSAの既存のビジュアルスタイルをもとに、ゼロからデザインシステムをつくりました。どのページも、どのデザイナーも、同じパーツを使えるようにするためです。" },
          {
            type: "list",
            items: [
              { lead: "チーム。", text: "プロジェクトマネージャー1名、シニアデザイナー2名、ジュニアデザイナー2名で、ページを並行して進めました。" },
              { lead: "共通の土台。", text: "色、文字、ボタン、カード、グラデーションをFigmaで一度だけ定義し、全ページで使い回しました。" },
              { lead: "分かりやすいステータス。", text: "Figmaの各ページにバージョン番号とステータスの印をつけ、チームもエンジニアも、どのページが開発に進めるかがいつも分かるようにしました。" },
            ],
          },
          { type: "image", src: IMG + "figma-pages.jpg", caption: "Figmaファイル：Webの1ページにつきFigmaの1ページ。バージョン番号とステータスの印つき（緑のチェックは開発に進めるという意味）。同僚の名前は伏せています。", maxWidth: 420 },
        ],
      },
      {
        title: "課題の背景",
        blocks: [
          { type: "p", text: "リデザインの前は、言語ごとのランディングページで、スタイルも内容も統一されていませんでした。また、ELSAのWebは、アセスメントツール、Eコマースのバンドル（ELSA Pro、ELSA AI、ELSA Speech Analyzer）、単独のスピーチ診断へと広がってきました。その中で、ランディングページにはいくつかの問題がありました。" },
          {
            type: "list",
            items: [
              { lead: "言語ごとのばらつき。", text: "同じ製品なのに、言語によって見た目も言葉づかいも違い、ひとつの会社のブランドに感じられませんでした。" },
              { lead: "ばらばらなユーザーの流れ。", text: "アセスメントテストのページでは、操作できるツールが大きな宣伝文句の下に埋もれ、セクション同士のつながりもありませんでした。" },
              { lead: "単調な商品の見せ方。", text: "ELSA Shopでは、プレミアムのバンドルが暗い背景に溶け込み、強い階層も、主役となるデバイスの画像もありませんでした。" },
              { lead: "文章が多すぎる。", text: "Speech Analyzerの初期案は、製品UIで機能を見せる代わりに、長い説明文に頼っていました。信頼を示すバッジも、押せるボタンのように見えていました。" },
            ],
          },
          { type: "p", text: "目標は、デスクトップとモバイルの両方で使える、「実用第一」で「エグゼクティブ」なデザイン言語をつくり、製品の実際の洞察に語らせることでした。" },
        ],
      },
      {
        title: "プロセス",
        blocks: [
          { type: "h", text: "1. 実用第一の再構成：アセスメントテストのランディングページ" },
          {
            type: "list",
            items: [
              { lead: "ストーリーの並べ替え。", text: "操作できるアセスメントを、ヒーローのすぐ下に移しました。そのあとに、2つのコンバージョンCTA、精度の根拠、4ステップの学習の流れ、詳しいフィードバックのプレビューを続けています。" },
              { lead: "なめらかなコピーのつながり。", text: "見出しとステップの説明を書き直し、「Smart Learning in 4 Simple Steps」の最後のステップが、「Instant Actionable Feedback」へ自然につながるようにしました。" },
              { lead: "成果を見せるヒーロー。", text: "汎用的な複数デバイスの画像をやめて、5軸の「習熟度ペンタゴン」UIに替えました。CEFRのレベルと、発音、流暢さ、イントネーション、文法、語彙のスコアを表示し、無料で試せることを伝える短いコピーを添えています。" },
            ],
          },
          { type: "image", src: IMG + "assessment-hero.jpg", caption: "公開中のページ：習熟度ペンタゴンのあるアセスメントテストのヒーロー" },
          { type: "image", src: IMG + "assessment-test.jpg", caption: "公開中のページ：ヒーローの直下に置いた、操作できるテスト" },

          { type: "h", text: "2. 印象に残るEコマースのパッケージ化：ELSA ShopとELSA Premium" },
          {
            type: "list",
            items: [
              { lead: "分離と奥行き。", text: "単調な機能リストを、インディゴからバイオレットへのグラデーション、光る枠線、重ねたデバイスのモックアップを使った専用の「インパクトコンテナ」に変えました。最新のテックやリテールのストアを参考にしています。" },
              { lead: "ひと目で分かるベネフィットカード。", text: "9項目の機能リスト（9,000以上のレッスン、AIロールプレイ、パーソナライズされた学習パス、リアルタイムのスピーチフィードバックなど）を、アイコン、太字のタイトル、短い説明をそろえたカードにまとめました。" },
            ],
          },
          { type: "image", src: IMG + "shop-premium.jpg", caption: "公開中のページ：ELSA Premiumのコンテナ" },
          { type: "image", src: IMG + "shop-professional.jpg", caption: "公開中のページ：ELSA Professionalのコンテナ" },

          { type: "h", text: "3. エグゼクティブ向けの製品ストーリー：Speech Analyzer" },
          {
            type: "list",
            items: [
              { lead: "注釈つきの製品ヒーロー。", text: "ヒーローのコピーは「次のプレゼンを、もっとクリアに、もっと自信をもって」という趣旨です。隣に、ダークモードの製品プレビューを置き、総合スピーキングスコアのリング、5つのスコアタイル、「Top mistakes」「Exactly how to fix /r/ and /z/」「Predicted IELTS and TOEFL scores」などの短い吹き出しを載せました。" },
              { lead: "信頼のシグナルの見直し。", text: "縦に積んだ四角い信頼ボックス（「Private and secure」「Used by professionals worldwide」「Works with any accent」）を、つながった花輪のようなビジュアルに変え、根拠の表示がボタンに見えないようにしました。" },
              { lead: "「語らず、見せる」カラム。", text: "「What You Get」の3カラムの本文を削り（Know Your Level、Know What's Wrong、Know How to Fix It）、CEFRの基準、音素ごとのエラーの内訳（/t/、/l/、/v/）、動画チュートリアルのカードを使った小さなUIモックアップをつくりました。" },
              { lead: "モバイルでも成り立つループ。", text: "4ステップの「How It Works」の循環（Record、Analyze、Practice、Improve）を、スマホ向けに、戻る経路つきの縦型のループに作り替えました。実際の利用シーン（会議とプレゼン、IELTS/TOEFLのスピーキング対策、日常会話、就職面接）は、タスクベースの言語教授法（TBLT）に沿って構成しています。" },
            ],
          },
          { type: "image", src: IMG + "speech-hero.jpg", caption: "公開中のページ：Speech Analyzerのヒーロー" },
          { type: "image", src: IMG + "speech-what-you-get.jpg", caption: "公開中のページ：3つのUIプレビューがある「What You Get」" },
          { type: "image", src: IMG + "speech-score-breakdown.jpg", caption: "公開中のページ：音素レベルのフィードバックつきスコアの内訳" },
          { type: "image", src: IMG + "speech-mobile.jpg", caption: "公開中のページ（モバイル）：ヒーロー、「What You Get」、スコアの内訳" },
        ],
      },
      {
        title: "課題",
        blocks: [
          { type: "labeled", label: "根拠と行動の混同。", text: "初期のレイアウトでは、信頼を示す文を幅いっぱいの枠つきボックスに入れていたため、メインのCTAと競合していました。つながった円形のモチーフにすることで、混乱をなくしつつ、見た目の完成度も保てました。" },
          { type: "labeled", label: "音声データの要約。", text: "Speech Analyzerは、IELTS、TOEFL、CEFR、PTEの予測から、個々の音のコツまで、細かいフィードバックを返します。文章を削りながらモックアップを読める状態に保つには、丁寧なビジュアルの編集が必要でした。" },
          { label: "モバイルでのループの維持。", type: "labeled", text: "横長の4ノードのループを、細い画面に収めても、継続的に上達していくという考え方が伝わるようにしなければならず、コネクターの経路を考え直しました。" },
          { type: "labeled", label: "スピードと品質の両立。", text: "3か月で約20ページ、しかもデザインシステムづくりも必要でした。そのため、パーツを早い段階で共有し、こまめにレビューして、違う人がつくったページでも、ひとつのプロダクトに見えるようにしました。" },
          { type: "labeled", label: "関係者との調整。", text: "ELSAのプロダクト側とデザイン側の関係者からのフィードバックのバランスを取りつつ、依存関係も共有しました。たとえば、ページのリダイレクトの方針が決まるまでは、料金表をそのまま残す、といったことです。" },
        ],
      },
      {
        title: "成果",
        blocks: [
          {
            type: "list",
            items: [
              "ページは約3か月（2025年10月〜12月）でつくり、elsaspeak.comで公開されています。最終提出は、クライアントのフィードバックが長引いたため、2026年1月でした。",
              "アセスメント、ショップ、Speech Analyzerの各導線にわたって、デザインとコピーの共通システムを整え、社会人や学生の学習者に向けたELSAの立ち位置を支えています。",
              "文章の壁を、注釈つきのUIプレビューとすっきりした3カラムの内訳に置き換え、製品の価値が数秒で伝わるようになりました。",
              "モバイルのモックアップや縦型のループを含むレスポンシブなレイアウトで、どの画面サイズでもストーリーが分かりやすく保たれます。",
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
              { lead: "注釈つきの製品UIに語らせる。", text: "データが豊富なAIツールでは、鋭い注釈をつけて厳選したプレビューのほうが、長い説明文よりずっと説得力があります。" },
              { lead: "見た目の手がかりが行動を決める。", text: "ボックス、枠線、バッジは押せるように見えます。コンバージョンの流れを明確に保つには、信頼のシグナルをボタンと違う見た目にすることが大切です。" },
              { lead: "コピーとレイアウトは切り離せない。", text: "見出し、つなぎのコピー、視線の中心になるビジュアルを別々の工程にせず、一緒に設計すると、ランディングページの流れがよくなります。" },
              { lead: "デザインシステムは、チームを素早く広げる近道。", text: "共通のパーツを先につくったことで、5人で3か月に約20ページを納品できました。" },
            ],
          },
        ],
      },
    ],
  },
};
