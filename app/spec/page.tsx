import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { SixFeatures } from "@/components/sections/SixFeatures";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "仕様・価格表",
  description:
    "オール天然無垢材、1日施工、板倉工法による高耐震。輸入キットガレージとの比較、ミニ188万円〜・標準288万円〜のラインナップと概算価格シミュレーター。",
};

export default function SpecPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Spec & Pricing"
        title="仕様・価格表"
        lead="素材、工法、納期、価格。「おやじの隠れ家」がこだわる6つのポイントと、輸入キットガレージとの比較、全タイプの価格情報をまとめました。"
        crumbs={[
          { href: "/", label: "ホーム" },
          { href: "/spec/", label: "仕様・価格表" },
        ]}
      />
      <SixFeatures />
      <ComparisonTable />
      <Pricing />
      <FinalCTA
        title="価格やオプションについて、もっと詳しく。"
        body="坪数・オプション・施工地によって金額は前後します。詳細はガイドブック（無料）でご確認ください。"
      />
    </PageShell>
  );
}
