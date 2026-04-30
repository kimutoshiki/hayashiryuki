import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <header
      className={cn(
        align === "center" ? "text-center mx-auto" : "text-left",
        "max-w-[45rem] mb-12 md:mb-16",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-accent-700 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <Tag className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-primary leading-[1.4] mb-4">
        {title}
      </Tag>
      {lead && <p className="text-text-muted text-base md:text-lg leading-relaxed">{lead}</p>}
    </header>
  );
}
