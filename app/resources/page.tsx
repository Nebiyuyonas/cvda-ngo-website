import type { Metadata } from "next";
import { Download } from "lucide-react";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Resources",
  description: "Download CVDA annual reports and strategic plans.",
};

type Doc = { title: string; description: string; href: string; meta: string };

// TODO: Replace these placeholder entries with your real documents.
// Put the PDF files in /public/documents/ and match the file names below.
const annualReports: Doc[] = [
  {
    title: "Annual Report 2024",
    description: "Programs, results, and financial summary for the year.",
    href: "/documents/cvda-annual-report-2024.pdf",
    meta: "PDF",
  },
  {
    title: "Annual Report 2023",
    description: "Programs, results, and financial summary for the year.",
    href: "/documents/cvda-annual-report-2023.pdf",
    meta: "PDF",
  },
];

const strategicPlans: Doc[] = [
  {
    title: "Strategic Plan",
    description: "Our priorities, goals, and approach for the coming years.",
    href: "/documents/cvda-strategic-plan.pdf",
    meta: "PDF",
  },
];

function DocList({ docs, headingId }: { docs: Doc[]; headingId: string }) {
  return (
    <ul aria-labelledby={headingId} className="mt-8 divide-y divide-green/15 border-y border-green/15">
      {docs.map((d) => (
        <li key={d.href} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3>{d.title}</h3>
            <p className="mt-1 max-w-prose text-base">{d.description}</p>
          </div>
          <a
            href={d.href}
            download
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded border-2 border-green px-5 py-3 font-bold text-green transition-colors hover:bg-green hover:text-paper"
          >
            <Download aria-hidden="true" className="h-5 w-5" />
            Download
            <span className="sr-only"> {d.title} ({d.meta})</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <section aria-labelledby="resources-heading" className="bg-green">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h1 id="resources-heading" className="max-w-3xl text-paper">Resources</h1>
          <p className="mt-6 max-w-prose text-xl text-paper">
            Read how we plan our work and report on it.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-20">
        <section aria-labelledby="annual-heading">
          <h2 id="annual-heading">Annual reports</h2>
          <DocList docs={annualReports} headingId="annual-heading" />
        </section>

        <section aria-labelledby="strategic-heading" className="mt-20">
          <h2 id="strategic-heading">Strategic plans</h2>
          <DocList docs={strategicPlans} headingId="strategic-heading" />
        </section>

        <p className="mt-16 max-w-prose">
          Looking for something else, such as audited financial statements or a policy?
        </p>
        <div className="mt-6">
          <CTAButton href="/contact" variant="outline">Ask us</CTAButton>
        </div>
      </div>
    </>
  );
}