import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-24" role="contentinfo">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 py-16">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl font-bold tracking-wide mb-4">
              おやじの<span className="text-accent">隠れ家</span>
            </p>
            <p className="text-base leading-relaxed text-white/80 max-w-md">
              純国産無垢材を使った、グッドデザイン賞受賞の高級木材キットハウス。
              板倉工法で短工期・高耐震・本物の木の心地よさを、あなたの趣味の空間に。
            </p>
          </div>

          <nav className="md:col-span-4" aria-label="フッターナビゲーション">
            <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase mb-4">
              Pages
            </p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase mb-4">
              Company
            </p>
            <address className="not-italic text-white/80 leading-relaxed text-sm">
              株式会社フレックス唐津
              <br />
              佐賀県唐津市
              <br />
              <a
                href="https://flex-k.co.jp"
                className="underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                flex-k.co.jp
              </a>
            </address>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <Link href="/privacy/" className="text-white/80 hover:text-white underline">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} FLEX KARATSU Co., Ltd.
          </p>
          <Link
            href="#main"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white px-4 py-3 rounded-lg border border-white/20 min-h-[44px]"
          >
            <ArrowUp size={16} aria-hidden="true" />
            ページの先頭へ
          </Link>
        </div>
      </Container>
    </footer>
  );
}
