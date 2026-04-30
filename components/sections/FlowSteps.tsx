import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "ヒアリング・ご相談",
    body:
      "用途、設置場所、ご予算、ご希望のオプションをじっくりお聞きします。資料請求からのスタートでもOK。",
  },
  {
    n: "02",
    title: "プラン提案・お見積り",
    body:
      "最適なタイプと仕様をご提案。明朗な見積もりで、後から金額が変わる心配はありません。",
  },
  {
    n: "03",
    title: "ご契約・設計",
    body:
      "現地調査・基礎設計・必要に応じた建築確認申請。お客様のこだわりを反映した最終図面を作成。",
  },
  {
    n: "04",
    title: "国内工場でプレカット加工",
    body:
      "全部材を国内専用工場で精密加工。品質のばらつきを抑え、現場の端材も最小限に。",
  },
  {
    n: "05",
    title: "現地配送・本体組み立て（最短1日）",
    body:
      "プレカット済みの部材が到着。土台伏せ・構造組立・壁・屋根・床まで、人数が揃えば1日で本体完成。",
  },
  {
    n: "06",
    title: "仕上げ・引き渡し（約3週間）",
    body:
      "セルフビルドの場合はここから自分たちで。完成引き渡しをご希望の場合も、契約から約3週間でお引き渡し。",
  },
] as const;

export function FlowSteps() {
  return (
    <section
      id="flow-steps"
      className="py-20 md:py-28"
      aria-labelledby="flow-steps-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Process"
          title={<span id="flow-steps-heading">ご相談から引き渡しまで</span>}
          lead="2006年、24時間TVの放映時間内で組み立てを実証してから、その短工期は変わりません。"
        />

        <ol className="relative space-y-6 md:space-y-8" role="list">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid gap-5 md:grid-cols-12 items-start rounded-2xl border border-border bg-surface p-6 md:p-8"
            >
              <div className="md:col-span-3 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="font-en text-3xl md:text-4xl font-bold text-accent"
                >
                  {s.n}
                </span>
                <span className="hidden md:block w-12 h-px bg-border" aria-hidden="true" />
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-primary text-xl md:text-2xl mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-text-muted leading-[1.95]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
