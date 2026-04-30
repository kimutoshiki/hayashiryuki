import type { Metadata } from "next";
import { Award } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AssetImage } from "@/components/ui/AssetImage";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "メディア掲載・受賞",
  description:
    "テレビ・YouTube、Garage Life誌、モーターショー、住宅業界誌での紹介、そしてグッドデザイン賞2014受賞。「おやじの隠れ家」のメディア掲載実績をまとめてご紹介します。",
};

const banners = [
  {
    n: "01",
    image: "/images/banner-01.png",
    title: "テレビ、YouTubeチャンネルなどで多数紹介！",
    body:
      "ロンブー淳さんとインパルス板倉さんの番組を始め、『幸せボンビーガール』森泉さんのリフォームコーナーなど、テレビ番組やYouTubeでも紹介されています。",
  },
  {
    n: "02",
    image: "/images/banner-02.png",
    title: "Garage Life誌 多数掲載！",
    body:
      "ガレージングを楽しむ男のための専門誌『Garage Life』。いつかこの雑誌に載っているようなガレージライフを送りたい — 「おやじの隠れ家」なら、その男の夢を実現できます。",
  },
  {
    n: "03",
    image: "/images/banner-03.png",
    title: "MOTOR SHOW へ展示出品！",
    body:
      "車好きが集まるイベントといえば、モーターショー。2009年福岡モーターショーに出展。『自分の居場所があるガレージ』として、ガレージ業界の常識を変え、車を眺める空間とガレージが一体化するカーライフを提案しました。",
  },
  {
    n: "04",
    image: "/images/banner-04.png",
    title: "住宅業界からもアツい視線！",
    body:
      "設計士さん・大工さんのファンも多い「おやじの隠れ家」。本体1日施工・288万円から・セルフビルドも可能でありながら、構造は日本古来の木造軸組。プロの心をくすぐるポイントは、極限まで無駄をそぎ落とした建築の美でした。",
  },
  {
    n: "05",
    image: "/images/banner-05.png",
    title: "グッドデザイン賞 受賞！",
    body:
      "GOOD DESIGN AWARD は、国内外の多くの企業やデザイナーが参加するコンテスト。受賞のシンボルである「Gマーク」は、よいデザインを示すシンボルマークとして広く親しまれています。「おやじの隠れ家」も2014年に受賞いたしました。",
  },
] as const;

export default function MediaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Media & Awards"
        title="メディア掲載・受賞実績"
        lead="メディア・雑誌で人気急上昇中。テレビ番組から建築業界誌、グッドデザイン賞まで、第三者評価をいただいた実績をご紹介します。"
        crumbs={[
          { href: "/", label: "ホーム" },
          { href: "/media/", label: "メディア掲載" },
        ]}
      />

      <section
        className="py-20 md:py-24"
        aria-labelledby="banners-heading"
      >
        <Container>
          <SectionHeading
            eyebrow="Press Highlights"
            title={<span id="banners-heading">メディア掲載ハイライト</span>}
          />

          <ul className="space-y-8 md:space-y-10" role="list">
            {banners.map((b) => (
              <li
                key={b.n}
                className="rounded-2xl border border-border bg-surface overflow-hidden shadow-card"
              >
                <AssetImage
                  src={b.image}
                  alt={`${b.n}：${b.title}`}
                  className="w-full h-auto block bg-base"
                  width={1200}
                  height={400}
                  fallback={
                    <div className="w-full bg-base px-6 py-10 md:px-10 md:py-14 flex items-center gap-6">
                      <span className="font-en text-5xl md:text-7xl font-bold text-border shrink-0">
                        {b.n}
                      </span>
                      <div>
                        <p className="text-accent-700 text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-2">
                          メディア・雑誌で人気急上昇！
                        </p>
                        <p className="font-serif text-primary text-xl md:text-2xl leading-snug">
                          {b.title}
                        </p>
                      </div>
                    </div>
                  }
                />
                <div className="p-6 md:p-8 border-t border-border">
                  <h3 className="sr-only">
                    {b.n} {b.title}
                  </h3>
                  <p className="text-text-muted leading-[1.95]">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        className="py-20 md:py-24 bg-surface border-y border-border"
        aria-labelledby="award-heading"
      >
        <Container>
          <SectionHeading
            eyebrow="Award"
            title={<span id="award-heading">GOOD DESIGN AWARD 2014</span>}
            lead="プレカット部材による高い精度と、無垢材の質感を両立する設計が評価され、2014年グッドデザイン賞を受賞しました。"
          />
          <div className="rounded-2xl bg-primary text-white p-10 md:p-14 text-center max-w-2xl mx-auto shadow-card">
            <Award size={56} className="text-accent mx-auto mb-6" aria-hidden="true" />
            <p className="font-en text-sm md:text-base tracking-[0.3em] text-accent mb-3">
              GOOD DESIGN AWARD
            </p>
            <p className="font-serif text-5xl md:text-6xl font-bold mb-4">2014</p>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              「短工期で美しく、長く使える木の家」が評価された受賞作品です。
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA
        title="掲載記事の詳細・実例集をご希望の方へ"
        body="ガイドブックでは、メディアでご紹介いただいた実例の一部を写真と共にお届けします。"
      />
    </PageShell>
  );
}
