export type PrefectureCount = {
  code: string;
  name: string;
  region: string;
  agents: number;
};

export const agentNetwork: PrefectureCount[] = [
  { code: "01", name: "北海道", region: "hokkaido", agents: 2 },
  { code: "02", name: "青森県", region: "tohoku", agents: 1 },
  { code: "03", name: "岩手県", region: "tohoku", agents: 1 },
  { code: "04", name: "宮城県", region: "tohoku", agents: 1 },
  { code: "05", name: "秋田県", region: "tohoku", agents: 1 },
  { code: "06", name: "山形県", region: "tohoku", agents: 1 },
  { code: "07", name: "福島県", region: "tohoku", agents: 1 },
  { code: "08", name: "茨城県", region: "kanto", agents: 1 },
  { code: "09", name: "栃木県", region: "kanto", agents: 1 },
  { code: "10", name: "群馬県", region: "kanto", agents: 1 },
  { code: "11", name: "埼玉県", region: "kanto", agents: 1 },
  { code: "12", name: "千葉県", region: "kanto", agents: 1 },
  { code: "13", name: "東京都", region: "kanto", agents: 2 },
  { code: "14", name: "神奈川県", region: "kanto", agents: 2 },
  { code: "15", name: "新潟県", region: "chubu", agents: 1 },
  { code: "16", name: "富山県", region: "chubu", agents: 1 },
  { code: "17", name: "石川県", region: "chubu", agents: 1 },
  { code: "18", name: "福井県", region: "chubu", agents: 1 },
  { code: "19", name: "山梨県", region: "chubu", agents: 1 },
  { code: "20", name: "長野県", region: "chubu", agents: 1 },
  { code: "21", name: "岐阜県", region: "chubu", agents: 1 },
  { code: "22", name: "静岡県", region: "chubu", agents: 1 },
  { code: "23", name: "愛知県", region: "chubu", agents: 2 },
  { code: "24", name: "三重県", region: "kansai", agents: 1 },
  { code: "25", name: "滋賀県", region: "kansai", agents: 1 },
  { code: "26", name: "京都府", region: "kansai", agents: 1 },
  { code: "27", name: "大阪府", region: "kansai", agents: 2 },
  { code: "28", name: "兵庫県", region: "kansai", agents: 1 },
  { code: "29", name: "奈良県", region: "kansai", agents: 1 },
  { code: "30", name: "和歌山県", region: "kansai", agents: 1 },
  { code: "31", name: "鳥取県", region: "chugoku", agents: 1 },
  { code: "32", name: "島根県", region: "chugoku", agents: 1 },
  { code: "33", name: "岡山県", region: "chugoku", agents: 1 },
  { code: "34", name: "広島県", region: "chugoku", agents: 1 },
  { code: "35", name: "山口県", region: "chugoku", agents: 1 },
  { code: "36", name: "徳島県", region: "shikoku", agents: 1 },
  { code: "37", name: "香川県", region: "shikoku", agents: 1 },
  { code: "38", name: "愛媛県", region: "shikoku", agents: 1 },
  { code: "39", name: "高知県", region: "shikoku", agents: 1 },
  { code: "40", name: "福岡県", region: "kyushu", agents: 3 },
  { code: "41", name: "佐賀県", region: "kyushu", agents: 2 },
  { code: "42", name: "長崎県", region: "kyushu", agents: 1 },
  { code: "43", name: "熊本県", region: "kyushu", agents: 1 },
  { code: "44", name: "大分県", region: "kyushu", agents: 1 },
  { code: "45", name: "宮崎県", region: "kyushu", agents: 1 },
  { code: "46", name: "鹿児島県", region: "kyushu", agents: 1 },
  { code: "47", name: "沖縄県", region: "okinawa", agents: 1 },
];

export const totalAgents = agentNetwork.reduce((sum, p) => sum + p.agents, 0);
