import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light";

const styles: Record<Variant, string> = {
  primary: "bg-ochre text-ink hover:bg-ochre-dark",
  outline: "border-2 border-green text-green hover:bg-green hover:text-paper",
  "outline-light": "border-2 border-paper text-paper hover:bg-paper hover:text-green",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export default function CTAButton({ href, children, variant = "primary", className = "" }: Props) {
  const classes = `inline-flex min-h-[48px] items-center justify-center rounded px-6 py-3 font-bold transition-colors ${styles[variant]} ${className}`;
  const external = href.startsWith("mailto:") || href.startsWith("http");
  return external ? (
    <a href={href} className={classes}>{children}</a>
  ) : (
    <Link href={href} className={classes}>{children}</Link>
  );
}