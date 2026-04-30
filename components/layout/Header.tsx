"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AssetImage } from "@/components/ui/AssetImage";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const togglerRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        togglerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out border-b",
        scrolled
          ? "bg-base/95 backdrop-blur-sm border-border py-3"
          : "bg-base/85 backdrop-blur-sm border-transparent py-5",
      )}
    >
      <div className="mx-auto w-full max-w-[75rem] px-5 sm:px-8 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center whitespace-nowrap"
          aria-label="おやじの隠れ家 トップへ"
        >
          <AssetImage
            src="/images/head_logo.png"
            alt="おやじの隠れ家 — Let's START! Garage Life"
            className={cn(
              "object-contain transition-all w-auto",
              scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12",
            )}
            width={220}
            height={75}
            loading="eager"
            fetchPriority="high"
            fallback={
              <span className="font-serif font-bold text-primary text-lg sm:text-xl tracking-wide">
                おやじの<span className="text-accent">隠れ家</span>
              </span>
            }
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="メインナビゲーション">
          {navItems.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "text-base font-medium transition-colors py-2",
                isActive(item.href)
                  ? "text-primary border-b-2 border-accent"
                  : "text-text-muted hover:text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/contact/" size="md" className="hidden sm:inline-flex">
            資料請求（無料）
          </Button>
          <button
            ref={togglerRef}
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-12 h-12 text-primary rounded-lg hover:bg-primary/5"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-base border-t border-border shadow-card"
          role="dialog"
          aria-modal="true"
          aria-label="モバイルナビゲーション"
        >
          <nav className="px-5 py-6 flex flex-col gap-1" aria-label="モバイルメインナビゲーション">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-lg font-medium px-3 py-4 rounded-lg min-h-[44px] flex items-center",
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-text hover:bg-primary/5",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact/" size="lg" className="mt-4" onClick={() => setOpen(false)}>
              資料請求（無料）
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
