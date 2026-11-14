import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Results from CVDA's work in HIV prevention, cholera response, and immunization, plus stories from the communities we serve and the partners we work with.",
};

const stats = [
  { value: "17,325", label: "People reached with cholera response (2024)" },
  { value: "9,713", label: "Key populations tested for HIV (2024)" },
  { value: "435,450", label: "Condoms distributed (2024)" },
  { value: "22,262+", label: "Zero-dose children vaccinated (2024–2025)" },
];

// TODO: Replace each summary with the real story (written with the person's
// informed consent). The summaries below are drafts based only on the story titles.
const stories = [
  {
    title: "From Destitute to Entrepreneur: The Muger Watershed Story",
    summary:
      "How the Muger River Watershed project helped a community member move from hardship to running a business.",
  },
  {
    title: "Reaching Zero-Dose Children in Conflict Zones",
    summary:
      "How GAVI-REACH brings routine immunization to children who had never received a single dose.",
  },
  {
    title: "Empowering Women through VSLA",
    summary:
      "How village savings and loan associations (VSLAs) give women a way to save, borrow, and build income.",
  },
];

// TODO: Replace the text tiles with partner logos (with alt text) once you have
// permission to display each organization's logo.
const partners = [
  "USAID",
  "GAVI",
  "WFP",
  "Save the Children",
  "IRC",
  "PSI",
  "MDM",
  "Palladium",
];

export default function ImpactPage() {
  return (
    <>
      <section aria-labelledby="impact-heading" className="bg-green">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h1 id="impact-heading" className="max-w-3xl text-paper">
            Our impact
          </h1>
          <p className="mt-6 max-w-prose text-xl text-paper">
            What our work has achieved with communities, health workers, and partners across Ethiopia.
          </p>
        </div>
      </section>

      <section aria-labelledby="stats-heading" className="border-b border-green/15">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="stats-heading">Key results</h2>
          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse border-l-4 border-ochre pl-4">
                <dd className="font-heading text-4xl text-green sm:text-5xl">{s.value}</dd>
                <dt className="mt-1 text-base">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="stories-heading" className="bg-green-tint">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 id="stories-heading">Stories of change</h2>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {stories.map((s) => (
              <li key={s.title}>
                <article className="h-full rounded-md border-l-4 border-ochre bg-paper p-7">
                  <h3>{s.title}</h3>
                  <p className="mt-3 text-base">{s.summary}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="partners-heading" className="mx-auto max-w-6xl px-5 py-20">
        <h2 id="partners-heading">Our partners</h2>
        <p className="mt-4 max-w-prose">
          We work alongside government, donors, and international organizations.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {partners.map((p) => (
            <li
              key={p}
              className="flex min-h-[88px] items-center justify-center rounded-md border-2 border-green/20 px-4 py-4 text-center font-heading text-xl text-green"
            >
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <CTAButton href="/contact">Partner with us</CTAButton>
        </div>
      </section>
    </>
  );
}
