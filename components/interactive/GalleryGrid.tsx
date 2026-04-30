"use client";

import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Item = { id: string; title: string; caption: string };

export function GalleryGrid({ items }: { items: Item[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (activeIdx === null) return;
    prevFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      else if (e.key === "ArrowRight") setActiveIdx((i) => (i === null ? null : (i + 1) % items.length));
      else if (e.key === "ArrowLeft")
        setActiveIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length));
      else if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prevFocusRef.current?.focus();
    };
  }, [activeIdx, items.length]);

  const active = activeIdx !== null ? items[activeIdx] : null;

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {items.map((it, i) => (
          <li key={it.id}>
            <button
              type="button"
              onClick={() => setActiveIdx(i)}
              className="block w-full text-left rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/40 transition-colors focus-visible:ring-3 focus-visible:ring-accent"
            >
              <div
                aria-hidden="true"
                className="aspect-[4/3] bg-gradient-to-br from-primary/15 via-accent/8 to-cta/12 flex items-center justify-center text-primary/30 font-serif text-4xl"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="p-5">
                <p className="font-serif font-bold text-primary mb-1">{it.title}</p>
                <p className="text-sm text-text-muted leading-relaxed">{it.caption}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-xs text-text-muted">
        ※ ギャラリー画像はプレースホルダーです。本番では実施工事例の写真と差し替えてください。
      </p>

      {active && activeIdx !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-dialog-title"
          className="fixed inset-0 z-[100] bg-ink/85 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveIdx(null);
          }}
        >
          <div className="relative bg-surface rounded-2xl max-w-3xl w-full overflow-hidden">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setActiveIdx(null)}
              className="absolute top-3 right-3 z-10 w-12 h-12 rounded-full bg-base text-primary inline-flex items-center justify-center hover:bg-base/90"
              aria-label="閉じる"
            >
              <X size={22} aria-hidden="true" />
            </button>
            <div
              aria-hidden="true"
              className="aspect-[4/3] bg-gradient-to-br from-primary/15 via-accent/8 to-cta/12 flex items-center justify-center text-primary/30 font-serif text-7xl"
            >
              {String(activeIdx + 1).padStart(2, "0")}
            </div>
            <div className="p-6 md:p-8">
              <h2
                id="gallery-dialog-title"
                className="font-serif text-primary text-xl md:text-2xl mb-2"
              >
                {active.title}
              </h2>
              <p className="text-text-muted leading-relaxed">{active.caption}</p>
            </div>
            <div className="px-6 md:px-8 pb-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length))
                }
                className="inline-flex items-center gap-2 text-primary px-4 py-3 rounded-lg hover:bg-primary/5 min-h-[44px]"
                aria-label="前の画像"
              >
                <ChevronLeft size={20} aria-hidden="true" />
                前へ
              </button>
              <p className="text-sm text-text-muted">
                {activeIdx + 1} / {items.length}
              </p>
              <button
                type="button"
                onClick={() => setActiveIdx((i) => (i === null ? null : (i + 1) % items.length))}
                className="inline-flex items-center gap-2 text-primary px-4 py-3 rounded-lg hover:bg-primary/5 min-h-[44px]"
                aria-label="次の画像"
              >
                次へ
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
