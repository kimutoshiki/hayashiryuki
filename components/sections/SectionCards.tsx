import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionCards } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SectionCards() {
  return (
    <section
      id="explore"
      className="py-20 md:py-28 bg-surface border-y border-border"
      aria-labelledby="explore-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Explore"
          title={<span id="explore-heading">詳しく知りたいテーマを選ぶ</span>}
          lead="気になるテーマのバナーをタップ／クリックすると、その詳細ページへ移動します。"
        />

        <ul
          className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {sectionCards.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className={cn(
                  "group relative h-full rounded-2xl border p-7 md:p-8 flex flex-col gap-3 transition-all",
                  "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-accent",
                  c.accent
                    ? "bg-primary text-white border-primary hover:bg-primary-700 shadow-card"
                    : "bg-base border-border hover:border-primary/40 hover:shadow-card",
                )}
              >
                <span
                  className={cn(
                    "inline-flex items-center self-start text-[11px] tracking-[0.18em] uppercase font-medium px-2.5 py-1 rounded-full",
                    c.accent ? "bg-accent/30 text-white" : "bg-accent/12 text-accent-700",
                  )}
                >
                  {c.badge}
                </span>
                <p
                  className={cn(
                    "text-xs font-medium tracking-[0.2em] uppercase mt-1",
                    c.accent ? "text-accent" : "text-accent-700",
                  )}
                >
                  {c.eyebrow}
                </p>
                <h3
                  className={cn(
                    "font-serif text-2xl leading-tight",
                    c.accent ? "text-white" : "text-primary",
                  )}
                >
                  {c.title}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-[1.85] flex-1",
                    c.accent ? "text-white/85" : "text-text-muted",
                  )}
                >
                  {c.body}
                </p>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 text-sm font-medium mt-2 transition-transform group-hover:translate-x-1",
                    c.accent ? "text-accent" : "text-primary",
                  )}
                  aria-hidden="true"
                >
                  詳細を見る
                  <ArrowRight size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
