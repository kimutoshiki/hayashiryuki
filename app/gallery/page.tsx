import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { OwnerStories } from "@/components/sections/OwnerStories";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/interactive/GalleryGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "完成品ギャラリー",
  description:
    "おやじの隠れ家の施工事例。セカンドハウス、店舗、ガレージハウス、ピアノ教室、離島の住居まで多彩なオーナーの暮らしをご紹介します。",
};

const items = [
  { id: "g1", title: "山梨県 / セカンドハウス", caption: "富士山の梺、車2台分のガレージ + 仲間の集まる空間" },
  { id: "g2", title: "神奈川県厚木市 / 造園店舗", caption: "景色工房サフラン店舗。冬の氷点下でもファンヒーター2台で快適" },
  { id: "g3", title: "福岡県古賀市 / ピアノ教室", caption: "Share & Café CAQREGA。木の壁面が音を心地よく響かせる" },
  { id: "g4", title: "福岡県行橋市 / ガレージハウス", caption: "バイク3台 + 自転車3台。住宅仕様PLUSで実現" },
  { id: "g5", title: "長崎県小値賀町 / 離島の住居", caption: "他社が断った離島建築。3日で2階の屋根まで到達" },
  { id: "g6", title: "佐賀県唐津市 / モデルハウス", caption: "ブランド発祥の地、フレックス唐津本社モデル" },
];

export default function GalleryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery & Stories"
        title="完成品ギャラリー"
        lead="セカンドハウス、店舗、ガレージハウス、ピアノ教室、離島の住居。実際にお建ていただいたオーナー様の事例をご紹介します。"
        crumbs={[
          { href: "/", label: "ホーム" },
          { href: "/gallery/", label: "完成品ギャラリー" },
        ]}
      />

      <OwnerStories />

      <section className="py-20 md:py-24 bg-surface border-t border-border" aria-labelledby="gallery-grid-heading">
        <Container>
          <SectionHeading
            eyebrow="Snapshots"
            title={<span id="gallery-grid-heading">施工事例ギャラリー</span>}
            lead="クリック／タップで拡大表示。矢印キー（←/→）で前後の事例に移動できます。"
          />
          <GalleryGrid items={items} />
        </Container>
      </section>

      <FinalCTA
        title="あなたの隠れ家、どんな空間にしますか？"
        body="ガイドブックでは、本ページに掲載しきれない実例の写真と図面をたっぷりご覧いただけます。"
      />
    </PageShell>
  );
}
