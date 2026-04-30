import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-asanoha opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-[40rem] h-[40rem] rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p className="text-accent-700 font-medium tracking-[0.2em] text-sm md:text-base mb-6">
              KIT HOUSE BY FLEX KARATSU
            </p>
            <h1
              id="hero-title"
              className="font-serif text-primary leading-[1.35] mb-8 text-[clamp(2rem,5vw,3.5rem)] text-balance"
            >
              趣味のセカンドハウスが、欲しかった。
            </h1>
            <p className="text-text-muted text-lg leading-[1.95] max-w-xl mb-10">
              日本の木でつくる、自分だけの隠れ家。純国産無垢材の高級木材キットハウス。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href="/contact/" size="lg" className="text-base">
                無料で資料を取り寄せる
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href="/spec/" variant="ghost" size="lg" className="text-base">
                仕様・価格を見る
              </Button>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-surface border border-border shadow-card">
              <Award size={20} className="text-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-text">
                GOOD DESIGN AWARD <span className="font-en">2014</span> 受賞
              </span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl bg-primary/5 border border-border shadow-card overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-cta/10"
              />
              <svg
                role="img"
                aria-label="木造ガレージ・キットハウスのイメージ"
                viewBox="0 0 400 500"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <pattern id="wood" width="14" height="40" patternUnits="userSpaceOnUse">
                    <rect width="14" height="40" fill="#C7884A" opacity="0.15" />
                    <path d="M0 8 Q7 4 14 8 M0 22 Q7 18 14 22 M0 32 Q7 28 14 32" stroke="#9d6932" strokeWidth="0.5" fill="none" opacity="0.6" />
                  </pattern>
                </defs>
                <rect width="400" height="500" fill="#FAF7F2" />
                {/* sky */}
                <rect x="0" y="0" width="400" height="280" fill="#e8e2d4" />
                {/* roof */}
                <polygon points="50,200 200,90 350,200" fill="#2D4A3E" />
                <polygon points="60,210 200,110 340,210" fill="#213729" />
                {/* facade */}
                <rect x="70" y="200" width="260" height="220" fill="url(#wood)" />
                <rect x="70" y="200" width="260" height="220" fill="none" stroke="#9d6932" strokeWidth="2" />
                {/* garage door */}
                <rect x="100" y="240" width="200" height="170" fill="#1F1F1F" opacity="0.85" rx="4" />
                <line x1="100" y1="280" x2="300" y2="280" stroke="#3a3a3a" strokeWidth="2" />
                <line x1="100" y1="320" x2="300" y2="320" stroke="#3a3a3a" strokeWidth="2" />
                <line x1="100" y1="360" x2="300" y2="360" stroke="#3a3a3a" strokeWidth="2" />
                {/* ground */}
                <rect x="0" y="420" width="400" height="80" fill="#E5DFD3" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl bg-surface/95 text-xs text-text-muted">
                ※ 仮配置のイラスト。実装時は施工事例写真と差し替えてください。
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
