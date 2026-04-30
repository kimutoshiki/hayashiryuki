import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors duration-200 ease-out " +
  "focus-visible:outline-3 focus-visible:outline-accent focus-visible:outline-offset-3 " +
  "min-h-[44px] min-w-[44px] px-6";

const variantClasses: Record<Variant, string> = {
  primary: "cta-wood text-white hover:bg-cta-700 shadow-card",
  secondary: "bg-primary text-white hover:bg-primary-700",
  ghost: "bg-transparent text-primary border border-border hover:bg-primary/5",
};

const sizeClasses: Record<Size, string> = {
  md: "text-base py-3",
  lg: "text-lg py-4 px-8",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

type BtnProps = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button(props: LinkProps | BtnProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, external, ...anchorRest } = rest as LinkProps;
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes} {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(anchorRest as Omit<LinkProps, "href" | "external">)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
