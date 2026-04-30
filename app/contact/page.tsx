import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { BrochurePromo } from "@/components/sections/BrochurePromo";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "資料請求（無料）",
  description:
    "「夢の隠れ家計画ガイドブック」を無料でお届け。訪問営業・電話営業は一切いたしません。",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Free Brochure"
        title="無料 資料請求"
        lead="お名前・連絡先・ご利用用途をお知らせください。「夢の隠れ家計画ガイドブック」を無料でお届けします。"
        crumbs={[
          { href: "/", label: "ホーム" },
          { href: "/contact/", label: "資料請求" },
        ]}
      />
      <BrochurePromo />
      <ContactForm />
    </PageShell>
  );
}
