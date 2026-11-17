import type { CaseStudy } from "../../types/Project";
import type { Lang } from "../../hooks/useLang";

const IMG = "/images/works/kotae/";
const g = (file: string, caption: string) => ({ src: IMG + file + ".jpg", caption });

// Showcase: marketing materials for Kotae, an AI chatbot by Tokyo Techies.
export const kotaeCaseStudy: Record<Lang, CaseStudy> = {
  en: {
    overview: [
      { label: "Product", value: "Kotae, an AI chatbot made by Tokyo Techies (kotae.ai)" },
      { label: "Origin", value: "Started in 2024 from an internal need at the company" },
      { label: "Deliverables", value: "Flyers (chirashi) for exhibitions (tenjikai) and handouts, posters and digital ads" },
      { label: "Brand colors", value: "Primary purple, secondary orange and tertiary green" },
      { label: "My role", value: "Graphic design, copywriting (with AI), idea drafts (with AI), and placing print orders" },
    ],
    sections: [
      {
        title: "Overview",
        blocks: [
          { type: "p", text: "Kotae is an AI chatbot that answers customers on a company's website. It was built at Tokyo Techies in 2024, first to meet a need inside the company." },
          { type: "p", text: "This page shows the marketing materials I designed for it: flyers (chirashi), posters and digital ads." },
        ],
      },
      {
        title: "Context",
        blocks: [
          { type: "p", text: "The first flyers were in English and used the first brand style, dark green. After one rebrand, the company decided to aim its advertising at the Japanese market." },
          { type: "p", text: "From then on I made many chirashi to display and hand out at exhibitions, plus posters and digital ads, all in the brand colors of the time: purple as the primary color, orange as the secondary color and green as the tertiary color." },
        ],
      },
      {
        title: "My process",
        blocks: [
          {
            type: "numbered",
            items: [
              { lead: "Write the copy with AI.", text: "I wrote the copy myself with the help of AI, and checked every line for tone and accuracy." },
              { lead: "Draft ideas with AI.", text: "I also used AI to draft ideas for the layout and the message of each piece." },
              { lead: "Review with the sales team.", text: "I shared the drafts with the sales team, who know the customers best, and changed them until they were happy." },
              { lead: "Build the hi-fi design in Figma.", text: "Once the idea was approved, I made the final design in Figma." },
              { lead: "Order the print.", text: "After the final version was approved, I placed the print order on Raksul myself, and the printed flyers were delivered to the company." },
            ],
          },
        ],
      },
      {
        title: "Design approach",
        blocks: [
          {
            type: "list",
            items: [
              { lead: "One system, many formats.", text: "A4 flyers, posters and square ads share the same colors, type and product screenshots, so every piece is clearly Kotae." },
              { lead: "Color roles.", text: "Purple carries headlines, key words and the call-to-action band. Orange marks highlights and buttons. Green sets apart panels and key offers." },
              { lead: "Show the product.", text: "Real screens of the chat and the dashboard sit next to the copy, so readers see what they get." },
              { lead: "Speak to each audience.", text: "Flyers and ads open with a question that one group recognizes, such as universities, schools, hotels, clinics or manufacturers, and then offer one clear next step." },
            ],
          },
        ],
      },
      {
        title: "Early flyers in English",
        blocks: [
          { type: "p", text: "Made in the first brand style (dark green)." },
          {
            type: "gallery",
            cols: 2,
            items: [g("flyer-en-first-brand-intro", "Product introduction"), g("flyer-en-first-brand-why", "Why choose Kotae?")],
          },
        ],
      },
      {
        title: "Flyers after the rebrand",
        blocks: [
          { type: "p", text: "The same layouts were made in Japanese and in English." },
          {
            type: "gallery",
            cols: 2,
            items: [
              g("flyer-ja-intro", "Product introduction (Japanese)"),
              g("flyer-en-intro", "Product introduction (English)"),
              g("flyer-ja-inbound-funnel", "Features: inbound funnel (Japanese)"),
              g("flyer-en-inbound-funnel", "Features: inbound funnel (English)"),
            ],
          },
        ],
      },
      {
        title: "Flyers for different audiences",
        blocks: [
          {
            type: "gallery",
            cols: 2,
            items: [
              g("flyer-ja-pain-points", "Common worries and how Kotae solves them"),
              g("flyer-ja-two-issues", "Customer support and internal knowledge, solved together"),
              g("flyer-ja-university-builder", "For universities: an AI agent builder (front)"),
              g("flyer-ja-personas", "For teachers, office staff and students (back)"),
              g("flyer-ja-university-partner", "Co-branded with partner SRA Group, for universities"),
            ],
          },
        ],
      },
      {
        title: "Campaign flyers",
        blocks: [
          { type: "p", text: "A limited-time campaign with a 90-day free trial and consulting." },
          {
            type: "gallery",
            cols: 2,
            items: [
              g("flyer-ja-latest-front", "Latest campaign flyer (front)"),
              g("flyer-ja-latest-back", "Latest campaign flyer (back)"),
              g("flyer-ja-90days-pack", "Earlier campaign flyer: 90-day free pack (front)"),
              g("flyer-ja-campaign", "Earlier campaign flyer: details (back)"),
            ],
          },
        ],
      },
      {
        title: "Digital ads",
        blocks: [
          { type: "p", text: "Square ads for different industries, each with the same offer and call to action." },
          {
            type: "gallery",
            cols: 3,
            items: [
              g("ad-manufacturing", "Manufacturing"),
              g("ad-school", "Education and schools"),
              g("ad-lodging", "Lodging and tourism"),
              g("ad-clinic-owner", "Beauty clinic owners"),
              g("ad-hotel", "Hotels and tourism"),
              g("ad-clinic-salon", "Beauty clinics and salons"),
            ],
          },
        ],
      },
    ],
  },
  ja: {
    overview: [
      { label: "プロダクト", value: "Kotae（コタエ）：Tokyo Techiesが開発したAIチャットボット（kotae.ai）" },
      { label: "きっかけ", value: "2024年に、社内のニーズから開発がスタート" },
      { label: "制作物", value: "展示会で飾る・配るチラシ、ポスター、デジタル広告" },
      { label: "ブランドカラー", value: "プライマリーは紫、セカンダリーはオレンジ、ターシャリーは緑" },
      { label: "担当", value: "グラフィックデザイン、コピーライティング（AI活用）、アイデアのたたき台づくり（AI活用）、印刷の発注" },
    ],
    sections: [
      {
        title: "概要",
        blocks: [
          { type: "p", text: "Kotaeは、企業のWebサイト上でお客様の質問に答えるAIチャットボットです。2024年にTokyo Techiesで、まず社内のニーズに応えるために開発されました。" },
          { type: "p", text: "このページでは、私がデザインしたKotaeのマーケティング素材（チラシ、ポスター、デジタル広告）を紹介します。" },
        ],
      },
      {
        title: "背景",
        blocks: [
          { type: "p", text: "最初のチラシは英語で、最初のブランドスタイル（ダークグリーン）でつくりました。1度のリブランディングを経て、会社は広告を日本市場に絞る方針を決めました。" },
          { type: "p", text: "それ以降、展示会で飾ったり配ったりするためのチラシを数多くつくり、ポスターやデジタル広告も制作しました。すべて当時のブランドカラーで、プライマリーは紫、セカンダリーはオレンジ、ターシャリーは緑です。" },
        ],
      },
      {
        title: "進め方",
        blocks: [
          {
            type: "numbered",
            items: [
              { lead: "AIを使ってコピーを書く。", text: "AIの力を借りながら、コピーは自分で書き、言葉づかいと正確さをすべて確認しました。" },
              { lead: "AIでアイデアのたたき台をつくる。", text: "各素材のレイアウトやメッセージのアイデアも、AIでたたき台をつくりました。" },
              { lead: "営業チームのレビュー。", text: "お客様をいちばんよく知っている営業チームにたたき台を共有し、納得してもらえるまで調整しました。" },
              { lead: "Figmaでハイファイのデザインを作成。", text: "アイデアが承認されたら、Figmaで最終のデザインをつくりました。" },
              { lead: "印刷の発注。", text: "最終版が承認されたあと、Raksulでの印刷の発注は自分で行い、刷り上がったチラシは会社に届きました。" },
            ],
          },
        ],
      },
      {
        title: "デザインの考え方",
        blocks: [
          {
            type: "list",
            items: [
              { lead: "ひとつのシステムで、多くのフォーマットに。", text: "A4のチラシ、ポスター、正方形の広告で、同じ色、書体、製品画面を使い、どの素材を見てもKotaeだと分かるようにしました。" },
              { lead: "色の役割。", text: "紫は見出し、キーワード、行動を促す帯に使います。オレンジは強調とボタン、緑は枠やおすすめのオファーを引き立てるために使います。" },
              { lead: "製品を見せる。", text: "チャットやダッシュボードの実際の画面をコピーの横に置き、使うとどうなるかが伝わるようにしました。" },
              { lead: "相手に合わせて話しかける。", text: "チラシや広告は、大学、学校、ホテル、クリニック、製造業など、そのグループが思い当たる問いかけから始め、はっきりした次の一歩を示しています。" },
            ],
          },
        ],
      },
      {
        title: "初期の英語版チラシ",
        blocks: [
          { type: "p", text: "最初のブランドスタイル（ダークグリーン）でつくりました。" },
          {
            type: "gallery",
            cols: 2,
            items: [g("flyer-en-first-brand-intro", "製品紹介"), g("flyer-en-first-brand-why", "Kotaeが選ばれる理由")],
          },
        ],
      },
      {
        title: "リブランディング後のチラシ",
        blocks: [
          { type: "p", text: "同じレイアウトを、日本語版と英語版でつくりました。" },
          {
            type: "gallery",
            cols: 2,
            items: [
              g("flyer-ja-intro", "製品紹介（日本語）"),
              g("flyer-en-intro", "製品紹介（英語）"),
              g("flyer-ja-inbound-funnel", "機能紹介：顧客獲得の導線（日本語）"),
              g("flyer-en-inbound-funnel", "機能紹介：顧客獲得の導線（英語）"),
            ],
          },
        ],
      },
      {
        title: "相手に合わせたチラシ",
        blocks: [
          {
            type: "gallery",
            cols: 2,
            items: [
              g("flyer-ja-pain-points", "よくあるお悩みと、Kotaeでの解決"),
              g("flyer-ja-two-issues", "顧客対応と社内情報共有を同時に解決"),
              g("flyer-ja-university-builder", "大学向け：AIエージェントビルダー（表）"),
              g("flyer-ja-personas", "教員、事務職員、学生・保護者向け（裏）"),
              g("flyer-ja-university-partner", "パートナーのSRAグループとの共同チラシ（大学向け）"),
            ],
          },
        ],
      },
      {
        title: "キャンペーンのチラシ",
        blocks: [
          { type: "p", text: "90日間の無料トライアルとコンサルティングをつけた、期間限定のキャンペーンです。" },
          {
            type: "gallery",
            cols: 2,
            items: [
              g("flyer-ja-latest-front", "最新のキャンペーンチラシ（表）"),
              g("flyer-ja-latest-back", "最新のキャンペーンチラシ（裏）"),
              g("flyer-ja-90days-pack", "以前のキャンペーンチラシ：90日間無料パック（表）"),
              g("flyer-ja-campaign", "以前のキャンペーンチラシ：詳細（裏）"),
            ],
          },
        ],
      },
      {
        title: "デジタル広告",
        blocks: [
          { type: "p", text: "業種ごとにつくった正方形の広告です。どれも同じオファーと行動の呼びかけを使っています。" },
          {
            type: "gallery",
            cols: 3,
            items: [
              g("ad-manufacturing", "製造業"),
              g("ad-school", "教育・スクール"),
              g("ad-lodging", "宿泊施設・観光"),
              g("ad-clinic-owner", "美容クリニック経営者向け"),
              g("ad-hotel", "ホテル・観光"),
              g("ad-clinic-salon", "美容クリニック・サロン向け"),
            ],
          },
        ],
      },
    ],
  },
};
