import { Car, Users, Mountain, Palette, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCases } from "@/lib/content";

const iconMap = {
  car: Car,
  users: Users,
  mountain: Mountain,
  palette: Palette,
  home: Home,
} as const;

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="py-20 md:py-28"
      aria-labelledby="use-cases-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Use Cases"
          title={<span id="use-cases-heading">こんな方におすすめです</span>}
          lead="趣味、家族、仕事、住まい。「おやじの隠れ家」が活躍するシーンは多彩です。"
        />
        <ul
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          role="list"
        >
          {useCases.map((u) => {
            const Icon = iconMap[u.icon as keyof typeof iconMap];
            return (
              <li
                key={u.title}
                className="rounded-2xl bg-surface border border-border p-6 text-center flex flex-col items-center gap-4"
              >
                <span
                  aria-hidden="true"
                  className="w-14 h-14 rounded-full bg-primary/8 text-primary inline-flex items-center justify-center"
                >
                  <Icon size={26} />
                </span>
                <p className="text-text leading-snug font-medium">{u.title}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
