import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const links = [
  { href: "/about", label: "About us" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-green text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl">CVDA</p>
          <p className="mt-3 max-w-prose text-base">
            Common Vision for Development Association. An indigenous Ethiopian NGO working with communities since 2005.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 text-xl !text-paper">Quick links</h2>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="underline underline-offset-4 hover:text-ochre">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-xl !text-paper">Contact</h2>
          <address className="space-y-3 not-italic">
            <p className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
              Addis Ababa, Ethiopia
            </p>
            <p className="flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
              <a href="mailto:commonvision@ethionet.et" className="underline underline-offset-4 hover:text-ochre">
                commonvision@ethionet.et
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-paper/20 px-5 py-5 text-center text-base">
        © 2025 Common Vision for Development Association
      </div>
    </footer>
  );
}
