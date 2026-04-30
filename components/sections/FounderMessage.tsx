import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FounderMessage() {
  return (
    <section
      id="founder"
      className="py-20 md:py-28 bg-primary text-white"
      aria-labelledby="founder-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Founder's Message"
          title={
            <span id="founder-heading" className="text-white">
              発案者からのメッセージ
            </span>
          }
          lead={
            <span className="text-white/80">
              「自分がわくわく楽しくなる物は、誰もが欲しくなる」
            </span>
          }
        />

        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <div className="aspect-[3/4] rounded-2xl bg-white/5 border border-white/15 overflow-hidden flex items-end p-6">
              <div>
                <p className="text-sm text-accent mb-1 font-medium tracking-wide">
                  株式会社フレックス唐津
                </p>
                <p className="font-serif text-2xl font-bold leading-tight">
                  代表取締役会長
                  <br />
                  山口 哲生
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-5 text-white/90 leading-[2] text-base md:text-lg">
            <p>
              はじまりは、当社で恒例にしていた24時間TVのチャリティイベントでした。「24時間で建てられる家を企画できないか」というお客様の声をきっかけに、自分の趣味の車を2台収められて、しかも家族や仲間と楽しみながらつくれる家を、と設計から組み立てまでを試みたのです。
            </p>
            <p>
              協力業者とともに作業を進めると、想像以上のスピードで形になりました。「意外と早く建つもんだね」「やっぱり木の家っていいね」 — 関わった全員が、日常では味わえない感動を共有できた瞬間でした。
            </p>
            <p>
              当初は販売を考えてもおらず、ただ道路沿いに建てていただけ。それでも、通りすがりの方や、車・バイクを趣味にされている方からの問い合わせが絶えず、その反響に、私自身がいちばん驚かされました。<strong className="text-accent font-medium">自分がわくわくするものは、必ず誰かもわくわくする。</strong>そのことを教えてもらった出来事でした。
            </p>
            <p>
              「おやじの隠れ家」は、趣味や目的に合わせて自由にカスタマイズできます。無垢木材ならではの色合い、香り、手触り、そして天然素材だけが運んでくる爽やかな空気を、ぜひあなただけの空間で感じ取ってみてください。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
