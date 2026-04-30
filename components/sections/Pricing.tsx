import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { houseTypes, formatYen } from "@/lib/pricing";
import { PriceSimulator } from "@/components/interactive/PriceSimulator";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Lineup & Pricing"
          title={<span id="pricing-heading">価格・タイプ概要</span>}
          lead="ベースとなる3タイプから、用途・広さに合わせてカスタマイズできます。"
        />

        <ul
          className="grid gap-6 md:grid-cols-3 mb-12 md:mb-16"
          role="list"
        >
          {houseTypes.map((t) => (
            <li
              key={t.id}
              className="rounded-2xl border border-border bg-surface p-8 flex flex-col"
            >
              <p className="text-accent-700 text-xs font-medium tracking-[0.2em] uppercase mb-3">
                Type
              </p>
              <h3 className="font-serif text-primary text-2xl mb-3">{t.name}</h3>
              <p className="text-text-muted text-base leading-relaxed mb-6">
                {t.description}
              </p>
              <p className="text-3xl font-en font-bold text-primary mb-6 tabular-nums">
                {formatYen(t.basePrice)}
                <span className="text-base font-normal align-middle text-text-muted ml-1">
                  〜
                </span>
              </p>
              <ul className="space-y-2 mt-auto">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-text">
                    <span aria-hidden="true" className="text-accent">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <PriceSimulator />
      </Container>
    </section>
  );
}
