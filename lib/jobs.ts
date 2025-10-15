export type Job = {
  id: string
  title: string
  department: string
  type: "Full-time" | "Part-time" | "Contract" | "Internship"
  location: string
  salary: string
  description: string
  responsibilities: string[]
  skills: string[]
}

export const JOBS: Job[] = [
  {
    id: "senior-fe-developer",
    title: "Senior Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    salary: "$140k - $180k",
    description:
      "We’re seeking a Senior Frontend Developer to build delightful, performant web experiences. You’ll collaborate with product and design to ship high-impact features.",
    responsibilities: [
      "Architect, build, and maintain UI components and pages",
      "Collaborate with design and product on UX and feature scope",
      "Own performance and accessibility best practices",
      "Mentor junior engineers and review code",
    ],
    skills: ["React", "TypeScript", "Next.js", "Accessibility", "Testing"],
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    type: "Full-time",
    location: "New York, NY",
    salary: "$120k - $150k",
    description:
      "Design end-to-end product experiences from research to polished UI. Work closely with PMs and engineers to craft intuitive solutions.",
    responsibilities: [
      "Own design process from discovery to delivery",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Partner with engineers to ensure design quality",
      "Contribute to and evolve the design system",
    ],
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
  },
  {
    id: "data-analyst-contract",
    title: "Data Analyst",
    department: "Data",
    type: "Contract",
    location: "Remote",
    salary: "$70/hr - $95/hr",
    description: "Analyze data, build dashboards, and generate insights to guide product and business decisions.",
    responsibilities: [
      "Build reports and dashboards",
      "Define and track KPIs",
      "Partner with stakeholders to answer data questions",
      "Ensure data quality and documentation",
    ],
    skills: ["SQL", "Python", "dbt", "Looker", "Statistics"],
  },
  {
    id: "customer-success-manager",
    title: "Customer Success Manager",
    department: "Customer Success",
    type: "Full-time",
    location: "Austin, TX",
    salary: "$90k - $120k + bonus",
    description: "Own customer relationships, drive product adoption, and ensure customers achieve their goals.",
    responsibilities: [
      "Manage a book of business",
      "Lead onboarding and training sessions",
      "Identify expansion opportunities",
      "Gather product feedback and advocate for customers",
    ],
    skills: ["Communication", "CRM", "Problem Solving", "SaaS Experience"],
  },
  {
    id: "marketing-intern",
    title: "Marketing Intern",
    department: "Marketing",
    type: "Internship",
    location: "San Francisco, CA",
    salary: "$25/hr - $30/hr",
    description: "Assist with content creation, campaign execution, and social media analysis.",
    responsibilities: [
      "Draft blog and social posts",
      "Support campaign setup and tracking",
      "Help with performance analysis",
      "Collaborate across teams for content needs",
    ],
    skills: ["Copywriting", "Social Media", "Analytics", "Organization"],
  },
]

export const departments = Array.from(new Set(JOBS.map((j) => j.department))).sort()
export const jobTypes = Array.from(new Set(JOBS.map((j) => j.type))).sort()
export const locations = Array.from(new Set(JOBS.map((j) => j.location))).sort()
