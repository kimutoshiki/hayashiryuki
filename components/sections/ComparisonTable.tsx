import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonRows } from "@/lib/content";

export function ComparisonTable() {
  return (
    <section
      id="comparison"
      className="py-20 md:py-28 bg-surface border-y border-border"
      aria-labelledby="comparison-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Comparison"
          title={<span id="comparison-heading">輸入キットガレージとの違い</span>}
          lead="同じ「キットガレージ」でも、素材・気候適合・健康への配慮で大きな差があります。"
        />

        {/* Desktop / tablet */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">
              おやじの隠れ家（国産無垢材）と一般的な輸入2×4キットガレージ（北米産ホワイトウッド）の比較
            </caption>
            <thead>
              <tr className="bg-primary text-white">
                <th scope="col" className="p-5 text-sm md:text-base font-medium">
                  比較項目
                </th>
                <th scope="col" className="p-5 text-sm md:text-base font-medium">
                  おやじの隠れ家
                  <span className="block text-xs text-white/70 font-normal mt-1">
                    国産無垢材
                  </span>
                </th>
                <th scope="col" className="p-5 text-sm md:text-base font-medium">
                  輸入2×4キットガレージ
                  <span className="block text-xs text-white/70 font-normal mt-1">
                    北米産ホワイトウッド
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-surface" : "bg-base"}
                >
                  <th scope="row" className="p-5 align-top font-medium text-primary border-t border-border">
                    {row.label}
                  </th>
                  <td className="p-5 align-top text-text border-t border-border">
                    {row.oyaji}
                  </td>
                  <td className="p-5 align-top text-text-muted border-t border-border">
                    {row.other}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile - stacked */}
        <ul className="md:hidden space-y-6" role="list">
          {comparisonRows.map((row) => (
            <li
              key={row.label}
              className="rounded-2xl border border-border bg-surface overflow-hidden"
            >
              <p className="bg-primary text-white p-4 font-medium">{row.label}</p>
              <dl className="p-4 space-y-4">
                <div>
                  <dt className="text-xs text-accent-700 font-medium uppercase tracking-wide mb-1">
                    おやじの隠れ家
                  </dt>
                  <dd className="text-text leading-relaxed">{row.oyaji}</dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-xs text-text-muted font-medium uppercase tracking-wide mb-1">
                    輸入2×4キットガレージ
                  </dt>
                  <dd className="text-text-muted leading-relaxed">{row.other}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
