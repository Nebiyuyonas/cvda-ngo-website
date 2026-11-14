import type { Metadata } from "next";
import Timeline, { type TimelineItem } from "@/components/Timeline";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The vision, mission, and 20-year history of the Common Vision for Development Association (CVDA), an indigenous Ethiopian NGO established in 2005.",
};

const history: TimelineItem[] = [
  {
    period: "2003–2005",
    title: "Foundation & Early Initiatives",
    points: [
      "2003: The founders start the Muger River Watershed project as an early initiative.",
      "October 28, 2005: CVDA is officially established.",
    ],
  },
  {
    period: "2006–2009",
    title: "Environmental & WASH",
    points: [
      "Wind pump irrigation in Ada Berga.",
      "USAID Urban Gardening for orphans and vulnerable children (OVCs), 2006–2012.",
      "HIV prevention for Sinohydro road workers, 2008–2010, reaching 5,000 people.",
    ],
  },
  {
    period: "2010–2014",
    title: "Scaling HIV & Community Health",
    points: [
      "TransACTION reaches 20,000 most-at-risk populations (MARPs).",
      "Growth Through Nutrition (GTN).",
    ],
  },
  {
    period: "2015–2017",
    title: "Education & Expansion",
    points: [
      "Adult literacy program in Afar (IFAL), October 2014 to March 2016.",
    ],
  },
  {
    period: "2018–2021",
    title: "National Systems",
    points: [
      "READ II education project.",
      "GAVI-REACH begins.",
      "COVID-19 response.",
    ],
  },
  {
    period: "2022–2025",
    title: "Mega-Projects & USAID",
    points: [
      "USAID FFHPCT and MULU Key Populations.",
      "WFP Third Party Monitoring.",
      "MDM Afar.",
      "RISE MNCH-N (Bonga Cluster), 2024 to present.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading" className="bg-green">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h1 id="about-heading" className="max-w-3xl text-paper">
            An Ethiopian organization, working with communities since 2005
          </h1>
          <p className="mt-6 max-w-prose text-xl text-paper">
            The Common Vision for Development Association (CVDA) is an indigenous NGO based in Addis Ababa, established on October 28, 2005.
          </p>
        </div>
      </section>

      <section aria-labelledby="vision-heading" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 id="vision-heading">Our vision</h2>
          <p className="mt-4 max-w-prose font-heading text-2xl leading-snug text-ink">
            A poverty-free Ethiopia where equity and equality are ensured.
          </p>
        </div>
        <div>
          <h2 id="mission-heading">Our mission</h2>
          <p className="mt-4 max-w-prose">
            Enhance socioeconomic development in health, education, agriculture, environment, livelihood, WaSH, humanitarian response, peace-building, and good governance through holistic, community-based approaches.
          </p>
        </div>
      </section>

      <section aria-labelledby="history-heading" className="bg-green-tint">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <h2 id="history-heading">Our history</h2>
          <p className="mt-4 max-w-prose">
            Twenty years of work, from a single watershed to national health programs.
          </p>
          <div className="mt-12">
            <Timeline items={history} />
          </div>
        </div>
      </section>

      <section aria-labelledby="next-heading" className="mx-auto max-w-6xl px-5 py-20">
        <h2 id="next-heading">See the work in detail</h2>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <CTAButton href="/programs">Browse our programs</CTAButton>
          <CTAButton href="/contact" variant="outline">Get in touch</CTAButton>
        </div>
      </section>
    </>
  );
}
