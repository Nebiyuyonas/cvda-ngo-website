"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import CTAButton from "./CTAButton";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-green/15 bg-paper">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-heading text-2xl text-green">
          CVDA
          <span className="sr-only"> – Common Vision for Development Association, home</span>
        </Link>

        <ul className="hidden items-center gap-5 text-base xl:flex xl:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="font-bold text-ink underline-offset-4 hover:text-green hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
          <li><CTAButton href="/get-involved">Donate now</CTAButton></li>
        </ul>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded border-2 border-green text-green xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-green/15 bg-paper px-5 pb-6 xl:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block border-b border-green/10 py-4 font-bold text-ink"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <CTAButton href="/get-involved" className="mt-5 w-full">Donate now</CTAButton>
        </div>
      )}
    </header>
  );
}