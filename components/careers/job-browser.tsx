"use client"

import { useMemo, useState } from "react"
import type { Job } from "@/lib/jobs"
import { departments, jobTypes, locations } from "@/lib/jobs"
import { JobCard } from "./job-card"
import { JobFilters, applyFilters, type Filters } from "./job-filters"

export function JobBrowser({ jobs }: { jobs: Job[] }) {
  const [filters, setFilters] = useState<Filters>({ query: "", department: "all", type: "all", location: "all" })
  const filtered = useMemo(() => applyFilters(jobs, filters), [jobs, filters])

  return (
    <div className="space-y-6">
      <JobFilters
        filters={filters}
        setFilters={setFilters}
        departments={departments}
        types={jobTypes}
        locations={locations}
        totalCount={filtered.length}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-lg border bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground">No jobs match your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
