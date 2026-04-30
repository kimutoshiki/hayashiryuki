import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AssetImage } from "@/components/ui/AssetImage";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { totalAgents } from "@/lib/agents";

export const metadata: Metadata = {
  title: "代理店・施工店",
  description: `全国${totalAgents}社の認定代理店ネットワーク「おやじの隠れ家ネットワーク」。北海道から沖縄、離島まで施工対応。建設業の許可を受けた施工店が安心の施工をお届けします。`,
};

const promises = [
  "建設業の許可を受けた認定代理店のみが施工",
  "現地調査・施工管理は地元のチームが対応",
  "離島・遠隔地も対応可能（過去実績あり）",
  "施工後のメンテナンス・追加工事も同じチームで",
] as const;

export default function AgencyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Agency Network"
        title="代理店・施工店ネットワーク"
        lead={`チームワーク抜群の全国${totalAgents}社「おやじの隠れ家ネットワーク」が、北海道から沖縄、離島まで施工をお届けします。`}
        crumbs={[
          { href: "/", label: "ホーム" },
          { href: "/agency/", label: "代理店・施工店" },
        ]}
      />

      <section
        className="py-16 md:py-20 bg-base"
        aria-labelledby="area-photo-heading"
      >
        <Container>
          <SectionHeading
            eyebrow="Showcase Map"
            title={<span id="area-photo-heading">実際の施工事例マップ</span>}
            lead="各都道府県の施工事例を、住宅タイプ（青）・ガレージタイプ（緑）別にマッピングしました。"
          />
          <AssetImage
            src="/images/area-map.png"
            alt="日本全国に展開する施工事例マップ。各都道府県の住宅・ガレージタイプの事例写真がサムネイルで配置されている。"
            className="w-full h-auto rounded-2xl shadow-card border border-border bg-surface"
            width={1280}
            height={1040}
            fallback={
              <div
                aria-hidden="true"
                className="w-full aspect-[5/4] rounded-2xl bg-gradient-to-br from-primary/8 via-accent/8 to-primary/5 border border-border flex items-center justify-center"
              >
                <p className="font-serif text-primary text-xl md:text-2xl text-center px-8">
                  Showcase Map
                  <span className="block text-sm text-text-muted font-sans mt-2">
                    画像ファイルを配置すると表示されます
                  </span>
                </p>
              </div>
            }
          />
          <p className="text-xs text-text-muted text-center mt-4">
            ※ 写真サムネイルはタイプ番号と都道府県を併記。下のインタラクティブマップでも各地方の代理店数を確認できます。
          </p>
        </Container>
      </section>

      <ServiceArea />

      <section
        className="py-20 md:py-24"
        aria-labelledby="promise-heading"
      >
        <Container size="prose">
          <SectionHeading
            eyebrow="Our Promise"
            title={<span id="promise-heading">どこにお住まいでも、同じ品質を。</span>}
          />
          <ul className="space-y-4" role="list">
            {promises.map((p) => (
              <li
                key={p}
                className="flex gap-3 items-start rounded-xl bg-surface border border-border p-5"
              >
                <CheckCircle2 size={22} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-text leading-[1.9]">{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCTA
        title="お住まいのエリアの代理店をご紹介します。"
        body="資料請求の際にエリアをお書き添えいただければ、最寄りの認定代理店をご案内いたします。"
      />
    </PageShell>
  );
}
