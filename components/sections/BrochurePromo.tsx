import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";

export function BrochurePromo() {
  return (
    <section
      className="py-16 md:py-20 bg-base"
      aria-labelledby="brochure-heading"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <p className="text-accent-700 text-sm font-medium tracking-[0.25em] uppercase mb-3">
              Free Brochure
            </p>
            <h2
              id="brochure-heading"
              className="font-serif text-primary text-2xl md:text-3xl leading-snug mb-4 text-balance"
            >
              「夢の隠れ家計画ガイドブック」を今なら無料プレゼント
            </h2>
            <p className="text-text-muted leading-[1.95] mb-3">
              誰にも邪魔されずにこっそり読みたい。無垢素材へのこだわりから、趣味の空間まで。あなたの夢に合わせてカスタマイズできる「おやじの隠れ家」の秘密が、この中に詰まっています。
            </p>
            <p className="text-sm text-text-muted/80 leading-relaxed">
              資料請求をお申し込みいただくと、ガイドブックは
              <strong className="text-primary"> WEB ですぐにご覧いただけます</strong>
              。<br />※ カタログ・DVDの送付は行っておりませんので、予めご了承ください。
            </p>
          </div>

          <div className="md:col-span-7">
            <AssetImage
              src="/images/brochure.png"
              alt="ガイドブック・メディア掲載抜粋・実例集を含む資料セットのプレビュー"
              className="w-full h-auto rounded-2xl shadow-card"
              width={1100}
              height={620}
              fallback={
                <div
                  aria-hidden="true"
                  className="w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-cta/10 border border-border flex items-center justify-center"
                >
                  <p className="font-serif text-primary text-xl md:text-2xl text-center px-8">
                    Brochure Preview
                    <span className="block text-sm text-text-muted font-sans mt-2">
                      画像ファイルを配置すると表示されます
                    </span>
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
