import { Container } from "@/components/ui/Container";
import { mediaMentions } from "@/lib/content";

export function MediaStrip() {
  return (
    <section
      id="media"
      className="py-16 md:py-20 bg-surface border-y border-border"
      aria-labelledby="media-heading"
    >
      <Container>
        <h2
          id="media-heading"
          className="text-center text-sm md:text-base font-medium tracking-[0.25em] text-accent-700 uppercase mb-10"
        >
          Media & Awards — メディア掲載・受賞実績
        </h2>
        <ul
          className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6"
          role="list"
        >
          {mediaMentions.map((m) => (
            <li
              key={m.name}
              className="rounded-xl border border-border bg-base px-5 py-6 text-center"
            >
              <p className="font-serif font-bold text-primary text-lg md:text-xl leading-tight mb-2">
                {m.name}
              </p>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                {m.note}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
