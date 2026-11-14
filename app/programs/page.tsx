import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Current and past CVDA projects in HIV prevention, immunization, nutrition, maternal and child health, environment, livelihoods, and social accountability.",
};

type Project = { slug?: string; name: string; focus: string; detail?: string; image?: string };

const current: Project[] = [
  { slug: "ffhpct", name: "USAID FFHPCT", focus: "HIV prevention and care", detail: "Gullele and Hawassa", image: "/images/project-ffhpct.jpg" },
  { name: "USAID MULU Key Populations (KP)", focus: "HIV services" },
  {
    slug: "gavi-reach",
    name: "GAVI-REACH",
    focus: "Immunization in conflict zones",
    detail: "Reaching zero-dose children",
    image: "/images/project-gavi.jpg",
  },
  { name: "WFP Third Party Monitoring (TPM)", focus: "Nutrition monitoring" },
  { name: "MDM GE-Project", focus: "Reproductive, maternal, newborn, and child health (RMNCH)", detail: "Afar" },
  { name: "NPI EXPAND", focus: "Social accountability", detail: "Community Score Card" },
  {
    name: "RISE MNCH-N",
    focus: "Maternal, newborn, and child health and nutrition",
    detail: "Bonga Cluster, 2024–Present",
  },
];

const historical: Project[] = [
  { name: "TransACTION", focus: "HIV prevention", detail: "2010–2014" },
  { name: "Muger River Watershed", focus: "Watershed management", detail: "2003–2013" },
  { name: "Sinohydro HIV Prevention", focus: "HIV prevention for road workers", detail: "2008–2010" },
  { name: "USAID Urban Gardening", focus: "Urban gardening and livelihoods", detail: "2006–2012" },
  { name: "Adult Literacy (IFAL)", focus: "Adult education", detail: "Afar, October 2014–March 2016" },
];

function ProjectList({ projects, headingId }: { projects: Project[]; headingId: string }) {
  return (
    <ul aria-labelledby={headingId} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <li key={p.name}>
          <article id={p.slug} className="flex h-full flex-col overflow-hidden rounded-md border-l-4 border-ochre bg-paper shadow-sm transition-shadow hover:shadow-md">
            {/* Added Image Area */}
            <div className="h-48 w-full bg-green-tint relative">
              {p.image ? (
                <img src={p.image} alt={`${p.name} field work`} className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-green/30 font-heading text-xl">CVDA</div>
              )}
            </div>
            
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl">{p.name}</h3>
              <p className="mt-2 font-bold text-ink">{p.focus}</p>
              {p.detail && <p className="mt-1 text-base text-ink/80">{p.detail}</p>}
              
              {p.slug && (
                <div className="mt-auto pt-4">
                  <Link
                    href={`/programs/${p.slug}`}
                    className="inline-block font-bold text-green underline underline-offset-4 hover:text-ochre-dark"
                  >
                    View project details<span className="sr-only"> for {p.name}</span>
                  </Link>
                </div>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <section aria-labelledby="programs-page-heading" className="bg-green">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h1 id="programs-page-heading" className="max-w-3xl text-paper">
            Our programs
          </h1>
          <p className="mt-6 max-w-prose text-xl text-paper">
            Seven projects are active today. Over twenty years, CVDA has delivered many more.
          </p>
        </div>
      </section>

      <section aria-labelledby="current-heading" className="bg-green-tint">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 id="current-heading">Current projects (2024–2025)</h2>
          <ProjectList projects={current} headingId="current-heading" />
        </div>
      </section>

      <section aria-labelledby="historical-heading" className="mx-auto max-w-6xl px-5 py-20">
        <h2 id="historical-heading">Past projects</h2>
        <ProjectList projects={historical} headingId="historical-heading" />
      </section>

      <section aria-labelledby="partner-heading" className="bg-green">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="partner-heading" className="text-paper">Work with us</h2>
          <p className="mt-4 max-w-prose text-paper">
            Interested in a partnership or want to know more about a project? Write to us.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">Contact CVDA</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}