export type HouseType = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  baseSizeTsubo: number;
  perTsuboPrice: number;
  features: string[];
};

export const houseTypes: HouseType[] = [
  {
    id: "mini",
    name: "ミニタイプ",
    description: "間口4m × 奥行4m〜の小型キット。書斎・アトリエ・趣味部屋に。",
    basePrice: 1_880_000,
    baseSizeTsubo: 4,
    perTsuboPrice: 250_000,
    features: ["プレカット国産無垢材", "本体組立 1日〜", "セルフビルド対応"],
  },
  {
    id: "standard",
    name: "標準Aタイプ",
    description: "間口6m × 奥行5mの定番サイズ。車2台分のガレージや別荘に。",
    basePrice: 2_880_000,
    baseSizeTsubo: 9,
    perTsuboPrice: 280_000,
    features: ["板倉工法による高耐震", "グッドデザイン賞 2014 受賞", "オプションでロフト追加可"],
  },
  {
    id: "plus",
    name: "PLUS（住宅仕様）",
    description: "断熱・水回り・住宅基準の仕様強化。ガレージハウス・本格住宅に。",
    basePrice: 4_980_000,
    baseSizeTsubo: 12,
    perTsuboPrice: 350_000,
    features: ["断熱材標準装備", "震度6〜7対応・最大1.5倍強度", "住宅仕様の断熱・気密"],
  },
];

export function estimatePrice(typeId: string, tsubo: number): number {
  const t = houseTypes.find((h) => h.id === typeId);
  if (!t) return 0;
  const extraTsubo = Math.max(0, tsubo - t.baseSizeTsubo);
  return t.basePrice + extraTsubo * t.perTsuboPrice;
}

export function formatYen(amount: number): string {
  if (amount >= 10000) {
    const man = Math.round(amount / 10000);
    return `${man.toLocaleString("ja-JP")}万円`;
  }
  return `${amount.toLocaleString("ja-JP")}円`;
}
