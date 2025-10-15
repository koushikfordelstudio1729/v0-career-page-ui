import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { JOBS } from "@/lib/jobs"
import { ApplyForm } from "@/components/careers/apply-form"

type Params = { params: { id: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const job = JOBS.find((j) => j.id === params.id)
  return {
    title: job ? `Apply — ${job.title}` : "Apply — Job Not Found",
  }
}

export default function ApplyPage({ params }: Params) {
  const job = JOBS.find((j) => j.id === params.id)
  if (!job) return notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <nav aria-label="Breadcrumb">
        <Link href={`/careers/${job.id}`} className="text-sm text-muted-foreground hover:underline">
          ← Back to job
        </Link>
      </nav>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-pretty text-primary">Apply for {job.title}</h1>
        <p className="text-muted-foreground">
          Fill out the form below. You’ll see a confirmation screen after submitting.
        </p>
      </header>

      <ApplyForm jobTitle={job.title} />
    </main>
  )
}
