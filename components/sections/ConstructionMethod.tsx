import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ItakuraDiagram3D } from "@/components/interactive/ItakuraDiagram3D";

export function ConstructionMethod() {
  return (
    <section
      id="construction"
      className="py-20 md:py-28"
      aria-labelledby="construction-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Construction"
          title={<span id="construction-heading">短工期と耐震性を両立する「板倉工法」</span>}
          lead="校倉造（あぜくらづくり）にヒントを得た独自工法。短い工期と高い強度を、ひとつの構造の中に収めました。"
        />

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 prose-balanced">
            <p className="text-text-muted leading-[1.95] text-base mb-5">
              一般的な木造軸組工法では、筋交いによって耐震性を確保します。「板倉工法」では、それに加えて柱と柱の間に厚さ約3cmの国産杉板を水平に落とし込み、面で支える壁を構成。たわみに強く、地震や雪に対してより高い強度を発揮します。
            </p>
            <p className="text-text-muted leading-[1.95] text-base mb-5">
              筑波大学教授で建築家の安藤先生が体系化した工法名で、日本の伝統建築の知恵を現代のキットハウスに翻訳したものです。
            </p>
            <ul className="mt-6 space-y-3 text-text">
              {[
                "震度6〜7相当の地震に耐える壁強度",
                "オプションで強度1.5倍までカスタム可能",
                "無垢杉板による調湿効果と仕上げの美しさ",
                "山梨県の事例では屋根まで雪に埋もれても問題なし",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent mt-1">●</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <ItakuraDiagram3D />
          </div>
        </div>
      </Container>
    </section>
  );
}
