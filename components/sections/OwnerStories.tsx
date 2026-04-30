"use client";

import { useId, useState } from "react";
import { MapPin, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ownerStories } from "@/lib/stories";
import { cn } from "@/lib/utils";

export function OwnerStories() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const story = ownerStories[active];

  const onTabKey = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (i + 1) % ownerStories.length;
      setActive(next);
      document.getElementById(`${baseId}-tab-${next}`)?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (i - 1 + ownerStories.length) % ownerStories.length;
      setActive(prev);
      document.getElementById(`${baseId}-tab-${prev}`)?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
      document.getElementById(`${baseId}-tab-0`)?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = ownerStories.length - 1;
      setActive(last);
      document.getElementById(`${baseId}-tab-${last}`)?.focus();
    }
  };

  return (
    <section
      id="stories"
      className="py-20 md:py-28"
      aria-labelledby="stories-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Owner Stories"
          title={<span id="stories-heading">オーナーの声</span>}
          lead="北は山梨から南は離島まで。「おやじの隠れ家」を選んでくださった方々の、リアルな声をご紹介します。"
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <div
            role="tablist"
            aria-label="オーナー事例の一覧"
            className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0"
          >
            {ownerStories.map((s, i) => (
              <button
                key={s.id}
                id={`${baseId}-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls={`${baseId}-panel-${i}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onTabKey(e, i)}
                className={cn(
                  "min-w-[10rem] lg:w-full text-left rounded-xl border px-5 py-4 transition-colors min-h-[44px] flex flex-col gap-1",
                  i === active
                    ? "bg-primary text-white border-primary"
                    : "bg-surface text-text border-border hover:border-primary/50",
                )}
              >
                <span className="font-serif font-bold text-base lg:text-lg">{s.customer}</span>
                <span
                  className={cn(
                    "text-xs flex items-center gap-1",
                    i === active ? "text-white/80" : "text-text-muted",
                  )}
                >
                  <MapPin size={12} aria-hidden="true" />
                  {s.location}・{s.use}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            {ownerStories.map((s, i) => (
              <article
                key={s.id}
                id={`${baseId}-panel-${i}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${i}`}
                hidden={i !== active}
                className="rounded-2xl bg-surface border border-border shadow-card p-8 md:p-12 h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Quote size={28} className="text-accent shrink-0 mt-1" aria-hidden="true" />
                  <h3 className="font-serif text-primary text-2xl md:text-3xl leading-snug">
                    {story.id === s.id ? story.headline : s.headline}
                  </h3>
                </div>
                <ul className="space-y-3 mb-6 list-disc pl-6 marker:text-accent">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="text-text-muted leading-[1.9]">
                      {b}
                    </li>
                  ))}
                </ul>
                <dl className="border-t border-border pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <dt className="text-xs text-text-muted/70 mb-1">お客様</dt>
                    <dd className="font-medium">{s.customer}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-text-muted/70 mb-1">所在地</dt>
                    <dd className="font-medium">{s.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-text-muted/70 mb-1">用途</dt>
                    <dd className="font-medium">{s.use}</dd>
                  </div>
                  {s.brandName && (
                    <div>
                      <dt className="text-xs text-text-muted/70 mb-1">屋号</dt>
                      <dd className="font-medium">{s.brandName}</dd>
                    </div>
                  )}
                  {s.publication && (
                    <div className="col-span-2 sm:col-span-4">
                      <dt className="text-xs text-text-muted/70 mb-1">掲載</dt>
                      <dd className="font-medium">{s.publication}</dd>
                    </div>
                  )}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
