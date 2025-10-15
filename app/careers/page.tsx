import type { Metadata } from "next"
import { JOBS } from "@/lib/jobs"
import { JobBrowser } from "@/components/careers/job-browser"
import { CareersBanner } from "@/components/careers/banner"

export const metadata: Metadata = {
  title: "Careers — Job Openings",
  description: "Explore open roles by department, type, and location.",
}

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <CareersBanner />
      <header id="open-roles" className="space-y-2">
        <h2 className="text-3xl font-semibold text-pretty text-primary">Careers</h2>
        <p className="text-muted-foreground">Join us to build the future. Browse roles and apply today.</p>
      </header>
      <JobBrowser jobs={JOBS} />
    </main>
  )
}
