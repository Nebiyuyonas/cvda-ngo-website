import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work with the Common Vision for Development Association (CVDA), an Ethiopian NGO delivering community-based health, education, livelihood, and environment programs.",
};

const reasons = [
  {
    title: "Work that reaches communities",
    text: "Our programs are community-based. Your work connects directly to the people it is meant to serve.",
  },
  {
    title: "Twenty years of experience",
    text: "We have run local projects and national programs since 2005, with international partners and donors.",
  },
  {
    title: "A wide range of sectors",
    text: "Health, education, agriculture, environment, livelihood, WaSH, humanitarian response, peace-building, and good governance.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section aria-labelledby="careers-heading" className="bg-green">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h1 id="careers-heading" className="max-w-3xl text-paper">
            Work with CVDA
          </h1>
          <p className="mt-6 max-w-prose text-xl text-paper">
            Join an Ethiopian organization that has worked alongside communities for twenty years.
          </p>
        </div>
      </section>

      <section aria-labelledby="why-heading" className="mx-auto max-w-6xl px-5 py-20">
        <h2 id="why-heading">Why work at CVDA</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <li key={r.title}>
              <article className="h-full rounded-md bg-green-tint p-7">
                <h3>{r.title}</h3>
                <p className="mt-3 text-base">{r.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="inquire-heading" className="bg-green">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="inquire-heading" className="text-paper">Ask about opportunities</h2>
          <p className="mt-4 max-w-prose text-paper">
            Email us to ask about current openings and how to apply.
          </p>
          <div className="mt-8">
            <CTAButton href="mailto:commonvision@ethionet.et">Inquire About Careers</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}