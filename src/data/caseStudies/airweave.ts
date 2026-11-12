import type { CaseStudy } from "../../types/Project";
import type { Lang } from "../../hooks/useLang";

const IMG = "/images/works/airweave/";

// Case study: Airweave social ad creatives (Meta ads, 4:5 static images).
export const airweaveCaseStudy: Record<Lang, CaseStudy> = {
  en: {
    overview: [
      { label: "Client", value: "Airweave, a premium Japanese bedding brand" },
      { label: "Products", value: "Pillow Slim (with a silk-touch pillowcase set) and Mattress Topper 1.0" },
      { label: "Channel", value: "Meta ads (Instagram and Facebook feed), 4:5 static images (1080 × 1350)" },
      { label: "Deliverables", value: "4 pieces: one video ad and one static image for each product (pillow and topper)" },
      { label: "Team", value: "Me, a senior designer in the early phase, our marketing and sales team, an external videographer, and the client's marketing team" },
      { label: "Timeline", value: "About 4 weeks, October to November 2026" },
      { label: "Tools", value: "Figma, AI-assisted mockups and image generation, the client's brand guideline" },
    ],
    sections: [
      {
        title: "Overview",
        blocks: [
          { type: "p", text: "I turned two premium bedding products into clear, mobile-first social ads that explain why the product is worth its price, not just how it looks. The client asked for one video ad and one static image for each product, four pieces in total." },
        ],
      },
      {
        title: "My role",
        blocks: [
          { type: "p", text: "In the early phase, a senior designer on the team visited Airweave's office with our marketing team to try the products in person. After that visit, the senior designer moved to another project and was also away on holiday, so the whole project was handed over to me." },
          { type: "p", text: "From then on I owned the creative work. Besides the static ads, I worked with an external videographer on the video ads: I passed on the ideas and directed the video script. Day to day, I worked with our marketing and sales team and the client's marketing team." },
        ],
      },
      {
        title: "The challenge",
        blocks: [
          { type: "p", text: "The brand's past ads were beautiful but only sold a mood: a celebrity ambassador, a soft photo, and a short emotional line. They gave no reason to believe, no product benefit, and no clear next step." },
          { type: "p", text: "The client wanted to reach new customers: people who know the name but have never tried the product. Their feedback set a clear bar:" },
          {
            type: "list",
            items: [
              { lead: "Make people stop and think \"what is this?\".", text: "A narrow angle like \"for people who like low pillows\" was too easy to dismiss, since a folded towel can do the same job." },
              { lead: "Show the benefit, not just the feature.", text: "Every claim had to answer \"what do I get from this?\"" },
              { lead: "Explain the price.", text: "A shopper comparing it with a low-cost pillow needs a reason to pay more." },
              { lead: "Work on a phone.", text: "Ads are seen for one or two seconds while scrolling, so one message must land at a glance." },
            ],
          },
        ],
      },
      {
        title: "My process",
        blocks: [
          { type: "p", text: "I worked in fast loops: explore wide, mock up on a shared canvas, get feedback, then narrow down." },
          {
            type: "numbered",
            items: [
              { lead: "Audit the starting point.", text: "I reviewed the past ads, the product pages and the client's brief to find what was missing: a number, a benefit, an offer, or a call to action." },
              { lead: "Learn the brand rules.", text: "I read the brand communication guideline (logo, colors, fonts, tone, claim rules) and checked every draft against it." },
              { lead: "Explore many angles.", text: "I mocked up more than 30 concepts across four directions: product facts, celebrity-led, \"surprise\" facts about the material, and problem-solution comparisons." },
              { lead: "Shortlist with the team.", text: "The senior designer and account team picked the strongest ideas, and I refined copy so each feature connected to a customer benefit." },
              { lead: "Iterate with the client.", text: "The static ads went through five or more feedback rounds, and the videos also went through many rounds. I explained the reason behind each change in short Japanese notes." },
              { lead: "Brief the videographer.", text: "I passed my ideas on to an external videographer and directed the video script for each product." },
              { lead: "Hand off clean files.", text: "Final layouts were rebuilt in Figma with the official logo, real product photos and approved copy." },
            ],
          },
          { type: "image", src: IMG + "exploration-board.jpg", caption: "Exploration board in Figma: more than 30 concepts, from the client brief to the feedback rounds", maxWidth: 560 },
        ],
      },
      {
        title: "Key design decisions",
        blocks: [
          { type: "p", text: "Both final ads follow one rule: one main message, one main visual, and a clear order of reading from top to bottom." },
          { type: "h", text: "Pillow Slim: \"Thin, yet firmly supportive\"" },
          { type: "image", src: IMG + "pillow-slim.jpg", caption: "Final ad: Pillow Slim (4:5)", maxWidth: 460 },
          {
            type: "table",
            head: ["Before", "After", "Why"],
            rows: [
              ["Mood photo and an emotional line only", "Headline 「薄いのに、しっかり支える。」 (Thin, yet firmly supportive) with sub-copy 「高い枕が合わない方へ。」 (For people who find high pillows uncomfortable)", "Names the target and the benefit in one glance"],
              ["Three equal feature boxes (height, washable, silk)", "One real side-view photo with a \"5 to 7 cm\" height marker, plus silk as a smaller extra", "The client asked to rank benefits, not list them"],
              ["Product name far from the celebrity", "Product name and product photo placed right next to the ambassador", "Viewers connect the face with the product instantly"],
            ],
          },
          { type: "h", text: "Mattress Topper 1.0: \"No sinking, a better sleeping posture\"" },
          { type: "image", src: IMG + "mattress-topper.jpg", caption: "Final ad: Mattress Topper 1.0 (4:5)", maxWidth: 460 },
          {
            type: "table",
            head: ["Before", "After", "Why"],
            rows: [
              ["Lifestyle photo only; viewers could not tell what the product does", "Lifestyle photo with a label pointing at the topper on the bed", "Shows \"you lay it on your current mattress\" with a real photo"],
              ["Abstract shapes for the body", "Line-art people in the brand's own illustration style, lying side by side", "The client asked for figures that clearly read as people"],
              ["Four blocks of content that felt like a print ad", "Three blocks: photo with headline, before/after posture, product bar", "Easier to read in one or two seconds on a phone"],
              ["\"Mattress only: hips sink\"", "Left: \"A posture where the hips sink\". Right: \"Add one topper for a better posture\"", "The client also sells mattresses, so the copy avoids criticizing them"],
            ],
          },
          { type: "p", text: "I also explored a \"surprise\" series for people new to the brand (a washable core, a core that is mostly air, a see-through material, and the brand's origin story). These helped the team agree that every feature must link to a clear customer benefit." },
        ],
      },
      {
        title: "Working within constraints",
        blocks: [
          { type: "p", text: "Much of the work was making strong ads inside strict rules, and flagging risks early so the client never had to." },
          {
            type: "list",
            items: [
              { lead: "Brand guideline.", text: "I matched the official navy and gray palette, used the supplied logo files without changes, and followed the logo spacing and font rules." },
              { lead: "Advertising law for bedding.", text: "In Japan, bedding cannot claim to cure or relieve pain. I rewrote lines like \"relieves neck pain\" into safe, factual copy (\"for people who find high pillows uncomfortable\") and marked definite claims for the client's legal check." },
              { lead: "AI imagery.", text: "I used AI-generated images to test ideas quickly, but flagged where they did not match the real product (shape, color, a distorted logo tag). Final ads used real product photos where accuracy mattered." },
              { lead: "Talent and photo rights.", text: "I reminded the team to confirm usage rights for the ambassador's photos in new layouts and paid placements." },
              { lead: "Mobile readability.", text: "I set a minimum text size and kept each ad to about three text elements." },
            ],
          },
        ],
      },
      {
        title: "Outcome and learnings",
        blocks: [
          { type: "p", text: "The client asked for four pieces: one static image and one video ad for each product. All four went through several feedback rounds, were approved by the client, and have been submitted. For the videos, I directed the scripts together with an external videographer." },
          {
            type: "list",
            items: [
              { lead: "Results.", text: "Not available yet, because the ads are still running." },
              { lead: "Client relationship.", text: "After the handover, the work ran between me, our marketing and sales team, and the client's marketing team. Short, reasoned explanations in Japanese for every change helped each feedback round move faster." },
            ],
          },
          { type: "h", text: "What I learned" },
          {
            type: "numbered",
            items: [
              { lead: "Benefit beats feature.", text: "\"Washable core\" only works when it becomes \"you can always keep it clean.\"" },
              { lead: "One ad, one job.", text: "When the client said a layout looked like a print ad, the fix was removing content, not shrinking it." },
              { lead: "Respect the client's whole business.", text: "A line that criticized mattresses had to go, because the brand also sells them." },
              { lead: "Use AI for speed, not as the final answer.", text: "AI images were great for testing ideas, but real product photos built trust in the final ads." },
            ],
          },
        ],
      },
    ],
  },

  ja: {
    overview: [
      { label: "クライアント", value: "エアウィーヴ（Airweave）、日本のプレミアム寝具ブランド" },
      { label: "商品", value: "ピロー スリム（シルクタッチのピローケース付きセット）と、マットレストッパー 1.0" },
      { label: "配信面", value: "Meta広告（InstagramとFacebookのフィード）、4:5の静止画（1080 × 1350）" },
      { label: "制作物", value: "4点：商品ごとに、動画広告1本と静止画1枚（ピローとトッパー）" },
      { label: "チーム", value: "私、初期フェーズのシニアデザイナー、社内のマーケティング・営業チーム、外部のビデオグラファー、クライアントのマーケティングチーム" },
      { label: "期間", value: "約4週間（2026年10月から11月）" },
      { label: "ツール", value: "Figma、AIを使ったモックアップと画像生成、クライアントのブランドガイドライン" },
    ],
    sections: [
      {
        title: "概要",
        blocks: [
          { type: "p", text: "プレミアム寝具2商品を、スマホでもひと目で伝わるソーシャル広告に仕上げました。見た目だけでなく、その価格に見合う理由まで伝えることを目指しました。クライアントからは、商品ごとに動画広告1本と静止画1枚、合わせて4点の制作を依頼されました。" },
        ],
      },
      {
        title: "私の役割",
        blocks: [
          { type: "p", text: "初期のフェーズでは、チームのシニアデザイナーが、社内のマーケティングチームと一緒にエアウィーヴのオフィスを訪れ、商品を実際に体験しました。その後、シニアデザイナーは別のプロジェクトに移り、休暇にも入ったため、プロジェクト全体を私が引き継ぎました。" },
          { type: "p", text: "それ以降は、私がクリエイティブを一貫して担当しました。静止画広告に加えて、動画広告では外部のビデオグラファーと一緒に、アイデアを伝え、動画の台本のディレクションをしました。日々のやりとりは、社内のマーケティング・営業チームと、クライアントのマーケティングチームとの間で進めました。" },
        ],
      },
      {
        title: "課題",
        blocks: [
          { type: "p", text: "これまでのブランド広告は美しい一方で、ムードを売るだけでした。有名人のアンバサダー、やわらかい写真、短い感情的なひと言。信じる理由も、商品のメリットも、次の行動もありませんでした。" },
          { type: "p", text: "クライアントが狙ったのは、名前は知っているけれど、まだ使ったことのない新規のお客さまです。フィードバックから、はっきりした基準が見えてきました。" },
          {
            type: "list",
            items: [
              { lead: "「これは何？」と立ち止まってもらう。", text: "「低い枕が好きな人向け」のような狭い切り口は、簡単にスルーされてしまいます。たたんだタオルでも同じことができるからです。" },
              { lead: "機能ではなく、メリットを見せる。", text: "すべての訴求は、「それで私は何が得られるの？」に答える必要がありました。" },
              { lead: "価格に見合う理由を説明する。", text: "低価格の枕と比べているお客さまには、高い方を選ぶ理由が必要です。" },
              { lead: "スマホで伝わるようにする。", text: "広告は、スクロール中の1、2秒で見られます。だから、ひとつのメッセージがひと目で届かなければなりません。" },
            ],
          },
        ],
      },
      {
        title: "プロセス",
        blocks: [
          { type: "p", text: "素早いサイクルで進めました。広く探索し、共有キャンバスでモックアップを作り、フィードバックをもらって、絞り込みます。" },
          {
            type: "numbered",
            items: [
              { lead: "出発点を見直す。", text: "過去の広告、商品ページ、クライアントのブリーフを確認し、足りないものを探しました。数字、メリット、オファー、行動を促す言葉のどれかです。" },
              { lead: "ブランドのルールを学ぶ。", text: "ブランドコミュニケーションガイドライン（ロゴ、色、フォント、トーン、表現のルール）を読み込み、すべての案をそれに照らして確認しました。" },
              { lead: "たくさんの切り口を試す。", text: "商品の事実、有名人起用、素材の「意外な事実」、課題解決の比較という4つの方向で、30以上のコンセプトをモックアップしました。" },
              { lead: "チームで絞り込む。", text: "シニアデザイナーとアカウントチームが強い案を選び、私は各機能がお客さまのメリットにつながるようにコピーを磨きました。" },
              { lead: "クライアントと改善を重ねる。", text: "静止画広告は5回以上、動画も何度もフィードバックを受けました。変更の理由は、短い日本語のメモで説明しながら進めました。" },
              { lead: "ビデオグラファーに伝える。", text: "外部のビデオグラファーにアイデアを伝え、商品ごとの動画の台本をディレクションしました。" },
              { lead: "整ったファイルを引き渡す。", text: "最終レイアウトは、公式ロゴ、本物の商品写真、承認済みのコピーを使って、Figmaで作り直しました。" },
            ],
          },
          { type: "image", src: IMG + "exploration-board.jpg", caption: "Figmaの検討ボード：クライアントのブリーフからフィードバックの各回まで、30以上のコンセプト", maxWidth: 560 },
        ],
      },
      {
        title: "主なデザインの判断",
        blocks: [
          { type: "p", text: "2つの最終広告は、どちらもひとつのルールに従っています。メインメッセージはひとつ、メインビジュアルもひとつ、そして上から下へ読む順番がはっきりしていることです。" },
          { type: "h", text: "ピロー スリム：「薄いのに、しっかり支える。」" },
          { type: "image", src: IMG + "pillow-slim.jpg", caption: "最終広告：ピロー スリム（4:5）", maxWidth: 460 },
          {
            type: "table",
            head: ["変更前", "変更後", "理由"],
            rows: [
              ["ムードのある写真と、感情的なひと言だけ", "見出し「薄いのに、しっかり支える。」と、サブコピー「高い枕が合わない方へ。」", "ターゲットとメリットを、ひと目で伝えられる"],
              ["同じ大きさの特徴ボックスが3つ（高さ、洗える、シルク）", "実際の横からの写真に「約5〜7cm」の高さの目印を入れ、シルクは小さな追加の特徴として配置", "クライアントから、メリットを並べるのではなく、優先順位をつけてほしいと言われた"],
              ["商品名がアンバサダーから離れていた", "商品名と商品写真を、アンバサダーのすぐ隣に配置", "顔と商品がすぐに結びつく"],
            ],
          },
          { type: "h", text: "マットレストッパー 1.0：「腰が沈み込まず、理想的な寝姿勢へ。」" },
          { type: "image", src: IMG + "mattress-topper.jpg", caption: "最終広告：マットレストッパー 1.0（4:5）", maxWidth: 460 },
          {
            type: "table",
            head: ["変更前", "変更後", "理由"],
            rows: [
              ["ライフスタイル写真だけで、商品が何をするものかわからなかった", "ライフスタイル写真に、ベッドの上のトッパーを指すラベルを追加", "「今のマットレスの上に敷く」ことを、本物の写真で見せられる"],
              ["体が抽象的な図形だった", "ブランド独自のイラストスタイルで描いた人物を、並べて表示", "クライアントから、人物だとはっきりわかる図にしてほしいと言われた"],
              ["印刷物の広告のような、4つのブロック構成", "3つのブロック（見出し付きの写真、寝姿勢のビフォーアフター、商品バー）", "スマホで1、2秒でも読みやすい"],
              ["「マットレスだけ：腰が沈む」", "左「腰が沈み込む寝姿勢」、右「トッパーを1枚重ねて、理想的な寝姿勢へ」", "クライアントはマットレスも販売しているため、マットレスを批判しない表現にした"],
            ],
          },
          { type: "p", text: "ブランドを初めて知る人向けの「意外な事実」シリーズも検討しました（洗えるコア、ほとんどが空気でできたコア、透けて見える素材、ブランドの誕生ストーリー）。この検討が、すべての特徴はお客さまのメリットにつなげるべき、というチームの共通認識につながりました。" },
        ],
      },
      {
        title: "制約の中でのデザイン",
        blocks: [
          { type: "p", text: "厳しいルールの中で強い広告をつくることが、仕事の大きな部分でした。リスクは早めに指摘して、クライアントが気づく前に対処しました。" },
          {
            type: "list",
            items: [
              { lead: "ブランドガイドライン。", text: "公式のネイビーとグレーのパレットに合わせ、支給されたロゴファイルを加工せずに使い、ロゴの余白とフォントのルールに従いました。" },
              { lead: "寝具の広告表現のルール。", text: "日本では、寝具は痛みの治療や緩和をうたえません。「首の痛みを和らげる」のような表現を、安全で事実に基づくコピー（「高い枕が合わない方へ」）に書き直し、断定的な表現はクライアントの法務確認用にマークしました。" },
              { lead: "AI画像。", text: "アイデアを素早く試すためにAI生成画像を使いましたが、実際の商品と合わない点（形、色、ゆがんだロゴタグ）は指摘しました。正確さが大切な場面では、最終広告に本物の商品写真を使いました。" },
              { lead: "タレントと写真の権利。", text: "アンバサダーの写真を新しいレイアウトや有料広告で使う場合は、使用権の確認が必要だと、チームに伝えました。" },
              { lead: "スマホでの読みやすさ。", text: "最小の文字サイズを決め、1つの広告に入れる文字要素は3つ程度にしました。" },
            ],
          },
        ],
      },
      {
        title: "成果と学び",
        blocks: [
          { type: "p", text: "クライアントからの依頼は、商品ごとに静止画1枚と動画広告1本、合わせて4点でした。4点とも何度かのフィードバックを経て、クライアントに承認され、提出済みです。動画では、外部のビデオグラファーと一緒に台本をディレクションしました。" },
          {
            type: "list",
            items: [
              { lead: "結果。", text: "まだ出ていません。広告は現在も配信中です。" },
              { lead: "クライアントとの関係。", text: "引き継ぎのあとは、私、社内のマーケティング・営業チーム、クライアントのマーケティングチームの間で進めました。すべての変更について、日本語で短く理由を説明したことで、フィードバックの1回ごとが速く進みました。" },
            ],
          },
          { type: "h", text: "学んだこと" },
          {
            type: "numbered",
            items: [
              { lead: "機能よりメリット。", text: "「洗えるコア」は、「いつも清潔に保てる」という言葉になってはじめて伝わります。" },
              { lead: "1つの広告に、1つの役割。", text: "クライアントに印刷物の広告のようだと言われたとき、直す方法は、文字を小さくすることではなく、内容を減らすことでした。" },
              { lead: "クライアントの事業全体を尊重する。", text: "マットレスを批判する表現は、ブランドがマットレスも売っているため、削る必要がありました。" },
              { lead: "AIはスピードのために使い、最終回答にはしない。", text: "AI画像はアイデアを試すのにとても便利でしたが、最終広告の信頼感をつくったのは本物の商品写真でした。" },
            ],
          },
        ],
      },
    ],
  },
};
