import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type Props = {
  title?: string;
  body?: string;
};

export function FinalCTA({
  title = "あなただけの「隠れ家」を、まずは資料で。",
  body = "「夢の隠れ家計画ガイドブック」を無料でお届けします。訪問営業・電話営業はいたしません。",
}: Props) {
  return (
    <section
      className="py-20 md:py-24 bg-primary text-white"
      aria-labelledby="final-cta-heading"
    >
      <Container size="prose" className="text-center">
        <h2
          id="final-cta-heading"
          className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-white leading-tight mb-5 text-balance"
        >
          {title}
        </h2>
        <p className="text-white/85 text-base md:text-lg leading-[1.95] mb-8">
          {body}
        </p>
        <Button href="/contact/" size="lg" className="text-base">
          無料で資料を取り寄せる
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </Container>
    </section>
  );
}
