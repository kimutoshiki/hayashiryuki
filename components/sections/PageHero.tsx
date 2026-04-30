import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Crumb = { href: string; label: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs?: Crumb[];
};

export function PageHero({ eyebrow, title, lead, crumbs }: Props) {
  return (
    <section
      className="relative pt-32 md:pt-36 pb-12 md:pb-16 bg-surface border-b border-border overflow-hidden"
      aria-labelledby="page-hero-heading"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-asanoha opacity-40" />
      <Container className="relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="パンくずリスト" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-text-muted">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <ChevronRight size={14} aria-hidden="true" className="text-text-muted/60" />
                  )}
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-text">
                      {c.label}
                    </span>
                  ) : (
                    <Link href={c.href} className="hover:text-primary underline-offset-4 hover:underline">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="text-accent-700 text-sm font-medium tracking-[0.25em] uppercase mb-3">
          {eyebrow}
        </p>
        <h1
          id="page-hero-heading"
          className="font-serif text-primary leading-[1.35] text-[clamp(1.875rem,4.5vw,3rem)] text-balance max-w-3xl"
        >
          {title}
        </h1>
        {lead && (
          <p className="mt-5 text-text-muted text-base md:text-lg leading-[1.95] max-w-2xl">
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
