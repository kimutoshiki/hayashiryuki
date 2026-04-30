import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "おやじの隠れ家における個人情報の取り扱いについて。",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy Policy"
        title="プライバシーポリシー"
        crumbs={[
          { href: "/", label: "ホーム" },
          { href: "/privacy/", label: "プライバシーポリシー" },
        ]}
      />
      <section className="py-16 md:py-20">
        <Container size="prose">
          <div className="space-y-8 text-text leading-[1.95]">
            <section>
              <h2 className="font-serif text-primary text-xl md:text-2xl mb-4">
                1. 個人情報の利用目的
              </h2>
              <p>
                ご記入いただいた個人情報は、メールマガジンの配信、ご質問への回答、資料の発送、その他お問い合わせ対応の目的に限り利用いたします。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-primary text-xl md:text-2xl mb-4">
                2. 第三者提供について
              </h2>
              <p>
                ご対応に必要な範囲で、認定代理店・施工パートナーと共有させていただく場合があります。それ以外の第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-primary text-xl md:text-2xl mb-4">
                3. 営業活動について
              </h2>
              <p className="font-medium">訪問営業・電話営業は一切いたしません。</p>
              <p className="mt-2">
                資料発送後のご連絡は、原則としてメールでお願いしております。お電話でのご相談を希望される場合は、フォームのご質問欄にてお知らせください。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-primary text-xl md:text-2xl mb-4">
                4. 情報の管理
              </h2>
              <p>
                個人情報は適切に管理し、不正アクセス・紛失・改ざん・漏洩等の防止に努めます。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-primary text-xl md:text-2xl mb-4">
                5. 開示・訂正・削除のご請求
              </h2>
              <p>
                ご自身の個人情報の開示・訂正・削除をご希望の場合は、フォームよりお申し付けください。確認の上、速やかに対応いたします。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-primary text-xl md:text-2xl mb-4">
                6. お問い合わせ窓口
              </h2>
              <address className="not-italic text-text-muted">
                株式会社フレックス唐津<br />
                佐賀県唐津市<br />
                <a href="https://flex-k.co.jp" className="text-primary underline">
                  flex-k.co.jp
                </a>
              </address>
            </section>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
