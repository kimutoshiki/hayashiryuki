import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  size?: "page" | "prose";
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Container({ children, size = "page", className, as = "div" }: ContainerProps) {
  const Tag = as as "div";
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "page" ? "max-w-[75rem]" : "max-w-[45rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
