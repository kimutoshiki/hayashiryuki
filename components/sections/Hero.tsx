import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";

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
          <div className="md:col-span-6">
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
              純国産でオール無垢素材の体にやさしい木製キットガレージが、たった1日で、288万円〜建てられます。
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

          <div className="md:col-span-6">
            <figure className="relative rounded-2xl border border-border shadow-card overflow-hidden bg-primary/5">
              <AssetImage
                src="/images/hero-main.jpg"
                alt="天然素材に囲まれたコンパクトな贅沢空間。完成したおやじの隠れ家とオーナー様。"
                className="w-full h-auto aspect-[4/3] object-cover"
                width={1000}
                height={750}
                loading="eager"
                fetchPriority="high"
                fallback={
                  <svg
                    role="img"
                    aria-label="木造ガレージ・キットハウスのイメージ"
                    viewBox="0 0 400 300"
                    className="w-full h-auto aspect-[4/3]"
                  >
                    <defs>
                      <pattern id="wood" width="14" height="40" patternUnits="userSpaceOnUse">
                        <rect width="14" height="40" fill="#C7884A" opacity="0.15" />
                        <path
                          d="M0 8 Q7 4 14 8 M0 22 Q7 18 14 22 M0 32 Q7 28 14 32"
                          stroke="#9d6932"
                          strokeWidth="0.5"
                          fill="none"
                          opacity="0.6"
                        />
                      </pattern>
                    </defs>
                    <rect width="400" height="300" fill="#FAF7F2" />
                    <rect x="0" y="0" width="400" height="160" fill="#e8e2d4" />
                    <polygon points="50,140 200,55 350,140" fill="#2D4A3E" />
                    <rect x="70" y="140" width="260" height="120" fill="url(#wood)" />
                    <rect
                      x="70"
                      y="140"
                      width="260"
                      height="120"
                      fill="none"
                      stroke="#9d6932"
                      strokeWidth="2"
                    />
                    <rect x="110" y="170" width="180" height="90" fill="#1F1F1F" opacity="0.85" rx="4" />
                    <rect x="0" y="260" width="400" height="40" fill="#E5DFD3" />
                  </svg>
                }
              />
              <figcaption className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl bg-surface/95 text-sm text-text font-medium text-center backdrop-blur-sm">
                「正直、こんな隠れ家ほしかった！」
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
