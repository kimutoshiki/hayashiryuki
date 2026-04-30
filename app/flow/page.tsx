import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { FlowSteps } from "@/components/sections/FlowSteps";
import { ConstructionMethod } from "@/components/sections/ConstructionMethod";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "組み立ての流れ",
  description:
    "ヒアリングから設計、プレカット、本体1日組立、引き渡しまでのプロセス。独自の板倉工法で短工期と耐震性を両立。",
};

export default function FlowPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Flow"
        title="組み立ての流れと板倉工法"
        lead="ご相談から引き渡しまでのステップと、短工期と耐震性を両立させる独自工法「板倉工法」をご紹介します。"
        crumbs={[
          { href: "/", label: "ホーム" },
          { href: "/flow/", label: "組み立ての流れ" },
        ]}
      />
      <FlowSteps />
      <ConstructionMethod />
      <FinalCTA
        title="セルフビルドの相談、現地調査も承ります。"
        body="自分たちで建てたい、プロにお任せしたい、住宅仕様を検討中。どのような形でも、まずは資料からお気軽にどうぞ。"
      />
    </PageShell>
  );
}
