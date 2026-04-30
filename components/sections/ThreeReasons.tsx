import { TreePine, Clock4, JapaneseYen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { threeReasons } from "@/lib/content";

const iconMap = {
  tree: TreePine,
  clock: Clock4,
  yen: JapaneseYen,
} as const;

export function ThreeReasons() {
  return (
    <section
      id="reasons"
      className="py-20 md:py-28"
      aria-labelledby="reasons-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Why Oyaji"
          title={<span id="reasons-heading">3つの選ばれる理由</span>}
          lead="数あるキットハウス・キットガレージの中で、お客様に「ここで建てたい」と選んでいただける理由は、大きく3つあります。"
        />
        <ul
          className="grid gap-6 md:gap-8 md:grid-cols-3"
          role="list"
        >
          {threeReasons.map((r, i) => {
            const Icon = iconMap[r.icon as keyof typeof iconMap];
            return (
              <li
                key={r.title}
                className="rounded-2xl border border-border bg-surface p-8 md:p-10 shadow-card"
              >
                <div className="flex items-center justify-between mb-6">
                  <Icon size={36} className="text-accent" aria-hidden="true" />
                  <span className="font-en text-text-muted/40 text-3xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-primary text-xl md:text-2xl mb-4 leading-snug">
                  {r.title}
                </h3>
                <p className="text-text-muted leading-[1.9] text-base">{r.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
