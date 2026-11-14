/* eslint-disable @next/next/no-img-element */
import { Heart, Leaf, Wheat, Users } from "lucide-react";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProgramCard from "@/components/ProgramCard";
import CTAButton from "@/components/CTAButton";

const stats = [
  { value: "20+", label: "Years of impact" },
  { value: "1,761", label: "Community volunteers" },
  { value: "22,262+", label: "Zero-dose children vaccinated" },
  { value: "100M+", label: "ETB active project value" },
];

const programs = [
  {
    title: "Health & HIV Prevention",
    description: "HIV prevention, testing, and care, plus immunization and maternal and child health services.",
    icon: Heart,
  },
  {
    title: "Environmental Conservation",
    description: "Watershed management and community-led land restoration.",
    icon: Leaf,
  },
  {
    title: "Livelihood & Food Security",
    description: "Urban gardening, irrigation, and savings groups that help families earn and eat well.",
    icon: Wheat,
  },
  {
    title: "Social Accountability",
    description: "Community score cards that give people a voice in the services they receive.",
    icon: Users,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip stats={stats} />

      <section aria-labelledby="programs-heading" className="mx-auto max-w-6xl px-5 py-20">
        <h2 id="programs-heading" className="max-w-prose">What we do</h2>
        <p className="mt-4 max-w-prose">
          Our work is community-based and covers four core areas.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
        <div className="mt-10">
          <CTAButton href="/programs" variant="outline">See all programs</CTAButton>
        </div>
      </section>

      <section aria-labelledby="gavi-heading" className="bg-green-tint">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
          <img
            src="/images/gavi-reach-vaccination.jpg"
            alt="A health worker vaccinating a child during a GAVI-REACH outreach session"
            className="aspect-[4/3] w-full rounded-md object-cover"
            loading="lazy"
          />
          <div>
            <h2 id="gavi-heading">Reaching zero-dose children in conflict zones</h2>
            <p className="mt-5 max-w-prose">
              Through the GAVI-REACH project, CVDA has vaccinated more than 22,262 children who had never received a single routine dose, many of them in areas affected by conflict.
            </p>
            <div className="mt-8">
              <CTAButton href="/impact">Read the story</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
