import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { JOBS } from "@/lib/jobs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Params = { params: { id: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const job = JOBS.find((j) => j.id === params.id)
  return {
    title: job ? `${job.title} — Careers` : "Job Not Found — Careers",
    description: job?.description,
  }
}

export default function JobDetailPage({ params }: Params) {
  const job = JOBS.find((j) => j.id === params.id)
  if (!job) return notFound()

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <nav aria-label="Breadcrumb">
        <Link href="/careers" className="text-sm text-muted-foreground hover:underline">
          ← Back to all jobs
        </Link>
      </nav>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-pretty text-primary">{job.title}</h1>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{job.department}</Badge>
          <Badge variant="outline">{job.type}</Badge>
          <Badge variant="outline">{job.location}</Badge>
          <Badge variant="outline">{job.salary}</Badge>
        </div>
        <div>
          <Button asChild>
            <Link href={`/careers/${job.id}/apply`}>Apply Now</Link>
          </Button>
        </div>
      </header>

      <section className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>About the role</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{job.description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Responsibilities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Required Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {job.skills.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
