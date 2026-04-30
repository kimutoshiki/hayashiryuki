import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JapanMap } from "@/components/interactive/JapanMap";
import { totalAgents } from "@/lib/agents";

export function ServiceArea() {
  return (
    <section
      id="area"
      className="py-20 md:py-28 bg-surface border-y border-border"
      aria-labelledby="area-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Service Area"
          title={<span id="area-heading">日本全国どこでも施工可能</span>}
          lead={`チームワーク抜群の全国${totalAgents}社の「おやじの隠れ家ネットワーク」が、北海道から沖縄、離島まで施工をお届けします。`}
        />
        <JapanMap />
      </Container>
    </section>
  );
}
