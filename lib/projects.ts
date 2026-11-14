export type ProjectStat = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string[];
  donor: string;
  timeline: string;
  location: string;
  stats: ProjectStat[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "gavi-reach",
    name: "GAVI-REACH",
    tagline: "Immunization in conflict zones",
    summary: [
      "GAVI-REACH delivers routine immunization to children living in conflict-affected areas.",
      "The project focuses on zero-dose children, those who have not received a single routine vaccine dose.",
    ],
    donor: "GAVI",
    timeline: "Ongoing (began 2018–2021)",
    location: "Conflict-affected areas of Ethiopia",
    stats: [{ value: "22,262+", label: "Zero-dose children vaccinated" }],
    image: "/images/project-gavi.jpg",
  },
  {
    slug: "ffhpct",
    name: "USAID FFHPCT",
    tagline: "HIV prevention and care",
    summary: [
      "USAID FFHPCT supports HIV prevention and care services in Gullele (Addis Ababa) and Hawassa.",
    ],
    donor: "USAID",
    timeline: "Current (2024–2025)",
    location: "Gullele and Hawassa",
    stats: [],
    image: "/images/project-ffhpct.jpg",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}