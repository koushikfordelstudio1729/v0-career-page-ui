"use client"

import { useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import type { Job } from "@/lib/jobs"

export type Filters = {
  query: string
  department: string
  type: string
  location: string
}

export function JobFilters({
  filters,
  setFilters,
  departments,
  types,
  locations,
  totalCount,
}: {
  filters: Filters
  setFilters: (next: Filters) => void
  departments: string[]
  types: string[]
  locations: string[]
  totalCount: number
}) {
  const clearDisabled = useMemo(() => {
    const noQuery = !filters.query || filters.query.trim() === ""
    const deptAll = !filters.department || filters.department === "all"
    const typeAll = !filters.type || filters.type === "all"
    const locAll = !filters.location || filters.location === "all"
    return noQuery && deptAll && typeAll && locAll
  }, [filters])

  return (
    <section aria-label="Filters" className="grid gap-4 rounded-lg border bg-card p-4 md:grid-cols-4">
      <div className="grid gap-2">
        <Label htmlFor="search">Job Title</Label>
        <Input
          id="search"
          placeholder="Search by title"
          value={filters.query}
          onChange={(e) => setFilters({ ...filters, query: e.target.value })}
        />
      </div>

      <div className="grid gap-2">
        <Label>Department</Label>
        <Select value={filters.department || "all"} onValueChange={(v) => setFilters({ ...filters, department: v })}>
          <SelectTrigger aria-label="Department filter">
            <SelectValue placeholder="All departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {departments.map((d) => (
              <SelectItem key={d} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Job Type</Label>
        <Select value={filters.type || "all"} onValueChange={(v) => setFilters({ ...filters, type: v })}>
          <SelectTrigger aria-label="Job type filter">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {types.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Location</Label>
        <Select value={filters.location || "all"} onValueChange={(v) => setFilters({ ...filters, location: v })}>
          <SelectTrigger aria-label="Location filter">
            <SelectValue placeholder="All locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {locations.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="md:col-span-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{totalCount} jobs</p>
        <Button
          variant="outline"
          onClick={() => setFilters({ query: "", department: "all", type: "all", location: "all" })}
          disabled={clearDisabled}
        >
          Clear filters
        </Button>
      </div>
    </section>
  )
}

export function applyFilters(jobs: Job[], filters: Filters) {
  return jobs.filter((j) => {
    const matchesQuery = filters.query ? j.title.toLowerCase().includes(filters.query.toLowerCase()) : true
    const matchesDept = !filters.department || filters.department === "all" ? true : j.department === filters.department
    const matchesType = !filters.type || filters.type === "all" ? true : j.type === filters.type
    const matchesLocation = !filters.location || filters.location === "all" ? true : j.location === filters.location
    return matchesQuery && matchesDept && matchesType && matchesLocation
  })
}
