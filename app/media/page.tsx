import type { Metadata } from "next";
import { Award, BookOpen, Newspaper, Cog } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "メディア掲載・受賞",
  description:
    "Garage Life誌での特集、東京モーターショー出展、新住宅ジャーナル、リフォーム経済新聞での掲載、グッドデザイン賞2014受賞。",
};

const mediaList = [
  {
    icon: BookOpen,
    name: "Garage Life",
    label: "雑誌特集（複数回）",
    desc: "趣味のガレージ専門誌。実オーナーの暮らしと共に「おやじの隠れ家」を継続的に紹介。代表的な掲載に Garage Life 57（2013年10月号）長谷川様の事例特集。",
  },
  {
    icon: Cog,
    name: "東京モーターショー",
    label: "出展",
    desc: "2013年・2015年に出展。車・バイク好きの来場者から多くの問い合わせをいただきました。",
  },
  {
    icon: Newspaper,
    name: "新住宅ジャーナル",
    label: "建築業界誌",
    desc: "建築業界向けの専門誌で、独自の板倉工法とキットハウスの設計思想を紹介。",
  },
  {
    icon: Newspaper,
    name: "リフォーム経済新聞",
    label: "業界紙",
    desc: "国産無垢材を活かしたキットハウスの市場性と工法の解説記事に掲載。",
  },
] as const;

export default function MediaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Media & Awards"
        title="メディア掲載・受賞実績"
        lead="趣味のガレージ専門誌から建築業界誌、業界紙、デザイン賞まで。第三者評価をいただいた実績の一部をご紹介します。"
        crumbs={[
          { href: "/", label: "ホーム" },
          { href: "/media/", label: "メディア掲載" },
        ]}
      />

      <section
        className="py-20 md:py-24"
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
              プロダクト／建築領域での受賞。<br className="hidden sm:block" />
              「短工期で美しく、長く使える木の家」が評価されました。
            </p>
          </div>
        </Container>
      </section>

      <section
        className="py-20 md:py-24 bg-surface border-y border-border"
        aria-labelledby="media-list-heading"
      >
        <Container>
          <SectionHeading
            eyebrow="Press"
            title={<span id="media-list-heading">主なメディア掲載</span>}
          />
          <ul className="grid gap-5 md:gap-6 md:grid-cols-2" role="list">
            {mediaList.map((m) => {
              const Icon = m.icon;
              return (
                <li
                  key={m.name}
                  className="rounded-2xl border border-border bg-base p-7 md:p-8 flex gap-4"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-12 h-12 rounded-full bg-accent/15 text-accent inline-flex items-center justify-center"
                  >
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs text-accent-700 tracking-[0.18em] uppercase font-medium mb-1">
                      {m.label}
                    </p>
                    <h3 className="font-serif text-primary text-xl mb-2">{m.name}</h3>
                    <p className="text-text-muted text-sm leading-[1.85]">{m.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <FinalCTA
        title="掲載記事の詳細・実例集をご希望の方へ"
        body="ガイドブックでは、メディアでご紹介いただいた実例の一部を写真と共にお届けします。"
      />
    </PageShell>
  );
}
