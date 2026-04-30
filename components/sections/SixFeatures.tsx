import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sixFeatures } from "@/lib/content";

export function SixFeatures() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-surface border-y border-border"
      aria-labelledby="features-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Six Features"
          title={<span id="features-heading">「おやじの隠れ家」のこだわり</span>}
          lead="素材、工法、納期、価格 — どこにも妥協しない6つのポイント。"
        />
        <ul
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {sixFeatures.map((f) => (
            <li
              key={f.n}
              className="rounded-2xl bg-base p-8 border border-border h-full flex flex-col"
            >
              <p className="font-en text-accent text-2xl font-bold mb-3">{f.n}</p>
              <h3 className="text-primary text-xl mb-4 leading-snug">{f.title}</h3>
              <p className="text-text-muted leading-[1.9] text-base">{f.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
