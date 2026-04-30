export const navItems = [
  { href: "/spec/", label: "仕様・価格" },
  { href: "/flow/", label: "組み立ての流れ" },
  { href: "/gallery/", label: "完成品ギャラリー" },
  { href: "/media/", label: "メディア掲載" },
  { href: "/agency/", label: "代理店・施工店" },
  { href: "/contact/", label: "資料請求" },
] as const;

export type SectionCard = {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  badge: string;
  accent?: boolean;
};

export const sectionCards: readonly SectionCard[] = [
  {
    href: "/spec/",
    eyebrow: "Spec & Pricing",
    title: "仕様・価格表",
    body: "6つの特徴、輸入キットガレージとの比較、ミニ188万円〜のラインナップ、概算価格シミュレーター。",
    badge: "全タイプ価格",
  },
  {
    href: "/flow/",
    eyebrow: "Flow",
    title: "組み立ての流れ",
    body: "ヒアリングから設計、プレカット、本体1日組立、引き渡しまで。板倉工法の解説と3Dモデルも。",
    badge: "本体1日施工",
  },
  {
    href: "/gallery/",
    eyebrow: "Gallery",
    title: "完成品ギャラリー",
    body: "セカンドハウス、店舗、ガレージハウス、ピアノ教室、離島の住居。5組のオーナー事例を詳しくご紹介。",
    badge: "オーナーの声",
  },
  {
    href: "/media/",
    eyebrow: "Media",
    title: "メディア掲載・受賞",
    body: "Garage Life誌での特集、東京モーターショー出展、新住宅ジャーナル、グッドデザイン賞2014受賞。",
    badge: "GOOD DESIGN 2014",
  },
  {
    href: "/agency/",
    eyebrow: "Agency",
    title: "代理店・施工店",
    body: "全国50社の認定代理店ネットワーク。北海道から沖縄、離島まで施工対応エリアをご確認ください。",
    badge: "全国50社",
  },
  {
    href: "/contact/",
    eyebrow: "Free Brochure",
    title: "無料 資料請求",
    body: "「夢の隠れ家計画ガイドブック」を無料でお届け。訪問・電話営業は一切いたしません。",
    badge: "ガイドブック無料",
    accent: true,
  },
];

export const threeReasons = [
  {
    icon: "tree",
    title: "やっぱり、木がいい。",
    body:
      "桧・杉・米松。日本で育った無垢材だけを使い、香り・手触り・調湿性まで本物にこだわる。住む人の健康と一緒に、年月とともに表情を深めていきます。",
  },
  {
    icon: "clock",
    title: "工期は、本体わずか1日。",
    body:
      "国内工場で精度の高いプレカット加工を施した部材だから、本体組み立ては最短1日。完成引渡しでも約3週間で仕上がります。",
  },
  {
    icon: "yen",
    title: "明朗な、適正価格。",
    body:
      "ミニタイプ188万円〜、標準Aタイプ288万円〜。規格化と工場集約で、無垢材を惜しみなく使いながら手に届く価格を実現しました。",
  },
] as const;

export const sixFeatures = [
  {
    n: "01",
    title: "オール天然無垢木材へのこだわり",
    body:
      "日本の木ならではの色合い、香り、手触り。高温多湿な日本の気候風土に調和し、爽やかな空気を運んでくれます。集成材や合板に頼らず、住む人の健康にも配慮した素材選びです。",
  },
  {
    n: "02",
    title: "1日で本体工事完成",
    body:
      "2006年、24時間テレビの放映時間内で組み立てを実証。すべての加工は国内工場でプレカットしているのでクオリティが高く、人数が揃えば1日で本体が完成。完成引渡しをご希望の場合も約3週間です。",
  },
  {
    n: "03",
    title: "美しい仕上がりへのこだわり",
    body:
      "国内の専用工場で全部材をプレカット。品質のばらつきが少なく、現場での端材も最小限に抑えるエコロジー設計。2014年グッドデザイン賞を受賞しました。",
  },
  {
    n: "04",
    title: "セルフビルドも可能",
    body:
      "プレカット済みなので難しい加工は不要。図解・写真入りの組み立てマニュアル付き。難しい部分はプロへ任せ、家族や仲間と一緒に建てる楽しみを共有できます。",
  },
  {
    n: "05",
    title: "耐震性・耐久性",
    body:
      "校倉工法をヒントにした独自の板倉工法で、震度6〜7相当の地震に耐える強度を確保。オプションで1.5倍の強度カスタムや断熱材追加も可能です。",
  },
  {
    n: "06",
    title: "リーズナブルな価格",
    body:
      "無垢材をふんだんに使用しながら、規格化と加工コストの最適化で標準仕様288万円〜を実現。ミニタイプは188万円〜から。",
  },
] as const;

export const useCases = [
  { icon: "car", title: "愛車を眺められるガレージが欲しい" },
  { icon: "users", title: "週末に仲間と集まれる空間が欲しい" },
  { icon: "mountain", title: "お気に入りの場所に小さな別荘を" },
  { icon: "palette", title: "趣味・仕事に没頭できるアトリエ" },
  { icon: "home", title: "セカンドハウスは木の家がいい" },
] as const;

export const comparisonRows = [
  {
    label: "日本の気候への適合",
    oyaji: "調湿性に優れ、高温多湿に適合。加湿器・乾燥機不要。",
    other: "北米など乾燥地帯に適する木材で、日本の気候とは相性が異なる。",
  },
  {
    label: "耐久性",
    oyaji: "芯持ち材で強度が高い。",
    other: "腐朽・シロアリに弱いとされる。",
  },
  {
    label: "健康への配慮",
    oyaji: "一枚板で接着剤不要。シックハウスと無縁の空気感。",
    other: "接着剤臭が充満することがあり、シックハウスへの懸念。",
  },
  {
    label: "デザイン性",
    oyaji: "グッドデザイン賞 2014 受賞。",
    other: "カラーバリエーションでの選択が中心。",
  },
] as const;

export const mediaMentions = [
  { name: "Garage Life", note: "趣味のガレージ専門誌で複数回の特集" },
  { name: "東京モーターショー", note: "2013年・2015年に出展" },
  { name: "新住宅ジャーナル", note: "建築業界誌に紹介記事" },
  { name: "リフォーム経済新聞", note: "工法・市場の解説記事に掲載" },
  { name: "GOOD DESIGN AWARD 2014", note: "プロダクト/建築領域で受賞" },
] as const;
